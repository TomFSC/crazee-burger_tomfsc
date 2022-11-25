import styled from "styled-components"
import { fakeMenu2 } from "../../../fakeData/fakeMenu"
import { theme } from "../../../theme"
import ProductCard from "./ProductCard"

function OrderList() {
   return (
      <OrderListStyled>
         {fakeMenu2.map((menu) => {
            return <ProductCard menu={menu} key={menu.id} />
         })}
      </OrderListStyled>
   )
}

const OrderListStyled = styled.div`
   width: 100%;
   height: 100%;
   padding: ${theme.spacing.lg} ${theme.spacing.md} ${15 * theme.gridUnit}px;
   display: grid;
   grid-template-columns: repeat(4, 250px);
   grid-auto-rows: 370px;
   grid-row-gap: ${theme.spacing.lg};
   justify-content: space-evenly;
   overflow: scroll;
   @media (max-width: 1400px) {
      grid-template-columns: repeat(3, 1fr);
   }
   @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
   }
   @media (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
   }
`

export default OrderList
