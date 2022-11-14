import styled from "styled-components"
import LoginForm from "./LoginForm"
import backgroundImg from "../../../images/burger-background.jpg"
import MainTitle from "./MainTitle"

export default function LoginPage() {
   //Render
   return (
      <LoginContainerStyled>
         <MainTitle />
         <LoginForm />
      </LoginContainerStyled>
   )
}

//Style

const LoginContainerStyled = styled.div`
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   background: url(${backgroundImg}) rgba(0, 0, 0, 0.7);
   background-size: cover;
   background-blend-mode: darken;
`
