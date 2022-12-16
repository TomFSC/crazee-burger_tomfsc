import React, { useContext } from "react"
import styled from "styled-components"
import AdminContext from "../../../../context/AdminContext"
import ProductsList from "./ProductsList"

function Main() {
   const {
      isAdminModeActive,
      isActiveOption,
      setIsActiveOption,
      togglePanelOptions,
      setTogglePanelOptions,
   } = useContext(AdminContext)

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
            {isAdminModeActive && (
               <div className="admin-panel">
                  <div className="admin-panel-options">
                     <button onClick={displayPanel}>Open/Close</button>
                     <button
                        className={isActiveOption && "isActive"}
                        onClick={!isActiveOption && displayOptions}
                     >
                        Ajouter un produit
                     </button>
                     <button
                        className={!isActiveOption && "isActive"}
                        onClick={isActiveOption && displayOptions}
                     >
                        Modifier un produit
                     </button>
                  </div>
                  {togglePanelOptions && <div id="panel"></div>}
               </div>
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
         .admin-panel-options {
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
            height: 300px;
         }
      }
   }
`

export default Main
