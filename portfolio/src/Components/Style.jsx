import styled from "styled-components"


//Estilização Home

export const Perfil = styled.img`
    width: 40vw;
    height: 60vh;
    border-radius: 50%;
    
`

export const ContainerHome = styled.main`
display: flex;
justify-content:space-evenly;
align-items: center;
padding-top: 3rem;

@media (min-width: 320px) and (max-width: 768px){
  display: flex;
  flex-direction: column;

  img{
    width: 50vw;
  }
}
`


export const DivLogo = styled.img`
height: 10vh;
width: 10vw;
`


//----Estilização da navegação

export const Nav = styled.nav`

`
export const Header = styled.header`

`

export const Lista = styled.ul`
width: 100%;
display: flex;
justify-content: space-around;
list-style: none;
height: 20vh;
align-items: center;
@media (min-width: 320px) and (max-width: 768px){
    display: flex; 
    flex-direction: column;
    height: 40vh;
    border: solid black;
}


a{
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.5rem;

    color: #08722b;
}

`

//Estilização Projetos
export const MainProjetos = styled.main`
display: flex;
justify-content: space-evenly;
align-items:center;
`

export const SectionProjetos = styled.section`
height: 70vh;
width: 25vw;
margin-top: 3rem;
border: solid black 5px;
border-radius: 50px;
display: flex;
flex-direction: column;


h2{
    font-size: 1.6rem;
    text-align: center;
    padding-top: 3rem;
}
`

export const CardP = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
height: 50vh;
`

export const DivCardP = styled.div` 
width: 30vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
height: 40vh; 

div{
    display: flex;
    align-items: center;
    justify-content: center;
}

img{
    
    height: 30vh;
    width: 20vw;
    
}
`

export const DivCardP2 = styled.div`
width:30vw;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
height: 40vh;
div{
    display: flex;
    align-items: center;
}

img{
    
    height: 30vh;
    
}
`
export const DivCardP3 = styled.div`
width: 30vw;
height: 40vh;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
height: 70vh;
div{
    display: flex;
    align-items: center;
}

img{
    
    height: 30vh;
    width: 20vw;
    
}


`
export const DivCardP4 = styled.div`
width: 30vw;
height: 40vh;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
height: 70vh;
div{
    display: flex;
    align-items: center;
}

img{
    
    height: 30vh;
    
}

`
//Estilização Sobre
export const MainSobre = styled.main`
display: flex;
justify-content: space-evenly;
align-items:center;
`

export const SectionSobre = styled.section`
height: 70vh;
width: 30vw;
margin-top: 3rem;
border: solid black 5px;
border-radius: 50px;
h2{
    font-size: 1.6rem;
    text-align: center;
    padding-top: 3rem;
}
`

export const Card = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
height: 50vh;
`

export const DivCard = styled.div` 
width: 25vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
height: 20vh; 
h2{
    color: #131212;
}

h3{
    color: #131212;
    
}

`

export const DivCard2 = styled.div`
width: 70%;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
height: 70vh;
div{
    display: flex;
    align-items: center;
}

`
export const DivCard3 = styled.div`
width: 30vw;
height: 40vh;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
height: 70vh;
div{
    display: flex;
    align-items: center;
}

h3{
    text-align: center;
    font-size: 1.4rem;
    color: #131212;
}
`

//Estilização Contatos
export const HeaderContatos = styled.header`
display: flex;
margin-left: 5rem;
padding-bottom: 3rem;
`
export const MainContatos = styled.main`

`
export const SectionContatos = styled.section`
display: flex;
padding-top: 5rem;
justify-content: space-around;
`
export const Footer = styled.footer`
margin-top: 10rem;
display: flex;
justify-content: center;
align-items: center;
h4{
    font-size: 1em;
    font-family: "Lora", serif;
    font-style: italic;
}
`





