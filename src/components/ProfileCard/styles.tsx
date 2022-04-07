import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  width: 28vw;
  height: 89vh;

  flex-direction: column;
  align-items: center;
  background-color: #ebebeb;

  button {
    margin-top: 50px;
  }

  button {
    :hover {
      background-color: #eee;
      color: black;
      border: 1px solid #000;
    }
  }
`;

export const ProfilePicture = styled.img`
  width: 180px;
  height: 180px;

  border-radius: 50%;
  margin: 70px 50px 20px 50px;
`;

export const P = styled.p`
  margin-top: 10px;
  font-size: 20px;
`;
