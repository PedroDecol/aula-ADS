import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Produto from './components/Produtos';

function App() {
  return (
    <>
      <Produto
        img="https://m.media-amazon.com/images/I/81hJD-odFeL._AC_SX679_.jpg"
        titulo="Parafusadeira"
        preco="171,90"
      />
      <Produto
        img="https://m.media-amazon.com/images/I/61ZmjmMLsRL._AC_SX679_.jpg"
        titulo="Kit de Ferramentas 129 Peças"
        preco="91,92"
      />
      <Produto
        img="https://m.media-amazon.com/images/I/51YUlZnagyL._AC_SX679_.jpg"
        titulo="Cortador de Vidro com Reservatório Cabo Plástico"
        preco="37,49"
      />
      <Produto
        img="https://m.media-amazon.com/images/I/61GYVVB6PML._AC_SX679_.jpg"
        titulo="SERRA MARMORE 110MM"
        preco="439,00"
      />
      <Produto
        img="https://m.media-amazon.com/images/I/61vJjliT9OL.__AC_SX300_SY300_QL70_ML2_.jpg"
        titulo="Kit Parafusos Buchas 2000 Pçs C/Maleta Chipboard P/Madeira"
        preco="167,00"
      />
    </>
  );
}

export default App;
