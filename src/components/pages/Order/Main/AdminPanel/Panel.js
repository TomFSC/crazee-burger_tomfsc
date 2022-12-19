import React from "react"
import styled from "styled-components"
import { theme } from "../../../../../theme"

function Panel({ panelOption }) {
   return <PanelStyled>{panelOption}</PanelStyled>
}

const PanelStyled = styled.div`
   width: 100%;
   height: 300px;
   background-color: ${theme.colors.white};
   box-shadow: 3px -5px 5px ${theme.colors.greyLight};
`

export default Panel
