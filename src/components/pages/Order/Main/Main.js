import React from "react"
import { useState } from "react"
import styled, { keyframes } from "styled-components"
import ProductsList from "./ProductsList"

function Main() {
   const [togglePanelOptions, setTogglePanelOptions] = useState(false)

   function displayPanel() {
      setTogglePanelOptions(!togglePanelOptions)
   }
   return (
      <MainStyled>
         {/* <div className="basket">Basket</div> */}
         <div className="main-rightSide">
            <ProductsList />
            <div className="admin-panel">
               <div className="panel-admin-options">
                  <button onClick={displayPanel}>Open/Close</button>
                  <button className="isActive">Ajouter un produit</button>
                  <button>Modifier un produit</button>
               </div>
               <div
                  id="panel"
                  className={togglePanelOptions ? "isOpenning" : "close"}
               ></div>
            </div>
         </div>
      </MainStyled>
   )
}

const openPanel = keyframes`
    from {height: 0; opacity: 0}
    to {height: 300px; opacity: 1}
 `
const closePanel = keyframes`
    from {height: 300px; opacity: 1}
    to {height: 0; opacity: 0}
 `

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
      .admin-panel {
         position: absolute;
         left: 0;
         bottom: 0;
         min-height: fit-content;
         width: 100%;
         .panel-admin-options {
            display: flex;
            width: 100%;
            height: 40px;
            background-color: white;

            button {
               width: 10%;
               height: 100%;
               //background-color: pink;
               border: 2px solid grey;
               &:hover {
                  cursor: pointer;
               }
            }
            .isActive {
               border-bottom: white;
               background-color: white;
            }
         }
         #panel {
            background-color: white;
            //border: 2px solid blue;
            width: 100%;
         }
         .isOpenning {
            animation: 600ms ease-in 1 forwards ${openPanel};
         }
         .close {
            animation: 600ms ease-in 1 forwards ${closePanel};
         }
      }
   }
`

export default Main
