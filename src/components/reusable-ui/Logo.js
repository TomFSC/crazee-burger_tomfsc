import styled from "styled-components"
import { theme } from "../../theme"

function Logo({ type }) {
   return (
      <LogoStyled type={type}>
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
   margin-bottom: ${({ type }) => (type === "XS" ? 0 : spacing.lg)};
   margin-left: ${({ type }) => (type === "XS" ? spacing.sm : 0)};
   scale: ${({ type }) => (type === "XS" ? 1 : 2.5)};
   font-size: ${fonts.P4};
   font-family: "Amatic SC", cursive;
   color: ${colors.primary};
   font-weight: ${weights.bold};

   img {
      height: 50px;
   }
`

export default Logo