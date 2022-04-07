import styled from "styled-components";
import { customMedia } from "../../themes/theme";

export const Filter = styled.section`
  margin: 85px 0px 30px 134px;

  ${customMedia.lessThan('tablet')`
    margin: 85px 0px 30px 80px;
  `}
`;

export const Mentors = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 15px;
  

  ${customMedia.lessThan('laptop')`
    margin: 0px 0px 0px 110px;
  `}
`