import { Link } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../../theme"
import { BsPersonCircle } from "react-icons/bs"

function Profile({ firstName }) {
   return (
      <ProfileStyled>
         <div className="profileInfos">
            <h3>
               Hey, <span>{firstName}</span>
            </h3>
            <Link to="/">Se déconnecter</Link>
         </div>
         <BsPersonCircle className="icon" />
      </ProfileStyled>
   )
}

const { colors, fonts, spacing } = theme

const ProfileStyled = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   column-gap: ${spacing.md};
   height: 100%;
   max-width: 50%;
   min-width: 200px;
   margin-right: ${spacing.lg};
   @media screen and (max-width: 580px) {
      margin-right: 0;
      justify-content: flex-start;
   }

   .profileInfos {
      display: flex;
      flex-direction: column;
      row-gap: 5px;
      align-items: flex-end;
      justify-content: center;
      font-family: "Open Sans", sans-serif;
   }
   h3 {
      color: ${colors.greyDark};
      font-size: ${fonts.P0};
      span {
         color: ${colors.primary};
      }
   }
   a {
      text-decoration: none;
      border-bottom: 2px solid transparent;
      color: ${colors.greyMedium};
      font-size: ${fonts.XS};
      &:hover {
         cursor: pointer;
         border-bottom: 2px solid ${colors.greyMedium};
      }
   }
   .icon {
      color: ${colors.greyDark};
      scale: 2.3;
   }
`

export default Profile
