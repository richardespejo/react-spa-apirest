import React , { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/frase.js';

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007D35 0%, #007D35 40%, #0F574E 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

const Contenedor = styled.div`
  display:flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

function App() {

  const [ frase , guardarFrase ] = useState({});

  //consumo de endpoint con async y await
  const consultarAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json()
    guardarFrase(frase[0]);
  }

  //carga la frase a penas inicia el componente
  useEffect( () => {  
    consultarAPI()
  }, []);

  return (
    <Contenedor>
      <Frase
        frase={frase}
      />
      <Boton onClick={consultarAPI}>Obtener Frase</Boton>
    </Contenedor>
  );
}

export default App;
