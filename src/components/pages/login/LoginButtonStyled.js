import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import styled from "styled-components"
import { theme } from "../../../theme"

function LoginButtonStyled({ onClick, value, isActive }) {
   return (
      <ButtonStyled onClick={onClick} isActive={isActive}>
         {value}
         <MdOutlineKeyboardArrowRight />
      </ButtonStyled>
   )
}

//Style
const { colors, fonts, spacing, borderRadius } = theme

const ButtonStyled = styled.button`
   width: 100%;
   height: 60px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: ${spacing.sm};
   font-size: ${fonts.P1};
   color: ${colors.primary};
   border: 1px solid ${colors.primary};
   border-radius: ${borderRadius.round};
   background: ${(props) => (props.isActive ? colors.primary : colors.white)};
   color: ${(props) => (props.isActive ? colors.white : colors.primary)};
`
export default LoginButtonStyled
