import styled from "styled-components"
import { theme } from "../../../theme"
import Logo from "../../reusable-ui/Logo"
import { BsPersonCircle } from "react-icons/bs"

function NavBar({ onClick, state }) {
   return (
      <NavBarStyled>
         <Logo type={"XS"} />
         <div className="navbar-right-container">
            <div className="infos-container">
               <h3>
                  Hey, <span>{state}</span>
               </h3>
               <p onClick={onClick}>Se déconnecter</p>
            </div>
            <BsPersonCircle className="icon" />
         </div>
      </NavBarStyled>
   )
}

const { colors, fonts, spacing, borderRadius } = theme

const NavBarStyled = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   height: 80px;
   margin: 10px 20px 0;
   border: 1px solid black; //To delete
   border-top-left-radius: ${borderRadius.extraRound};
   border-top-right-radius: ${borderRadius.extraRound};
   .navbar-right-container {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: ${spacing.md};
      height: 100%;
      max-width: 50%;
      min-width: 200px;
      margin-right: ${spacing.lg};

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
         p {
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
