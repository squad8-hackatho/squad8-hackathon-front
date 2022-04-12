import styled from 'styled-components';
import { customMedia, theme } from '../../themes/theme';

export const Main = styled.main`
  width: 100vw;
  background-color: ${theme.colors.gray03};
`;

export const FilterWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Filter = styled.section`
  width: 81%;
  margin: 20px 0 0 0;

  ${customMedia.lessThan('tablet')`
    width: 92%;
    margin: 0;
  `}
`;

export const ButtonFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;

  width: 99px;
  height: 44px;

  background-color: white;
  border: 1px solid #dee2e6;
  border-radius: 8px;

  cursor: pointer;

  button {
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
    background-color: white;

    cursor: pointer;
  }
`;

export const Mentors = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  ${customMedia.lessThan('laptopL')`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
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
