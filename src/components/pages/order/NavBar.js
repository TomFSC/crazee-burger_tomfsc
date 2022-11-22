import styled from "styled-components"
import { theme } from "../../../theme"
import Logo from "../../reusable-ui/Logo"
import { BsPersonCircle } from "react-icons/bs"
import { Link } from "react-router-dom"

function NavBar({ firstName }) {
   return (
      <NavBarStyled>
         <Logo type={"XS"} />
         <div className="navbar-right-container">
            <div className="infos-container">
               <h3>
                  Hey, <span>{firstName}</span>
               </h3>
               <Link to="/">Se déconnecter</Link>
            </div>
            <BsPersonCircle className="icon" />
         </div>
      </NavBarStyled>
   )
}

const { colors, fonts, spacing } = theme

const NavBarStyled = styled.div`
   //Rename to nav tag
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
   .navbar-right-container {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: ${spacing.md};
      height: 100%;
      max-width: 50%;
      min-width: 200px;
      margin-right: ${spacing.lg};
      @media screen and (max-width: 580px) {
         margin-right: 0;
         justify-content: flex-start;
      }
      .infos-container {
         display: flex;
         flex-direction: column;
         row-gap: 5px;
         align-items: flex-end;
         justify-content: center;
         font-family: "Open Sans", sans-serif;
         h3 {
            color: ${colors.greyDark};
            font-size: ${fonts.P0};
            span {
               color: ${colors.primary};
            }
         }
         a {
            text-decoration: none;
            border-bottom: 2px solid transparent;
            color: ${colors.greyMedium};
            font-size: ${fonts.XS};
            &:hover {
               cursor: pointer;
               border-bottom: 2px solid ${colors.greyMedium};
            }
         }
      }
      .icon {
         color: ${colors.greyDark};
         scale: 2.3;
      }
   }
`

export default NavBar
