import React, { ChangeEvent, useEffect, useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import "./CadastroUsuario.css";
import { Link, useNavigate } from "react-router-dom";
import { cadastroUsuario } from "../../services/Service";
import User from "../../models/User";

function CadastroUsuario() {
  let navigate = useNavigate();
  const [confirmarSenha, setConfirmarSenha] = useState<String>("");
  const [user, setUser] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    token: "",
    foto: "",
  });

  useEffect(() => {
    if (userResult.id != 0) {
      navigate("/login");
      console.log(userResult);
    }
  }, [userResult]);

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    // Estrutura Condicional que verifica se as senhas batem e se a Senha tem mais de 8 caracteres
    if (confirmarSenha === user.senha && user.senha.length >= 8) {

        //Tenta executar o cadastro
        try {
            await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            alert("Usuário cadastrado com sucesso")

        //Se houver erro, pegue o Erro e retorna uma msg
        } catch (error) {
            console.log(`Error: ${error}`)
            
            //Pode modificar a msg de acordo com o erro 
            alert("Usuário já existente")
        }

    } else {
        alert("Insira no miníno 8 caracteres na senha.")    // Mensagem que indica a quantidade minima de caracteres

        setUser({ ...user, senha: "" }) // Reinicia o campo de Senha
        setConfirmarSenha("")           // Reinicia o campo de Confirmar Senha
    }
}

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={6} className="imagem-cadastro"></Grid>
      <Grid item xs={6} alignItems="center">
        <Box paddingX={10}>
          <form onSubmit={cadastrar}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="textos-cadastrar"
            >
              Cadastrar
            </Typography>
            <TextField
              value={user.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="nome"
              label="Nome completo"
              variant="outlined"
              name="nome"
              margin="normal"
              fullWidth
              required
            />
            <TextField
              value={user.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="usuario"
              label="Usuário"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
              required
            />
            <TextField
              value={user.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senha"
              label="Senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
              required
            />
            <TextField
              value={confirmarSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                confirmarSenhaHandle(e)
              }
              id="confirmarSenha"
              label="Confirmar Senha"
              variant="outlined"
              name="confirmarSenha"
              margin="normal"
              type="password"
              fullWidth
              required
            />
            <Box marginTop={2} textAlign="center">
                <Button type="submit" className="btn" size="medium">
                  Cadastrar
                </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CadastroUsuario;
