import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" style={{backgroundColor: "#3F51B5"}}>
          <Box style={{cursor: "pointer"}}>
            <Typography variant="h5" color="inherit">
              BlogPessoal
            </Typography>
          </Box>

          <Box display="flex" justifyContent="start">
            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6" color="inherit">
                home
              </Typography>
            </Box>
            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6" color="inherit">
                postagens
              </Typography>
            </Box>
            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6" color="inherit">
                temas
              </Typography>
            </Box>
            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6" color="inherit">
                cadastrar tema
              </Typography>
            </Box>

            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6" color="inherit">
                logout
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
