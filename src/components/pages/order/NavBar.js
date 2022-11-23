import styled from "styled-components"
import Logo from "../../reusable-ui/Logo"
import Profile from "./Profile"
import { refreshPage } from "../../../utils/refreshPage"
import { theme } from "../../../theme"
const { colors, spacing } = theme

function NavBar({ firstName }) {
   return (
      <NavBarStyled>
         <Logo onClick={refreshPage} className="logo-order-page" />
         <Profile firstName={firstName} />
      </NavBarStyled>
   )
}

//Style
const NavBarStyled = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   height: 80px;
   background-color: ${colors.white};
   box-shadow: 8px 8px 25px ${colors.greyMedium};
   @media screen and (max-width: 450px) {
      justify-content: center;
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

export default NavBar
