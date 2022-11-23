import styled from "styled-components"
import { theme } from "../../theme"
const { colors, fonts, spacing, borderRadius } = theme

function PrimaryButton({ label, Icon }) {
   return (
      <PrimaryButtonStyled>
         {label}
         {Icon && Icon}
      </PrimaryButtonStyled>
   )
}

//Style

const PrimaryButtonStyled = styled.button`
   width: 100%;
   height: 60px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: ${spacing.sm};
   font-size: ${fonts.size.P1};
   color: ${colors.white};
   background: ${colors.primary};
   border: 1px solid ${colors.primary};
   border-radius: ${borderRadius.round};

   &:hover {
      background: ${colors.white};
      color: ${colors.primary};
   }
`
export default PrimaryButton
