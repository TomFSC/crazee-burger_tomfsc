import React, { useContext } from "react"
import styled from "styled-components"
import AdminContext from "../../../../context/AdminContext"
import AdminPanel from "./AdminPanel/AdminPanel"
import Products from "./AdminPanel/Products"

function Main() {
   const { isAdminMode } = useContext(AdminContext)

   return (
      <MainStyled>
         {/* <div className="basket">Basket</div> */}
         {/* <div className="main-rightSide"> */}
         <Products />
         {isAdminMode && <AdminPanel />}
         {/* </div> */}
      </MainStyled>
   )
}

const MainStyled = styled.div`
   overflow-y: scroll;
   display: grid;
   grid-template-columns: 25% 1fr;
   .basket {
      left: 0;
      right: 75%;
      border: 2px solid red;
      height: calc(95vh - 80px);
   }
   .main-rightSide {
      //position: relative;
      //border: 2px solid green;
      overflow-y: scroll;
   }
`

export default Main
