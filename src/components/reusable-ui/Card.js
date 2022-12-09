import styled from "styled-components"
import { theme } from "../../theme"
import PrimaryButton from "./PrimaryButton"
const { colors, fonts, gridUnit, spacing, borderRadius } = theme

function Card({ title, image, data }) {
   return (
      <CardStyled>
         <img src={image} alt={title} />
         <div className="card-infos">
            <div className="card-title">
               <h3>{title}</h3>
            </div>
            <div className="cta">
               <p>{data}</p>
               <PrimaryButton label={"Ajouter"} className="card-button" />
            </div>
         </div>
      </CardStyled>
   )
}

const CardStyled = styled.div`
   height: 350px;
   width: 240px;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   border-radius: ${borderRadius.extraRound};
   margin: auto;
   padding: 0 ${spacing.md} ${spacing.sm};
   box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
   img {
      width: 100%;
      height: 50%;
      object-fit: contain;
   }

   .card-infos {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 40%;
      justify-content: flex-end;
      .card-title {
         h3 {
            align-self: flex-start;
            font-family: "Amatic SC", cursive;
            font-size: ${fonts.size.P4};
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
         }
      }
      .cta {
         width: 100%;
         height: 50%;
         display: flex;
         align-items: center;
         justify-content: space-between;
         font-family: "Open Sans", sans-serif;
         p {
            color: ${colors.primary};
            font-size: ${fonts.size.P0};
         }
         .card-button {
            width: 50%;
            height: ${5 * gridUnit}px;
            font-size: ${fonts.size.P0};
            &:hover {
               cursor: pointer;
               transition: all 500ms;
               color: ${colors.primary};
               border: 2px solid ${colors.primary};
               background-color: ${colors.white};
               &:active {
                  color: ${colors.white};
                  background-color: ${colors.primary};
               }
            }
         }
      }
   }
`

export default Card
