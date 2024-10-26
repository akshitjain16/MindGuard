import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ChatBot from "./components/Chatbot";
import Games from "./pages/Games";
import Community from "./components/Community";
import ProfilePage from "./pages/ProfilePage";
import AuthGuard from "./components/AuthGuard";
import Login from "./components/Login";
import Register from "./components/Register";
import Chat from "./Chat";
import VoiceCall from "./VoiceCall";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/chat"
            element={
              <AuthGuard>
                <ChatBot />
              </AuthGuard>
            }
          />
          <Route path="/games" element={<Games />} />
          <Route path="/community" element={<Community />} />
          <Route
            path="/community/chat"
            element={
              <AuthGuard>
                <Chat />
              </AuthGuard>
            }
          />
          <Route
            path="/community/voice"
            element={
              <AuthGuard>
                <VoiceCall />
              </AuthGuard>
            }
          />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
