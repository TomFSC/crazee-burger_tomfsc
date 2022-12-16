import React, { useContext } from "react"
import styled from "styled-components"
import AdminContext from "../../../../context/AdminContext"

function AdminPanel() {
   const {
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
      <AdminPanelStyled>
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
      </AdminPanelStyled>
   )
}

const AdminPanelStyled = styled.div`
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
`

export default AdminPanel
