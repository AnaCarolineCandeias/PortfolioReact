import React from "react"
import * as S from "./Style.jsx"
import Vnw from "../assets/vnw.png"
import Css from "../assets/css.png"
import Js from "../assets/js.png"
import Html from "../assets/html.png"
import Book from "../assets/book.png"

function Sobre() {
    
    return(
        <>
        <S.MainSobre>


            <S.SectionSobre>
                <h2>ESTUDOS VAI NA WEB</h2>
                <S.Card>
                    <S.DivCard>
                        <h2>Desenvolvimento front-end</h2>
                        <h3>AGO/2023 - MAIO/2024</h3>
                        <img src={Vnw} alt="Logo do vnw" />
                    </S.DivCard>

                </S.Card>

            </S.SectionSobre>

            <S.SectionSobre>
                <h2>HABILIDADES</h2>
                <S.Card>
                    <S.DivCard2>
                        <div>
                        <img src={Css} alt="logo css" />  
                        </div>
                        
                        <div>
                        <img src={Js} alt="logo javascript" />  
                        </div>

                        <div>
                        <img src={Html} alt="logo html5" />
                        </div>
                        
                       

                    </S.DivCard2>
                </S.Card>

            </S.SectionSobre>


            <S.SectionSobre>
                <h2>PROFISSIONAL</h2>
                <S.Card>
                    <S.DivCard3>
                        <img src={Book} alt="Logo de livros" />
                        <h3>Mulher, Preta, Salvador - Bahia, Moradora da Periferia, Mestra Em Educação - UFBA - 2023</h3>               
                    </S.DivCard3>

                </S.Card>

            </S.SectionSobre>


        </S.MainSobre>
        </>
    )
}

export default Sobre