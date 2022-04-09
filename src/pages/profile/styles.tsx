import styled from 'styled-components';
import { theme } from '../../themes/theme';

export const Section = styled.section`
  display: flex;
`;

export const Article = styled.article`
  width: 72vw;
`;

export const Nav = styled.nav`
  border-top: 2px solid ${theme.colors.lightGray};
  padding: 20px 25px 70px 50px;
  display: flex;

  p {
    margin: -2px 5px 0px 5px;
  }

  a {
    font-size: 14px;
    padding: 0px 5px;
    text-decoration: none;

    &:nth-child(3) {
      pointer-events: none;
      color: ${theme.colors.black};
    }
  }
`;

export const Li = styled.li`
  font-size: 20px;
  line-height: 1.4;
`;

export const Ul = styled.ul`
  margin: 35px 400px 0px 50px;
  list-style-type: none;
`;

export const ButtonsBar = styled.article`
  display: flex;
  flex-direction: row;
  padding: 15px 25px;
  border-top: 2px solid ${theme.colors.lightGray};
  border-bottom: 2px solid ${theme.colors.lightGray};
  }
`;
