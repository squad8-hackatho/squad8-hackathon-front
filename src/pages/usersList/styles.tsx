import styled from 'styled-components';
import { customMedia, theme } from '../../themes/theme';

export const Filter = styled.section`
  width: 100%;
  margin: 85px 0px 30px 134px;

  ${customMedia.lessThan('tablet')`
    margin: 0;
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
`;

export const Pages = styled.article`
  display: flex;
  width: 90vw;
  margin: 50px 0px;
  justify-content: end;
`;

export const Section = styled.section`
  width: 90vw;
  display: flex;
  justify-content: space-between;
`;

export const NumberPage = styled(Pages)`
  justify-content: start;
`;

export const Select = styled.select`
  width: 40px;
  height: 40px;
  border: 1px solid ${theme.colors.darkGray};
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid ${theme.colors.darkGray};

  :active {
    position: relative;
    top: 0.5px;
  }
`;
