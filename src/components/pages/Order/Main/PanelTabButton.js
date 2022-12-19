import React from "react"
import styled from "styled-components"
import { theme } from "../../../../theme"

const { colors, fonts, spacing, borderRadius } = theme

function PanelTabButton({ className, onClick, label, icon }) {
   return (
      <PanelTabButtonStyled className={className} onClick={onClick}>
         {icon}
         {label}
      </PanelTabButtonStyled>
   )
}

const PanelTabButtonStyled = styled.button`
   width: fit-content;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   column-gap: ${spacing.sm};
   padding: ${spacing.md};
   font-family: "Open Sans", sans-serif;
   font-size: ${fonts.size.P0};
   color: ${colors.greySemiDark};
   background-color: ${colors.white};
   border: 1px solid ${colors.greyLight};
   border-radius: ${borderRadius.round} ${borderRadius.round} 0 0;

   &:hover {
      cursor: pointer;
      border-bottom: 1px solid ${colors.white};
      text-decoration: underline;
      text-decoration-color: ${colors.greyMedium};
   }
`

export default PanelTabButton
