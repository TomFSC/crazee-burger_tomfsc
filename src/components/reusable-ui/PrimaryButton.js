import styled from "styled-components"
import { theme } from "../../theme"

function PrimaryButton({ label, Icon }) {
   return (
      <PrimaryButtonStyled>
         {label}
         {Icon && Icon}
      </PrimaryButtonStyled>
   )
}

const { colors, fonts, spacing, borderRadius } = theme

const PrimaryButtonStyled = styled.button`
   width: 100%;
   height: 60px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: ${spacing.sm};
   font-size: ${fonts.P1};
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
