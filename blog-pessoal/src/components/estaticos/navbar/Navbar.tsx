import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { addToken } from "../../../store/tokens/Actions";
import { toast } from "react-toastify";

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const dispatch = useDispatch();
  let navigate = useNavigate();

  function goLogout() {
    dispatch(addToken(""));
    toast.info('Usuário deslogado!', {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      });
    navigate("/login");
  }

  var navbarComponent;

  if (token != "") {
    navbarComponent = (
      <AppBar position="static">
        <Toolbar variant="dense" className="background-menu" >
          <Box className="cursor">
            <Typography variant="h5" color="inherit" >
              MusicShare
            </Typography>
          </Box>

          <Box display="flex" alignSelf="center" >
            <Link to="/home" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit" >
                  HOME
                </Typography>
              </Box>
            </Link>
            <Link to="/postagens" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  POSTAGENS
                </Typography>
              </Box>
            </Link>
            <Link to="/temas" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  TEMAS
                </Typography>
              </Box>
            </Link>
            <Link to="/formularioTema" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  CADASTRAR TEMA
                </Typography>
              </Box>
            </Link>
            <Link to="/perfil" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  PERFIL
                </Typography>
              </Box>
            </Link>
            <Box mx={1} className="cursor" onClick={goLogout}>
              <Typography variant="h6" color="inherit">
                LOGOUT
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
  return <>{navbarComponent}</>;
}

export default Navbar;
