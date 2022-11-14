import styled from "styled-components"
import LoginForm from "./LoginForm"
import backgroundImg from "../../../images/burger-background.jpg"

export default function LoginPage() {
   //Render
   return (
      <LoginContainerStyled>
         <LoginForm />
      </LoginContainerStyled>
   )
}

const LoginContainerStyled = styled.div`
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   background: url(${backgroundImg}) rgba(0, 0, 0, 0.7);
   background-size: cover;
   background-blend-mode: darken;
`
