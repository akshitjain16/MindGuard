const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const app = express();
const connectDB = require("./db");
const server = http.createServer(app);
const User = require("./User");
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const rooms = new Set(); // Store room names
const userRooms = {};

app.use(
  cors({
    origin: "http://localhost:3000", // Replace with the frontend's URL
    credentials: true,
  })
);

connectDB();

app.use(bodyParser.json());

let posts = []; // In-memory array to store posts

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Check if user already exists
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ error: 'Username already exists' });
      }
  
      // Hash password (make sure to include bcrypt)
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create new user
      const newUser = new User({ username, password: hashedPassword });
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ error: 'User registration failed' });
    }
  });

  app.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }
  
      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }
  
      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Login failed' });
    }
  });

// Middleware to authenticate JWT
const authenticateJWT = (req, res, next) => {
  const token = req.headers["authorization"];
  if (token) {
    jwt.verify(token, "674285", (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.User = User;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// API Endpoints
app.get("/api/community/posts", (req, res) => {
  res.json(posts);
});

app.post("/api/community/posts", (req, res) => {
  const { content } = req.body;
  if (content) {
    const newPost = { content, id: posts.length + 1 }; // Add a simple id
    posts.push(newPost);
    res.status(201).json(newPost);
  } else {
    res.status(400).json({ error: "Content is required" });
  }
});

const connectedUsers = {};

io.use((socket, next) => {
  const token = socket.handshake.query.token;
  if (token) {
    jwt.verify(token, "674285", (err, decoded) => {
      if (err) {
        return next(new Error("Authentication error"));
      }
      socket.user = decoded;
      next();
    });
  } else {
    next(new Error("Authentication error"));
  }
});

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('get rooms', () => {
      socket.emit('available rooms', Array.from(rooms));
  });

  socket.on('join room', ({ room, username }) => {
      socket.join(room);
      rooms.add(room);
      userRooms[socket.id] = room;
      socket.to(room).emit('chat message', { username: 'System', content: `${username} has joined the room.` });
  });

  socket.on('chat message', (msg) => {
      io.to(msg.room).emit('chat message', msg);
  });

  socket.on('disconnect', () => {
      const room = userRooms[socket.id];
      if (room) {
          socket.to(room).emit('chat message', { username: 'System', content: 'A user has left the room.' });
          delete userRooms[socket.id];
      }
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
