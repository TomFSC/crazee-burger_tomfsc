import { useLocation } from "react-router-dom"
import styled from "styled-components"
import NavBar from "./NavBar"
import { theme } from "../../../theme"
import ProductCard from "./ProductCard"
import { fakeMenu2 } from "../../../fakeData/fakeMenu"
const { colors, borderRadius } = theme

export default function OrderPage() {
   const { state } = useLocation()

   return (
      <OrderPageStyled>
         <div className="order-container">
            <NavBar firstName={state} className="nav" />
            <div className="order-list">
               {fakeMenu2.map((menu) => {
                  const { imageSource, title, price } = menu
                  return (
                     <ProductCard
                        title={title}
                        imageSource={imageSource}
                        price={price}
                     />
                  )
               })}
            </div>
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
      background-color: ${colors.white};
      border-radius: ${borderRadius.extraRound};
      box-shadow: inset 0px 0px 12px 0px ${colors.greySemiDark};
      .nav {
         position: absolute;
         top: 0;
         z-index: 2;
      }
      .order-list {
         width: 100%;
         height: 88%;
         padding: 35px;
         display: grid;
         grid-template-columns: repeat(4, 1fr);
         grid-auto-rows: 350px;
         grid-gap: 25px;
         overflow: scroll;
      }
   }
`
