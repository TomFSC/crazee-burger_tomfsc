import { useNavigate, useLocation } from "react-router-dom"
import Button from "../../common/button/Button"

export default function OrderPage() {
   const navigate = useNavigate()
   const { state } = useLocation()
   //Business logic
   const logoutClickHandler = () => {
      navigate("/")
   }
   return (
      <>
         <h1>Bonjour {state}</h1>
         <br />
         <Button value={"Déconnexion"} onClick={logoutClickHandler} />
      </>
   )
}
