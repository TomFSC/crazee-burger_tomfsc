import styled from "styled-components"
import Logo from "../../reusable-ui/Logo"
import { refreshPage } from "../../../utils/refreshPage"
import { theme } from "../../../theme"
import NavbarRightSide from "./NavbarRightSide"

const { colors, spacing } = theme

function Navbar({
   firstName,
   isAdminModeActive,
   setIsAdminModeActive,
   setIsActiveOption,
}) {
   return (
      <NavbarStyled>
         <Logo onClick={refreshPage} className="logo-order-page" />
         <NavbarRightSide
            firstName={firstName}
            isAdminModeActive={isAdminModeActive}
            setIsAdminModeActive={setIsAdminModeActive}
            setIsActiveOption={setIsActiveOption}
         />
      </NavbarStyled>
   )
}

//Style
const NavbarStyled = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   height: 80px;
   border-bottom: 1px solid ${colors.greyMedium};
   background-color: ${colors.white};
   box-shadow: 8px 8px 25px ${colors.greyMedium};
   @media screen and (max-width: 450px) {
      justify-content: center;
   }
   .navbarRightSide {
      display: flex;
   }
   .logo-order-page {
      scale: 1;
      margin-left: ${spacing.sm};
      &:hover {
         cursor: pointer;
      }
      @media screen and (max-width: 480px) {
         scale: 0.6;
      }
   }
`

export default Navbar
