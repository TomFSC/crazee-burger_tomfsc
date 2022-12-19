import React, { useContext } from "react"
import styled from "styled-components"
import AdminContext from "../../../../context/AdminContext"
import PanelOptionsButton from "./PanelOptionsButton"

function AdminPanel() {
   const {
      isActiveOption,
      setIsActiveOption,
      isPanelVisible,
      setIsPanelVisible,
   } = useContext(AdminContext)

   function displayPanel() {
      setIsPanelVisible(!isPanelVisible)
   }

   function displayOptions() {
      setIsPanelVisible(true)
      setIsActiveOption(!isActiveOption)
   }

   return (
      <AdminPanelStyled>
         <div className="admin-panel-options">
            <PanelOptionsButton onClick={displayPanel} label="Open/Close" />
            <PanelOptionsButton
               label="Ajouter un produit"
               className={isActiveOption && "isActive"}
               onClick={!isActiveOption && displayOptions}
            />
            <PanelOptionsButton
               label=" Modifier un produit"
               className={!isActiveOption && "isActive"}
               onClick={isActiveOption && displayOptions}
            />
         </div>
         {isPanelVisible && <div id="panel"></div>}
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
