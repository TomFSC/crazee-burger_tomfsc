import { useState } from "react"

function LoginPage() {
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

    //Render
  return (
    <>
    <h1>Bienvenue chez nous</h1>
    <h2>Connectez-vous</h2>
    <form action="submit" onSubmit={handleSubmit}>
        <input value={firstName} type="text" placeholder='Entrez votre prénom...' required onChange={handleChange}/>
        <button >Accédez à votre espace</button>
    </form>
    </>
  )
}

export default LoginPage