import styled from "styled-components"
import LoginForm from "./LoginForm"
import Logo from "../../reusable-ui/Logo"

export default function LoginPage() {
   //Render
   return (
      <LoginPageStyled>
         <Logo />
         <LoginForm />
      </LoginPageStyled>
   )
}

//Style

const LoginPageStyled = styled.div`
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background: url("images/burger-background.jpg") rgba(0, 0, 0, 0.7);
   background-size: cover;
   background-blend-mode: darken;
`
