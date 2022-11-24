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
   padding: ${theme.spacing.lg} ${theme.spacing.lg} ${15 * theme.gridUnit}px;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-auto-rows: 350px;
   grid-gap: ${theme.spacing.md};
   overflow: scroll;
`

export default OrderList
