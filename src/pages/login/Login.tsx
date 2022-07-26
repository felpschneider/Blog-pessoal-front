import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import UserLogin from "../../models/UserLogin";
import useLocalStorage from "react-use-localstorage";
import { api, login } from "../../services/Service";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/Actions";
import { toast } from "react-toastify";

function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState("");
  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    token: "",
  });
  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }
  // Hook de efeito colateral

  useEffect(() => {
    if (token != "") {
      dispatch(addToken(token));
      navigate("/home");
    }
  }, [token]);

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(`/usuarios/logar`, userLogin, setToken);
      toast.success('Usuário logado com sucesso!', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    } catch (error) {
      toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    }
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid xs={6} alignItems="center">
        <Box paddingX={20}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="textosFooter"
            >
              Entrar
            </Typography>
            <TextField
              value={userLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="usuario"
              label="Usuário"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            />
            <TextField
              value={userLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senha"
              label="Senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Button type="submit" className="btn">
                Logar
              </Button>
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography variant="subtitle1" gutterBottom align="center">
                Não tem uma conta?
              </Typography>
            </Box>
            <Link to={"/cadastrousuario"}>
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
                className="textosFooter"
              >
                Cadastre-se
              </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid xs={6} className="imgFooter"></Grid>
    </Grid>
  );
}

export default Login;
