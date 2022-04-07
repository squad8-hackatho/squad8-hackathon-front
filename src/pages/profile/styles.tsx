import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
`;

export const Article = styled.article`
  width: 72vw;
`;

export const Nav = styled.nav`
  border-top: 2px solid #ebebeb;
  padding: 20px 25px 70px 50px;

  a {
    font-size: 14px;
    padding: 0px 5px;

    &:nth-child(3) {
      pointer-events: none;
      text-decoration: none;
      color: black;
    }
  }
`;

export const P = styled.p`
  margin: 30px 400px 0px 35px;
  font-size: 20px;
  line-height: 1.4;
`;

export const ButtonsBar = styled.article`
  display: flex;
  flex-direction: row;
  padding: 20px 25px;
  border-top: 2px solid #ebebeb;
  border-bottom: 2px solid #ebebeb;

  button {
    border-radius: 8px;
    margin: 0px 25px;
    height: 35px;
    width: 150px;
    padding-top: 8px;
    font-size: 16px;
    background-color: white;
  }
`;
