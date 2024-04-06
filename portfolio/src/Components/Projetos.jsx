import React from "react"
import * as S from "./Style.jsx"
import Vnw from "../assets/vnw.png"
import Projetotw from "../assets/projetotw.jpg"
import Projetoloja from "../assets/projetoloja.jpg"
import Projetofantastika from "../assets/projetofantastika.jpg"
import Projetocartoon from "../assets/projetocartoon.jpg"


function Projetos() {
    
    return(
        <>
        <h2>Esses foram alguns Projetos <img src={Vnw} alt="Logo do vnw" /></h2>
        <S.MainProjetos>


            <S.SectionProjetos>
                    
                    <div>
                    <h2>Projeto Loja de Roupas</h2> 
                    </div>
                    
                <S.CardP>
                    <S.DivCardP>
                    
                        <div>
                        <img src={Projetoloja} alt="Imagem Projeto Loja de Roupas" /> 
                        </div> 
                    </S.DivCardP>

                </S.CardP>

            </S.SectionProjetos>

            <S.SectionProjetos>
                    <div>
                    <h2>Projeto Fantastika</h2>
                    </div>
                    
                <S.CardP>
                    <S.DivCardP2>
                                    
                        <div>
                        <img src={Projetofantastika} alt="Imagem Projeto Fantastika" />
                        </div>        
                                              
                    </S.DivCardP2>
                </S.CardP>

            </S.SectionProjetos>


            <S.SectionProjetos>
            <div>
                    <h2>Projeto The Witcher</h2>
                    </div>
                <S.CardP>
                    <S.DivCardP3>
                    
                    <div>
                        <img src={Projetotw} alt="Imagem Projeto The Witcher" />
                        </div> 
                        
                    </S.DivCardP3>

                </S.CardP>

            </S.SectionProjetos>

            <S.SectionProjetos>
                <div>
                    <h2>Projeto Cartoon</h2>
                </div>
                <S.CardP>
                    <S.DivCardP4>
                        <img src={Projetocartoon} alt="Imagem Projeto Cartoon" />
                        
                    </S.DivCardP4>

                </S.CardP>

            </S.SectionProjetos>


        </S.MainProjetos>
       
        </>
    )
}

export default Projetos