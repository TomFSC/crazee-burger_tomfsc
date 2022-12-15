import React from "react"
import { useState } from "react"
import styled from "styled-components"
import ProductsList from "./ProductsList"

function Main({ isAdminModeActive, isActiveOption, setIsActiveOption }) {
   const [togglePanelOptions, setTogglePanelOptions] = useState(false)

   function displayPanel() {
      setTogglePanelOptions(!togglePanelOptions)
   }

   function displayOptions() {
      setTogglePanelOptions(true)
      setIsActiveOption(!isActiveOption)
   }

   return (
      <MainStyled>
         {/* <div className="basket">Basket</div> */}
         <div className="main-rightSide">
            <ProductsList />
            {isAdminModeActive ? (
               <div className="admin-panel">
                  <div className="panel-admin-options">
                     <button onClick={displayPanel}>Open/Close</button>
                     <button
                        className={!isActiveOption ? "isActive" : ""}
                        onClick={isActiveOption ? displayOptions : ""}
                     >
                        Ajouter un produit
                     </button>
                     <button
                        className={isActiveOption ? "isActive" : ""}
                        onClick={!isActiveOption ? displayOptions : ""}
                     >
                        Modifier un produit
                     </button>
                  </div>
                  <div
                     id="panel"
                     className={togglePanelOptions ? "isOpenning" : "close"}
                  ></div>
               </div>
            ) : (
               ""
            )}
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
            height: 300px;
         }
         .close {
            height: 0px;
         }
      }
   }
`

export default Main
