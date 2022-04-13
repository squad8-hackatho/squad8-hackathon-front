import styled from "styled-components";
import { theme } from "../../themes/theme";

export const Container = styled.div`
  width: 310px;
  height: 100px;

  margin-bottom: 5px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  border: 1px solid ${theme.colors.gray01};
  border-radius: 8px;

  background-color: ${theme.colors.white};
`;

export const NameSubject = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

export const Subject = styled.p`
  font-size: 14px;
`;