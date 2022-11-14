import { useNavigate } from "react-router-dom"

export default function ErrorPage() {
   const navigate = useNavigate()
   //Conduct
   const returnClickHandler = () => {
      navigate("/")
   }
   return (
      <>
         <h1>Désolé, cette page n'existe pas !</h1>
         <br />
         <button onClick={returnClickHandler}>
            Retourner à la page d'accueil
         </button>
      </>
   )
}
