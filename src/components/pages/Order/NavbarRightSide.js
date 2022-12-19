import React, { useContext } from "react"
import "react-toastify/dist/ReactToastify.css"
import { toast } from "react-toastify"
import styled from "styled-components"
import ToggleButton from "../../reusable-ui/ToggleButton"
import Profile from "./Profile"
import ToastAdmin from "./ToastAdmin"
import AdminContext from "../../../context/AdminContext"

export default function NavbarRightSideIncomplet({ firstName }) {
   const {
      isAdminModeActive,
      setIsAdminModeActive,
      setIsActiveOption,
      setIsPanelVisible,
   } = useContext(AdminContext)

   const displayPopUp = () => {
      setIsAdminModeActive(!isAdminModeActive)
      if (!isAdminModeActive) {
         setIsPanelVisible(true)
         setIsActiveOption(true)
         toast.info("Mode admin activé", {
            // icon: <FaUserSecret size={30} />,
            theme: "dark",
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
         })
      }
   }

   return (
      <NavbarRightSideStyled>
         <ToggleButton
            onToggle={displayPopUp}
            labelIfChecked={"Désactiver le mode admin"}
            labelIfUnchecked={"Activer le mode admin"}
         />
         <Profile firstName={firstName} />
         <ToastAdmin />
      </NavbarRightSideStyled>
   )
}

const NavbarRightSideStyled = styled.div`
   display: flex;
   margin-right: 20px;
`
