import { useNavigate } from "react-router-dom"

export default function ErrorPage() {
   const navigate = useNavigate()
   //Business logic
   const handleClick = () => {
      navigate("/")
   }
   return (
      <>
         <h1>Désolé, cette page n'existe pas</h1>
         <br />
         <button onClick={handleClick}>Retourner vers la page d'accueil</button>
      </>
   )
}
