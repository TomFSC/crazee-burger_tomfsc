import styled from "styled-components"
import logo from "../../../images/logo-orange.png"
import { theme } from "../../../theme"

function MainTitle() {
   return (
      <TitleContainer>
         CRAZEE
         <img src={logo} alt="logo crazy burger" />
         BURGER
      </TitleContainer>
   )
}

//Style
const { colors, weights, spacing, fonts } = theme

const TitleContainer = styled.h1`
   display: flex;
   align-items: center;
   column-gap: ${spacing.xs};
   margin-bottom: 30px;
   scale: 2.5;
   font-size: ${fonts.P4};
   font-family: "Amatic SC", cursive;
   color: ${colors.primary};
   font-weight: ${weights.bold};

   img {
      height: 50px;
   }
`

export default MainTitle
