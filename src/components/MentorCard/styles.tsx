import styled from 'styled-components';
import { customMedia } from '../../themes/theme';

export const Card = styled.section`
  width: 369px;
  height: 469px;

  display: flex;
  flex-direction: column;

  margin: 0px 30px 30px 0px;

  background-color: #c3c3c3;
  box-shadow: 12px 5px 12px 3px #ededed;

  img {
    width: 68px;
    height: 68px;

    border-radius: 50%;

    margin: 21px 13px 0px 26px;
  }

  h1 {
  }

  ${customMedia.lessThan('laptop')`
    margin: 0px 50px 50px 0px;
  `}

  ${customMedia.lessThan('tablet')`
    width: 90%;
    margin: 0px 100px 50px 0px;
    align-items: center;
  `}
`;

export const Header = styled.div`
  width: 369px;
  height: 100px;

  display: flex;
  flex-direction: row;

  ${customMedia.lessThan('tablet')`
    width: 100%;
    align-items: center;
  `}
`;

export const ProfilePicture = styled.img`
  width: 68px;
  height: 68px;

  border-radius: 50%;

  margin: 21px 13px 0px 26px;
`;

export const Description = styled.p`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.p`
  margin: 29px 0px 15px 0px;

  font-size: 16px;
  font-weight: bold;

  ${customMedia.lessThan('tablet')`
    font-size: 22px;
    margin: 20px 0px 12px 0px;
  `}
`;

export const Occupation = styled.p`
  display: flex;
  flex-direction: row;
`;

export const OccupationItem = styled.p`
  margin: 0px 20px 0px 0px;

  font-size: 12px;
  font-weight: medium;

  ${customMedia.lessThan('tablet')`
    font-size: 16px;
  `}
`;

export const Bio = styled.div`
  width: 369px;

  margin: 29px 0px 0px 0px;

  display: flex;
  flex-direction: column;

  ${customMedia.lessThan('tablet')`
    width: 100%;
  `}
`;

export const BioDescr = styled.p`
  height: 100px;

  font-size: 14px;
  font-weight: 400;
  text-align: justify;

  margin: 0px 62px 0px 26px;

  ${customMedia.lessThan('tablet')`
    font-size: 19px;
    margin: 0px 30px;
  `}
`;

export const Expertises = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  margin: 30px 0px 0px 26px;

  ${customMedia.lessThan('tablet')`
    justify-content: center;
    margin: 15px 100px 0px 100px;
  `}
`;

export const Tag = styled.button`
  width: 98px;
  height: 40px;

  background-color: orange;
  border-radius: 3px;
  margin: 0px 9px 9px 0px;

  display: inline-block;
  color: #ffffff;
  font-family: Arial;
  font-size: 14px;
`;

export const Buttons = styled.div`
  width: 369px;
  height: 143px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Button = styled.button`
  display: inline-block;
  width: 313px;

  margin: 10px 0px 0px 26px;

  background-color: #000;
  color: #ffffff;
  border: 1px solid #000;

  border-radius: 8px;
  padding: 11px 80px;

  cursor: pointer;

  font-family: Arial;
  font-size: 17px;
  text-decoration: none;

  :hover {
    background-color: #eee;
    color: black;
    border: 1px solid #000;
  }
  :active {
    position: relative;
    top: 1px;
  }
`;
