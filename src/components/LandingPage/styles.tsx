import styled from 'styled-components';
import { theme } from '../../themes/theme';

export const Main = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
`;

export const BackgroundWithImage = styled.div`
  width: 52%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${theme.colors.orange};
  border-top-right-radius: 214px;

  img {
    width: 40%;
  }
`;

export const Tutorial = styled.div`
  height: 100%;
  width: 48%;

  padding: 0 60px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 32px;

  color: ${theme.colors.grayLetter};
  margin-bottom: 37px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 30px;

  color: ${theme.colors.grayLetter};
  text-align: center;
  margin-bottom: 51px;
`;

export const Buttons = styled.div`
  margin-bottom: 150px;
`;

type ButtonProps = {
  selected: boolean;
};

export const Button = styled.button<ButtonProps>`
  width: 25px;
  height: 25px;

  border: 1px solid ${theme.colors.buttonLightGray};
  border-radius: 50%;
  margin: 0 18px;

  background-color: ${(props) => {
    return props.selected ? `${theme.colors.lightOrange}` : 'none';
  }};

  :hover {
    background-color: ${(props) => {
      return props.selected
        ? `${theme.colors.orange}`
        : `${theme.colors.mediumGray}`;
    }};
  }
`;

export const Skip = styled.p`
  font-size: 32px;
  font-weight: bold;

  .link {
    color: ${theme.colors.orange};
  }
  
`;