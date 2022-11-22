import styled from "styled-components"
import { theme } from "../../../theme"
import Logo from "../../reusable-ui/Logo"
import Profile from "./Profile"

function NavBar({ firstName }) {
   return (
      <NavBarStyled>
         <Logo type={"XS"} />
         <Profile firstName={firstName} />
      </NavBarStyled>
   )
}

const { colors } = theme

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
`

export default NavBar
