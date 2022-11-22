import styled from "styled-components"
import { theme } from "../../theme"

function Logo({ className }) {
   return (
      <LogoStyled className={className}>
         CRAZEE
         <img src={"images/logo-orange.png"} alt="logo-crazy-burger" />
         BURGER
      </LogoStyled>
   )
}

//Style
const { colors, weights, spacing, fonts } = theme

const LogoStyled = styled.h1`
   display: flex;
   align-items: center;
   column-gap: ${spacing.xs};
   font-size: ${fonts.P4};
   font-family: "Amatic SC", cursive;
   color: ${colors.primary};
   font-weight: ${weights.bold};

   img {
      height: 50px;
   }
`

export default Logo
