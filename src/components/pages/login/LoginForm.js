import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../../theme"
import { checkIfFirstNameIsValid } from "../../../utils/string"
import { BsPersonCircle } from "react-icons/bs"
import Button from "../../reusable-ui/Button"

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
      <FormStyled action="submit" onSubmit={handleSubmit}>
         <h1>Bienvenue chez nous !</h1>
         <br />
         <h2>Connectez-vous</h2>
         <div className="input-wrapper">
            <BsPersonCircle style={{ color: `${colors.greyDark}` }} />
            <input
               value={firstName}
               type="text"
               placeholder="Entrez votre prénom"
               required
               onChange={handleChange}
            />
         </div>
         <Button
            label={"Accéder à mon espace"}
            isActive={firstName ? "isActive" : ""}
         />
      </FormStyled>
   )
}

//Style
const { colors, fonts, weights, spacing, borderRadius } = theme

const FormStyled = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 400px;

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
   .input-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: ${spacing.sm};
      width: 100%;
      height: 60px;
      border: 1px solid ${colors.dark};
      background-color: ${colors.white};
      border-radius: ${borderRadius.round};
   }
   input {
      width: 80%;
   }
`
