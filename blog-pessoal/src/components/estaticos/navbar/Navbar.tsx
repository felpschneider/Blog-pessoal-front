import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" className="background-menu">
          <Box className="cursor">
            <Typography variant="h5" color="inherit">
              MusicShare
            </Typography>
          </Box>
          <Box display="flex" justifyContent="">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                HOME
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                POSTAGENS
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                TEMAS
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                CADASTRAR TEMA
              </Typography>
            </Box>
            <Link to={"/login"} className="text-decoration-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  LOGOUT
                </Typography>
              </Box>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
