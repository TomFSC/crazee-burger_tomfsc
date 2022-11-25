import { useLocation } from "react-router-dom"
import styled from "styled-components"
import NavBar from "./NavBar"
import { theme } from "../../../theme"
import OrderList from "./OrderList"
const { colors, borderRadius } = theme

export default function OrderPage() {
   const { state } = useLocation()

   return (
      <OrderPageStyled>
         <div className="order-container">
            <NavBar firstName={state} className="nav" />
            <OrderList />
         </div>
      </OrderPageStyled>
   )
}

//Style
const OrderPageStyled = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: ${colors.primary};
   .order-container {
      width: 1400px;
      height: 95vh;
      overflow: hidden;
      background-color: ${colors.background_white};
      border-radius: ${borderRadius.extraRound};
      box-shadow: inset 0px 0px 12px 0px ${colors.greySemiDark};
      .nav {
         position: absolute;
         top: 0;
      }
   }
`
