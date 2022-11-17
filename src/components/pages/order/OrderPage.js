import { useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../../theme"
import NavBar from "./NavBar"

export default function OrderPage() {
   const { state } = useLocation()
   const navigate = useNavigate()
   const logoutClickHandler = () => {
      navigate("/")
   }

   return (
      <OrderPageStyled>
         <div className="order-container">
            <NavBar state={state} onClick={logoutClickHandler} />
         </div>
      </OrderPageStyled>
   )
}

const { colors, borderRadius } = theme

const OrderPageStyled = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content: center;
   background-color: ${colors.primary};
   .order-container {
      width: 100%;
      margin: 20px;
      overflow: hidden;
      background-color: ${colors.white};
      border-radius: ${borderRadius.extraRound};
      box-shadow: inset 0px 0px 12px 0px ${colors.greySemiDark};
      @media screen and (max-width: 1024px) {
         width: 75%;
      }
      @media screen and (max-width: 450px) {
         width: 100%;
      }
   }
`
