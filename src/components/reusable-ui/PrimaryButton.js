import styled from "styled-components"
import { theme } from "../../theme"
const { colors, borderRadius } = theme

function PrimaryButton({ label, Icon, className }) {
   return (
      <PrimaryButtonStyled className={className}>
         {label}
         {Icon && Icon}
      </PrimaryButtonStyled>
   )
}

//Style

const PrimaryButtonStyled = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   color: ${colors.white};
   background: ${colors.primary};
   border: 2px solid ${colors.primary};
   border-radius: ${borderRadius.round};
`
export default PrimaryButton
