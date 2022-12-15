import { useParams } from "react-router-dom"
import styled from "styled-components"
import Navbar from "./NavBar"
import { theme } from "../../../theme"
import Main from "./Main/Main"

const { colors, borderRadius } = theme

export default function OrderPage() {
   const { firstName } = useParams()

   return (
      <OrderPageStyled>
         <div className="order-container">
            <Navbar firstName={firstName} className="nav" />
            <Main />
         </div>
      </OrderPageStyled>
   )
}

//Style
const OrderPageStyled = styled.div`
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: ${colors.primary};
   .order-container {
      position: relative;
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
