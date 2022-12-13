import React from "react"
import styled from "styled-components"
import ProductsList from "../ProductsList"

function Main() {
   return (
      <MainStyled>
         <div className="basket"></div>
         <div className="main-rightSide">
            <ProductsList />
            <div className="admin-panel">
               <div className="panel-admin-options"></div>
               <div className="panel"></div>
            </div>
         </div>
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
      position: relative;
      border: 2px solid green;
      .admin-panel {
         position: absolute;
         left: 0;
         bottom: 0;
         height: 50px;
         height: 400px;
         width: 75%;
         //border: 2px solid blue;
         //background-color: blue;
         .panel-admin-options {
            width: 100%;
            height: 10%;
            background-color: red;
         }
         .panel {
            background-color: blue;
            height: 90%;
         }
      }
   }
`

export default Main
