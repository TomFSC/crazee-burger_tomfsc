import styled from "styled-components"
import { roundedPrice } from "../../../utils/calculation"

function ProductCard({ title, imageSource, price }) {
   return (
      <ProductCardStyled>
         <img src={imageSource} alt={title} />
         <div className="product-infos">
            <h3>{title}</h3>
            <div className="cta">
               <p>{roundedPrice(price) + " €"}</p>
               <button>Ajouter</button>
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
   justify-content: space-around;
   border: 2px solid red;
   border-radius: 15px;
   margin: auto;
   img {
      width: fit-content;
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
`

export default ProductCard
