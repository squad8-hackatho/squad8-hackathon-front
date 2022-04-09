import styled from 'styled-components';
import { theme, customMedia } from '../../themes/theme';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px 50px;
  width: 45vw;

  ${customMedia.lessThan('laptopS')`
    width: 100vw;
  `};

  ${customMedia.between('tablet', 'laptopS')`
    margin: 0px 50px;
  `};

  ${customMedia.lessThan('mobileL')`
    padding: 0px;
    padding-top: 80px;
  `};

  ${customMedia.lessThan('mobileS')`
    display: block;
`};
`;

export const H2 = styled.h2`
  font-weight: normal;
  ${customMedia.lessThan('mobileL')`
    font-size: 24px;
  `}
`;

export const Card = styled.article`
  background-color: ${theme.colors.white};
  box-shadow: 5px 5px 12px 3px #eee;
  display: flex;
  flex-direction: column;
  padding: 32px;
  align-items: center;

  h2 {
    margin-bottom: 50px;
  }

  a {
    text-decoration: none;
  }

  ${customMedia.lessThan('laptop')`
    flex-direction: column;
  `};

  ${customMedia.between('default', 'tablet')`
    margin-top: 55px;
  `};

  ${customMedia.lessThan('mobileL')`
    padding: 32px 20px;
  `};
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${customMedia.lessThan('mobileL')`
    justify-content: space-between;
  `};

  ${customMedia.lessThan('mobileS')`
    justify-content: center;
  `};
`;
