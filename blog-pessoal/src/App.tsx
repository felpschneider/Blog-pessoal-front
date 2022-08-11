import React from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import CadastrarPost from "./components/postagens/cadastrarPost/CadastrarPost";
import DeletarPostagens from "./components/postagens/deletarPostagens/DeletarPostagens";
import ListaPostagem from "./components/postagens/listaPostagens/ListaPostagem";
import DeletarTema from "./components/temas/deletarTema/DeletarTema";
import ListaTema from "./components/temas/listaTema/ListaTema";
import CadastroTema from "./components/temas/cadastroTema/CadastroTema";
import CadastroUsuario from "./pages/cadastroUsuario/CadastroUsuario";
import { Provider } from "react-redux";
import store from "./store/Store";
import Perfil from "./pages/Perfil/Perfil";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer/>
      <Router>
        <Navbar />
        <div style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastrousuario" element={<CadastroUsuario />} />
            <Route path="/temas" element={<ListaTema />} />
            <Route path="/postagens" element={<ListaPostagem />} />
            <Route path="/formularioPostagem" element={<CadastrarPost />} />
            <Route path="/formularioPostagem/:id" element={<CadastrarPost />} />
            <Route path="/formularioTema" element={<CadastroTema />} />
            <Route path="/formularioTema/:id" element={<CadastroTema />} />
            <Route path="/deletarPostagem/:id" element={<DeletarPostagens />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
