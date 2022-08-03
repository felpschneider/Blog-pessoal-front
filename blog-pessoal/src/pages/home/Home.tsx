import { Grid, Box, Typography, Button } from "@mui/material";
import React from "react";
import TabPostagem from "../../components/postagens/tabPostagens/TabPostagem";
import "./Home.css";

function Home() {
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
            <Box marginRight={1}></Box>
            <Button variant="outlined" className="btn">
              Ver Postagens
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6} >
          <img
            src="https://img.freepik.com/free-vector/rock-band-concept-illustration_114360-2835.jpg?w=740&t=st=1658934530~exp=1658935130~hmac=fac99ac1e4621381f643c7f5b3c23fc344be826c538b2d29ff9d08cea3766b17"
            alt=""
            width="500px"
            height="350px"
          />
        </Grid>
        <Grid xs={12} className="postagens">
          <TabPostagem/>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
