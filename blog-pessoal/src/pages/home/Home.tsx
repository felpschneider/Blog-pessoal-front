import { Grid, Box, Typography, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ModalPostagens from "../../components/postagens/modalPostagens/ModalPostagens";
import TabPostagem from "../../components/postagens/tabPostagens/TabPostagem";
import { TokenState } from "../../store/tokens/TokensReducer";
import "./Home.css";

function Home() {
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      toast.warn("Você precisa estar logado!", {
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
  }, [token]);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="caixa"
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo"
            >
              Seja bem vindo(a)!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="titulo"
            >
              Expresse aqui os seus pensamentos e opiniões musicais!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagens />
            </Box>
            <Link to="/postagens" className="text-decorator-none">
              <Button variant="outlined" className="btn">
                Ver Postagens
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            src="https://img.freepik.com/free-vector/rock-band-isometric-composition_1284-23938.jpg?w=740&t=st=1660169115~exp=1660169715~hmac=690c02b2c996150526177c1d24cfd6b4dc5ff3f293693681834181645a16bd62"
            alt=""
            width="500px"
            height="500px"
          />
        </Grid>
        <Grid xs={12} className="postagens">
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
