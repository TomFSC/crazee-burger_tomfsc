import { useNavigate, useLocation } from "react-router-dom"

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
         <button onClick={logoutClickHandler}>Déconnexion</button>
      </>
   )
}
