// src/components/Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IconButton, Tooltip, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import logo from '../assets/logo.png'; 
import '../styles/Navbar.css'; 

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from local storage
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="MindGuard Logo" className="logo" />
      </div>
      <div className="nav-buttons">
        <Tooltip title="Home" placement="right">
          <Link to="/" className="nav-link">
            <IconButton>
              <HomeIcon />
            </IconButton>
          </Link>
        </Tooltip>
        <Tooltip title="Chat" placement="right">
          <Link to="/chat" className="nav-link">
            <IconButton>
              <ChatIcon />
            </IconButton>
          </Link>
        </Tooltip>
        <Tooltip title="Games" placement="right">
          <Link to="/games" className="nav-link">
            <IconButton>
              <SportsEsportsIcon />
            </IconButton>
          </Link>
        </Tooltip>
        <Tooltip title="Community" placement="right">
          <Link to="/community" className="nav-link">
            <IconButton>
              <PeopleIcon />
            </IconButton>
          </Link>
        </Tooltip>
        <Tooltip title="Profile" placement="right">
          <Link to="/profile" className="nav-link">
            <IconButton>
              <PersonIcon />
            </IconButton>
          </Link>
        </Tooltip>
        <Button color="inherit" onClick={handleLogout}>Logout</Button> {/* Logout button */}
      </div>
    </div>
  );
};

export default Navbar;
