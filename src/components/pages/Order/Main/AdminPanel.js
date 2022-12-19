import React, { useContext } from "react"
import styled from "styled-components"
import AdminContext from "../../../../context/AdminContext"
import PanelOptionsButton from "./PanelOptionsButton"
import { FaPen, FaPlus, FaChevronDown, FaChevronUp } from "react-icons/fa"
import { theme } from "../../../../theme"

const { colors, fonts, spacing } = theme

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
            <PanelOptionsButton
               className={!isPanelVisible && "isActive"}
               onClick={displayPanel}
               icon={
                  isPanelVisible ? (
                     <FaChevronDown className="icon" />
                  ) : (
                     <FaChevronUp className="icon" />
                  )
               }
            />
            <PanelOptionsButton
               className={isActiveOption && "isActive"}
               onClick={!isActiveOption && displayOptions}
               icon={<FaPlus />}
               label={"Ajouter un produit"}
            />
            <PanelOptionsButton
               className={!isActiveOption && "isActive"}
               onClick={isActiveOption && displayOptions}
               icon={<FaPen />}
               label=" Modifier un produit"
            />
         </div>
         {isPanelVisible && <div className="panel"></div>}
      </AdminPanelStyled>
   )
}

const AdminPanelStyled = styled.div`
   position: absolute;
   left: 0;
   bottom: 0;
   width: 100%;
   .admin-panel-options {
      display: flex;
      position: relative;
      top: -2px;
      height: 40px;
      margin-left: ${spacing.lg};

      .icon {
         font-size: ${fonts.size.P0};
      }

      .isActive {
         border-bottom: ${colors.white};
         background-color: ${colors.background_dark};
         color: ${colors.white};
         &:hover {
            text-decoration-color: ${colors.white};
         }
      }
   }

   .panel {
      width: 100%;
      height: 300px;
      background-color: ${colors.white};
      box-shadow: 3px -5px 5px ${colors.greyLight};
   }
`

export default AdminPanel
