import styled from "styled-components"
import logo from "../../../images/logo-orange.png"
import { theme } from "../../../theme"

function MainTitle() {
   return (
      <MainTitleContainer>
         <p>CRAZEE</p>
         <img src={logo} alt="logo crazy burger" />
         <p>BURGER</p>
      </MainTitleContainer>
   )
}

//Style
const { colors, weights, spacing } = theme

const MainTitleContainer = styled.div`
   display: flex;
   align-items: center;
   column-gap: ${spacing.sm};
   p {
      font-family: "Amatic SC", cursive;
      font-size: 100px;
      color: ${colors.primary};
      font-weight: ${weights.bold};
   }

   img {
      height: 130px;
   }
`

export default MainTitle
