import React from "react"
import "react-toastify/dist/ReactToastify.css"
import { theme } from "../../../theme"
import { toast, ToastContainer } from "react-toastify"
import styled from "styled-components"
import ToggleButton from "../../reusable-ui/ToggleButton"
import Profile from "./Profile"
import { useState } from "react"

export default function NavbarRightSideIncomplet({ firstName }) {
   const [isAdminModeActive, setIsAdminModeActive] = useState(true)
   const displayPopUp = () => {
      setIsAdminModeActive(!isAdminModeActive)
      if (isAdminModeActive) {
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

         <ToastContainer className="toaster" bodyClassName="body-toast" />
      </NavbarRightSideStyled>
   )
}

const NavbarRightSideStyled = styled.div`
   display: flex;
   margin-right: 20px;
   .toaster {
      max-width: 300px;
   }

   .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
      background: ${theme.colors.background_dark};
   }

   .body-toast {
      .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
         margin-right: 20px;
         margin-left: 5px;
      }
      div {
         line-height: 1.3em;
      }
   }
`
