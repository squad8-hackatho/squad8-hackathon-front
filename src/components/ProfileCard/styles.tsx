import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  width: 30vw;
  height: 90vh;

  flex-direction: column;
  align-items: center;
  background-color: #ebebeb;

  button {
    margin-top: 50px;
  }
`;

export const ProfilePicture = styled.img`
  width: 180px;
  height: 180px;

  border-radius: 50%;
  margin: 70px 50px 20px 50px;
`;

export const P = styled.p`
  margin-top: 15px;
  font-size: 20px;
`;
