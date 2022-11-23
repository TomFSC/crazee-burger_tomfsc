import { useLocation } from "react-router-dom"
import styled from "styled-components"
import NavBar from "./NavBar"
import { theme } from "../../../theme"
const { colors, borderRadius } = theme

export default function OrderPage() {
   const { state } = useLocation()

   return (
      <OrderPageStyled>
         <div className="order-container">
            <NavBar firstName={state} />
         </div>
      </OrderPageStyled>
   )
}

//Style
const OrderPageStyled = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content: center;
   background-color: ${colors.primary};
   .order-container {
      width: 1400px;
      margin: 20px;
      overflow: hidden;
      background-color: ${colors.white};
      border-radius: ${borderRadius.extraRound};
      box-shadow: inset 0px 0px 12px 0px ${colors.greySemiDark};
   }
`
