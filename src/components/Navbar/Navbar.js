import React, { useEffect, useState } from "react";
import "./Navbar.css";
import earn from "./../assets/images/earn.jpeg";
import { Typography, Link, Button, IconButton, Avatar } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, Close, Settings } from "@mui/icons-material";

const Navbar = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("earnProfile"))
  );
  const [navbar, setNavbar] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {};
  const handleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="navbarDiv">

      <nav className="navbarMob">
        <IconButton className="navbarMenu" onClick={handleNavbar}>
          <Menu />
        </IconButton>
        <img
          src={earn}
          alt="earn"
          style={{ height: "40px", borderRadius: "0px 20px" }}
          className="appImg"
        />

        {user ? (
          <>
            <Typography variant="h6">{user.profile.name}</Typography>
            <Button variant="contained" color="error" onClick={logout}>
              Logout
            </Button>
            <Button variant="outlined" sx={{ color: "white" }}>
              <Settings />
            </Button>
          </>
        ) : (
          <>
            <Button variant="outlined">
              <a href="/auth" style={{ color: "white" }}>
                Sign In
              </a>
            </Button>
            <Button variant="outlined" sx={{ color: "white" }}>
              <Settings />
            </Button>
          </>
        )}
      </nav>

      <nav className={navbar ? "navbar" : "noNavbar"}>
        <IconButton className="navbarClose" onClick={handleNavbar}>
          <Close />
        </IconButton>
        <Typography variant="body1" className="navbarTypo" onClick={()=> { navigate('/');setNavbar(false) }}>
            Home
        </Typography>

        <Typography variant="body1" className="navbarTypo" onClick={()=> { navigate('/about'); setNavbar(false) }}>
            About Us
        </Typography>

        <Typography variant="body1" className="navbarTypo" onClick={()=> { navigate('/');setNavbar(false) }}>
            Investment Plans
        </Typography>

        <Typography variant="body1" className="navbarTypo" onClick={()=> { navigate('/');setNavbar(false) }}>
            FAQ
        </Typography>

        <Typography variant="body1" className="navbarTypo" onClick={()=> { navigate('/');setNavbar(false) }}>
            Support
        </Typography>

        {user ? (
          <>
            <Typography variant="h6">{user.profile.name}</Typography>
            <Button variant="outlined" sx={{ color: "white" }} onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <Button variant="outlined" className="navbarSignIn">
            <a href="/auth" style={{ color: "white" }}>Sign In</a>
          </Button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
