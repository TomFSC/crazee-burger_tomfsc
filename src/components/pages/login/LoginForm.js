import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../../theme"
import { checkIfFirstNameIsValid } from "../../../utils/string"
import Button from "../../reusable-ui/Button"
import TextInput from "../../reusable-ui/TextInput"
import { BsPersonCircle } from "react-icons/bs"

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
      navigate("/order", { state: `${firstName}` })
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
         <Button
            label={"Accéder à mon espace"}
            isActive={firstName ? "isActive" : ""}
         />
      </LoginFormStyled>
   )
}

//Style
const { colors, fonts, weights, spacing } = theme

const LoginFormStyled = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
   max-width: 350px;

   h1 {
      width: 100%;
      text-align: center;
      font-family: "Amatic SC", cursive;
      color: ${colors.white};
      font-size: ${fonts.P5};
      font-weight: ${weights.bold};
      padding: ${spacing.lg};
      border-bottom: 3px solid ${colors.red};
   }

   h2 {
      font-family: "Amatic SC", cursive;
      color: ${colors.white};
      font-weight: ${weights.semiBold};
      font-size: ${fonts.P4};
      margin: ${spacing.lg} 0 ${spacing.md} 0;
   }
`
