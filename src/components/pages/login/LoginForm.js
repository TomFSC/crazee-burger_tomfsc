import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../../common/button/Button"

export default function LoginForm() {
   const navigate = useNavigate()
   //State
   const [firstName, setFirstName] = useState("")

   //Business logic
   const handleChange = (event) => {
      event.preventDefault()
      setFirstName(event.target.value)
   }

   const handleSubmit = (event) => {
      //FirstName Regex
      const validFirstName = /^[a-zA-Z-\s]{1,50}$/
      event.preventDefault()
      if (!validFirstName.test(firstName)) {
         alert("Prénom invalide !")
         return
      }
      navigate("/order", { state: `${firstName}` })
      setFirstName("")
   }
   return (
      <form action="submit" onSubmit={handleSubmit}>
         <h1>Bienvenue chez nous !</h1>
         <br />
         <h2>Connectez-vous</h2>
         <input
            value={firstName}
            type="text"
            placeholder="Entrez votre prénom..."
            required
            onChange={handleChange}
         />
         <Button value={"Accédez à votre espace"} />
      </form>
   )
}
