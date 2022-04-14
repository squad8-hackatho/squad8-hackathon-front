import styled from 'styled-components';
import { customMedia, theme } from '../../themes/theme';

export const Main = styled.main`
  width: 100vw;
  background-color: ${theme.colors.background};
`;

export const FilterWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Filter = styled.section`
  width: 1350px;

  ${customMedia.lessThan('laptopL')`
    width: 81%;
  `}
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

export const MentorsWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const Mentors = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  max-width: 1599px;

  ${customMedia.lessThan('laptopL')`
    width: 100%;

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

export const PaginationWrapper = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const Section = styled.section`
  width: 81%;
  display: flex;
  justify-content: space-between;
`;

export const NumberPage = styled(Pages)`
  justify-content: start;
  font-size: 16px;
`;

export const Select = styled.select`
  width: 40px;
  height: 40px;
  border: 2px solid ${theme.colors.mediumGray};
  font-size: 20px;
  text-align: center;
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid ${theme.colors.mediumGray};
  border-radius: 8px;
  margin-left: 5px;
  font-size: 16px;
  background-color: ${theme.colors.white};

  :hover {
    background-color: ${theme.colors.orange};
    color: ${theme.colors.white};
  }

  :active {
    position: relative;
    top: 0.5px;
  }
`;
