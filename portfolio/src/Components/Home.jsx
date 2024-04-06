import React from "react"
import Perfil from "../assets/img-c-fundo-new.png"
import * as S from "./Style.jsx"

function Home() {
    
    return(
        <S.ContainerHome>

            <S.Perfil src={Perfil} alt= "" />

            
            <div>
            <h3>Olá, essa sou eu!</h3>
            <h1><span>Ana Caroline Candeias dos Santos</span></h1>
            <h3>Aluna Vai na Web - Turma 1 - 2023/2024</h3>
            <h3>Venham navegar pelo o meu portfólio.</h3>
            </div>
        </S.ContainerHome>
    
    )
}

export default Home