import React from "react"
import * as S from "./Style.jsx"
import 'bootstrap/dist/css/bootstrap.min.css'
import Linkedin from "../assets/linkedin.png"
import Github from "../assets/github.png"
import Email from "../assets/email.png"
import Instagram from "../assets/instagram.png"

function Contatos() {
    
    return(
        
        <>
        <S.HeaderContatos>
                <h2>MÍDIAS SOCIAIS</h2>

        </S.HeaderContatos>

      <S.MainContatos>
        <S.SectionContatos>
          
          <a href="https://www.linkedin.com/in/ana-caroline-candeias-dos-santos-439613194/"><img src={Linkedin}
            alt=""/></a>

          <a href= "https://github.com/AnaCarolineCandeias"><img src={Github}
            alt=""/></a>

          <a href="mailto:5c796e5903391f21a23246fc41dd58bb"><img src={Email}
            alt="" /></a>
          
          <a href= "https://instagram.com/anacaroline_crs?igshid=OGQ5ZDc2ODk2ZA==">
          <img src={Instagram}
            alt="" /></a>
         
        </S.SectionContatos>

      </S.MainContatos>

      <S.Footer>
        <h4>Desenvolvido por Ana Caroline Candeias dos Santos</h4>
      </S.Footer>
    </>

    )
}

export default Contatos