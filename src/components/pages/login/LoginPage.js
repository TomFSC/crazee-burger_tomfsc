import styled from "styled-components"
import LoginForm from "./LoginForm"
import Logo from "../../reusable-ui/Logo"
import { theme } from "../../../theme"

export default function LoginPage() {
   //Render
   return (
      <LoginPageStyled>
         <Logo className="logo-loginpage" />
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
   background: url("/images/burger-background.jpg") rgba(0, 0, 0, 0.7);
   background-size: cover;
   background-blend-mode: darken;
   .logo-loginpage {
      scale: 3.5;
      margin-bottom: ${theme.spacing.xxl};
      @media screen and (max-width: 1024px) {
         scale: 2;
      }
   }
`
