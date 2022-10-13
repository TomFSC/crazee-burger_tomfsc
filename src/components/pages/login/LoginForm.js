import { useState } from "react"

export default function LoginForm() {
   //State
   const [firstName, setFirstName] = useState("")

   //Business logic
   const handleChange = (event) => {
      event.preventDefault()
      setFirstName(event.target.value)
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      alert(`Bonjour ${firstName}`)
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
         <button>Accédez à votre espace</button>
      </form>
   )
}
