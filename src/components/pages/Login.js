function LoginPage() {
    //Render
  return (
    <>
    <h1>Bienvenue chez nous</h1>
    <h2>Connectez-vous</h2>
    <form action="submit">
        <input type="text" placeholder='Entrez votre prénom...' required/>
        <button>Accédez à votre espace</button>
    </form>
    </>
  )
}

export default LoginPage