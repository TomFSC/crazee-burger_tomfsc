import { useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components"
import NavBar from "./NavBar"

export default function OrderPage() {
   const { state } = useLocation()
   const navigate = useNavigate()
   const logoutClickHandler = () => {
      navigate("/")
   }

   return (
      <OrderPageStyled>
         <NavBar state={state} onClick={logoutClickHandler} />
      </OrderPageStyled>
   )
}

const OrderPageStyled = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content: center;
`
