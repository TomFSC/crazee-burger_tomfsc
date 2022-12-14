import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { checkIfFirstNameIsValid } from "../../../utils/string"
import PrimaryButton from "../../reusable-ui/PrimaryButton"
import TextInput from "../../reusable-ui/TextInput"
import { BsPersonCircle } from "react-icons/bs"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { theme } from "../../../theme"
const { colors, fonts, spacing } = theme

export default function LoginForm() {
   const navigate = useNavigate()
   //State
   const [firstName, setFirstName] = useState("")

   //Conduct
   const handleChange = (event) => {
      event.preventDefault()
      setFirstName(event.target.value)
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      if (!checkIfFirstNameIsValid(firstName)) {
         setFirstName("")
         return
      }
      navigate(`/order/${firstName}`)
   }
   return (
      <LoginFormStyled action="submit" onSubmit={handleSubmit}>
         <h1>Bienvenue chez nous !</h1>
         <br />
         <h2>Connectez-vous</h2>
         <TextInput
            Icon={<BsPersonCircle className="icon" />}
            value={firstName}
            onChange={handleChange}
            placeholder={"Entrez votre prénom"}
            type="text"
            required
         />
         <PrimaryButton
            label={"Accéder à mon espace"}
            Icon={<MdOutlineKeyboardArrowRight className="icon" />}
            className="loginform-button"
         />
      </LoginFormStyled>
   )
}

//Style
const LoginFormStyled = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 500px;
   @media screen and (max-width: 480px) {
      width: 350px;
   }

   h1 {
      width: 100%;
      text-align: center;
      font-family: "Amatic SC", cursive;
      color: ${colors.white};
      font-size: ${fonts.size.P6};
      font-weight: ${fonts.weights.bold};
      padding: ${spacing.lg};
      border-bottom: 3px solid ${colors.red};
   }

   h2 {
      font-family: "Amatic SC", cursive;
      color: ${colors.white};
      font-weight: ${fonts.weights.semiBold};
      font-size: ${fonts.size.P4};
      margin: ${spacing.lg} 0 ${spacing.md} 0;
   }
   .loginform-button {
      width: 100%;
      height: 60px;
      margin-top: ${spacing.sm};
      font-size: ${fonts.size.P1};
      &:hover {
         transition: all 500ms;
         background-color: ${colors.white};
         color: ${colors.primary};
         border: 2px solid ${colors.primary};
      }
      .icon {
         scale: 1.2;
      }
   }
`
