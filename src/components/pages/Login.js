import { useState } from "react"

function LoginPage() {
    //State
    const [firstName, setFirstName] = useState("")

    //Business logic
const handleChange = (event) => {
    event.preventDefault()
    setFirstName(event.target.value)
}

const handleSubmit = () => {
    alert(`Bonjour ${firstName}`)
    setFirstName("")
}

    //Render
  return (
    <>
    <h1>Bienvenue chez nous</h1>
    <h2>Connectez-vous</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Entrez votre prénom...' required onChange={handleChange}/>
        <button >Accédez à votre espace</button>
    </form>
    </>
  )
}

export default LoginPage