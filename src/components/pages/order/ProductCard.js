import styled from "styled-components"
import { theme } from "../../../theme"
import { roundedPrice } from "../../../utils/calculation"
import PrimaryButton from "../../reusable-ui/PrimaryButton"

function ProductCard({ title, imageSource, price }) {
   return (
      <ProductCardStyled>
         <img src={imageSource} alt={title} />
         <div className="product-infos">
            <h3>{title}</h3>
            <div className="cta">
               <p>{roundedPrice(price) + " €"}</p>
               <PrimaryButton label={"Ajouter"} className="card-button" />
            </div>
         </div>
      </ProductCardStyled>
   )
}

const ProductCardStyled = styled.div`
   height: 330px;
   width: 240px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-end;
   border-radius: 15px;
   margin: auto;
   padding: 0 20px 20px;
   box-shadow: -5px 5px 10px lightgrey;

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
      h3 {
         align-self: flex-start;
         font-family: "Amatic SC", cursive;
         font-size: ${theme.fonts.size.P4};
      }
      .cta {
         width: 100%;
         height: 50%;
         display: flex;
         align-items: center;
         justify-content: space-between;
         font-family: "Open Sans", sans-serif;
         p {
            color: ${theme.colors.primary};
            font-size: ${theme.fonts.size.P0};
         }
         .card-button {
            width: 50%;
            height: 40px;
            margin: 0;
            font-size: ${theme.fonts.size.P0};
            &:active {
               color: ${theme.colors.primary};
               border: 2px solid ${theme.colors.primary};
               background-color: ${theme.colors.white};
            }
         }
      }
   }
`

export default ProductCard
