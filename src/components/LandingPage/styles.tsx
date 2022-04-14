import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { customMedia, theme } from '../../themes/theme';

export const Main = styled.main`
  max-width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;

  ${customMedia.lessThan('tablet')`
    flex-direction: column;
  `}
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

  ${customMedia.lessThan('tablet')`
    width: 100%;
    height: 45%;
    border-radius: 30%;
    border-top-right-radius: 0;
    border-top-left-radius: 0;

    img{
      height: 80%;
      margin-bottom: 0;
    }
  `}

  ${customMedia.lessThan('mobileL')`
    height: 40%;
  `}
`;

export const Tutorial = styled.div`
  height: 100%;
  width: 48%;

  padding: 0 60px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${customMedia.lessThan('tablet')`
    width: 100%;
    height: 60%;
    padding: 0 20px;
    margin-top: 20px;
  `}
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 32px;
  text-align: center;

  color: ${theme.colors.grayLetter};
  margin-bottom: 37px;

  ${customMedia.lessThan('mobileL')`
    font-size: 28px;
  `}
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 30px;

  color: ${theme.colors.grayLetter};
  text-align: center;
  margin-bottom: 51px;

  ${customMedia.lessThan('mobileL')`
    font-size: 25px;
  `}
`;

export const Buttons = styled.div`
  margin-bottom: 100px;

  ${customMedia.lessThan('tablet')`
    margin-bottom: 50px;
  `}
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
    return props.selected ? `${theme.colors.lightOrange}` : `#868E964D`;
  }};

  :hover {
    background-color: ${(props) => {
      return props.selected
        ? `${theme.colors.orange}`
        : `${theme.colors.darkGray}`;
    }};
  }
`;

export const Skip = styled.p`
  font-size: 32px;
  font-weight: bold;

  .link {
    color: ${theme.colors.orange};
  }

  ${customMedia.lessThan('tablet')`
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 18px;

    .link {
      color: ${theme.colors.white};
    }
  `}
`;

export const LinkStyled = styled(Link)`
  color: ${theme.colors.orange};
  
  ${customMedia.lessThan('tablet')`
    color: ${theme.colors.white};
  `}
`;
