import styled from "styled-components"
import { theme } from "../../theme"
const { colors, spacing, fonts } = theme

function Logo({ className, onClick }) {
   return (
      <LogoStyled className={className} onClick={onClick}>
         CRAZEE
         <img src={"images/logo-orange.png"} alt="logo-crazy-burger" />
         BURGER
      </LogoStyled>
   )
}

//Style

const LogoStyled = styled.h1`
   display: flex;
   align-items: center;
   column-gap: ${spacing.xs};
   font-size: ${fonts.size.P4};
   font-family: "Amatic SC", cursive;
   color: ${colors.primary};
   font-weight: ${fonts.weights.bold};

   img {
      height: 50px;
   }
`

export default Logo
