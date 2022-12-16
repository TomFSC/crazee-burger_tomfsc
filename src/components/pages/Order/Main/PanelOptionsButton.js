import React from "react"
import styled from "styled-components"

function PanelOptionsButton({ className, onClick, label }) {
   return (
      <PanelOptionsButtonStyled className={className} onClick={onClick}>
         {label}
      </PanelOptionsButtonStyled>
   )
}

const PanelOptionsButtonStyled = styled.button`
   width: 10%;
   height: 100%;
   //background-color: pink;
   border: 2px solid grey;
   &:hover {
      cursor: pointer;
   }
`

export default PanelOptionsButton
