import styled from "styled-components"
import { theme } from "../../theme"
const { colors, borderRadius, spacing, fonts } = theme

function TextInput({ Icon, value, onChange, ...extraProps }) {
   return (
      <InputStyled>
         {Icon && Icon}
         <input value={value} onChange={onChange} {...extraProps} />
      </InputStyled>
   )
}

//Style

const InputStyled = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   column-gap: ${spacing.sm};
   width: 100%;
   height: 60px;
   background-color: ${colors.white};
   border-radius: ${borderRadius.round};
   .icon {
      scale: 1.7;
      color: ${colors.greyMedium};
   }
   input {
      width: 80%;
      height: 50%;
      border-style: none;
      padding: ${spacing.xs};
      font-size: ${fonts.size.P1};
      ::placeholder {
         color: ${colors.greyMedium};
      }
   }
`
export default TextInput
