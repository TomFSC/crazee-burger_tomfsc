import styled from "styled-components"
import { theme } from "../../../theme"
import { roundedPrice } from "../../../utils/calculation"
import PrimaryButton from "../../reusable-ui/PrimaryButton"
const { colors, fonts, gridUnit, spacing, borderRadius } = theme

function ProductCard({ menu }) {
   const { imageSource, title, price } = menu
   return (
      <ProductCardStyled>
         <img src={imageSource} alt={title} />
         <div className="product-infos">
            <div className="product-title">
               <h3>{title}</h3>
            </div>
            <div className="cta">
               <p>{roundedPrice(price) + " €"}</p>
               <PrimaryButton label={"Ajouter"} className="card-button" />
            </div>
         </div>
      </ProductCardStyled>
   )
}

const ProductCardStyled = styled.div`
   height: 350px;
   width: 240px;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   border-radius: ${borderRadius.extraRound};
   margin: auto;
   padding: 0 ${spacing.md} ${spacing.sm};
   box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
   img {
      width: 100%;
      height: 50%;
      object-fit: contain;
   }

   .product-infos {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 40%;
      justify-content: flex-end;
      .product-title {
         h3 {
            align-self: flex-start;
            font-family: "Amatic SC", cursive;
            font-size: ${fonts.size.P4};
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
         }
      }
      .cta {
         width: 100%;
         height: 50%;
         display: flex;
         align-items: center;
         justify-content: space-between;
         font-family: "Open Sans", sans-serif;
         p {
            color: ${colors.primary};
            font-size: ${fonts.size.P0};
         }
         .card-button {
            width: 50%;
            height: ${5 * gridUnit}px;
            font-size: ${fonts.size.P0};
            &:hover {
               transition: all 500ms;
               color: ${colors.primary};
               border: 1px solid ${colors.primary};
               background-color: ${colors.white};
               &:active {
                  color: ${colors.white};
                  background-color: ${colors.primary};
               }
            }
         }
      }
   }
`

export default ProductCard
