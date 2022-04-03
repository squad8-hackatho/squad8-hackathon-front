import styled from "styled-components";
import { typography, TypographyProps } from "styled-system";

export const ProfileInfoStyle = styled.section`
  margin: 20px;
`

type ProfileNameProps = TypographyProps;

export const ProfileName = styled.h1<ProfileNameProps>`
  line-height: 55px;
  margin-bottom: 10px;

  ${typography}
`;

export const ProfileOccupation = styled.h4`
  font-weight: 500;
  ${typography}
`