import React from 'react'
import {createGlobalStyle} from "styled-components"
import Navegacao from './Components/Navegacao.jsx'


const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    background-color: #3af5cd6a;
    color: #08722b;
    font-weight: bold;
    font-family: "Merienda", cursive;
  }
`

function App() {

  return (
    <>      

      <GlobalStyle />

      <Navegacao />
    </>
  )
}

export default App
