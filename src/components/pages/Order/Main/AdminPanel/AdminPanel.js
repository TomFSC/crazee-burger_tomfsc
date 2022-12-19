import React, { useContext, useState } from "react"
import styled from "styled-components"
import AdminContext from "../../../../../context/AdminContext"
import PanelTabButton from "./PanelTabButton"
import { FaPen, FaPlus, FaChevronDown, FaChevronUp } from "react-icons/fa"
import { theme } from "../../../../../theme"
import PanelOption from "./Panel"

const { colors, fonts, spacing } = theme

function AdminPanel() {
   const { isActiveTab, setIsActiveTab, isPanelVisible, setIsPanelVisible } =
      useContext(AdminContext)
   const [panelOption, setPanelOption] = useState("Ajouter un produit")

   function displayPanel() {
      setIsPanelVisible(!isPanelVisible)
   }

   function displayTab() {
      setIsPanelVisible(true)
      setIsActiveTab(!isActiveTab)
      setPanelOption(
         !isActiveTab ? "Ajouter un produit" : "Modifier un produit"
      )
   }

   return (
      <AdminPanelStyled>
         <div className="admin-panel-options">
            <PanelTabButton
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
            <PanelTabButton
               className={isActiveTab && " isActive optionTab"}
               onClick={!isActiveTab ? displayTab : null}
               icon={<FaPlus />}
               label="Ajouter un produit"
            />
            <PanelTabButton
               className={!isActiveTab && "isActive optionTab"}
               onClick={isActiveTab ? displayTab : null}
               icon={<FaPen />}
               label="Modifier un produit"
            />
         </div>
         {isPanelVisible && <PanelOption panelOption={panelOption} />}
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
      .optionTab {
         &:active {
            background-color: ${colors.white};
            color: ${colors.greySemiDark};
         }
      }
   }
`

export default AdminPanel
