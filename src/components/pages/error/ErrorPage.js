import { useNavigate } from "react-router-dom"
import Button from "../../common/button/Button"

export default function ErrorPage() {
   const navigate = useNavigate()
   //Business logic
   const returnClickHandler = () => {
      navigate("/")
   }
   return (
      <>
         <h1>Désolé, cette page n'existe pas !</h1>
         <br />
         <Button
            value={"Retourner à la page d'accueil"}
            clickHandler={returnClickHandler}
         />
      </>
   )
}
