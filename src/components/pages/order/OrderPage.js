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
            <NavBar firstName={state} className="nav" />
            <div className="order-list">
               <div className="one">
                  <div className="product-card">
                     <img src="/images/burger-bacon-egg.png" alt="burger1" />
                     <div className="product-infos">
                        <h3>BURGER SMOKE BBQ</h3>
                        <div className="cta">
                           <p>PRICE</p>
                           <button>Ajouter</button>
                        </div>
                     </div>
                  </div>
               </div>
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

         .product-card {
            height: 330px;
            width: 240px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            border: 2px solid red;
            border-radius: 15px;
            margin: auto;
            img {
               width: 75%;
               height: 40%;
            }
            .product-infos {
               display: flex;
               flex-direction: column;
               width: 100%;
               height: 40%;
               align-items: center;
               justify-content: space-around;
               border: 2px solid green;

               .cta {
                  width: 100%;
                  height: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: space-around;
                  border: 2px solid blue;
               }
            }
         }
      }
   }
`
