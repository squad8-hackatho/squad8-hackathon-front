import styled from 'styled-components';

type TagProps = {
  bgColor: string;
  textColor: string;
};

export const TagStyle = styled.button<TagProps>`
  border-radius: 8px;
  border: 1px solid none;
  padding: 16px 31px;
  display: block;
  transition-duration: 0.1s;

  margin-right: 20px;

  text-decoration: none;

  cursor: pointer;
  background-color: ${(props) => {
    return props.bgColor;
  }};
  color: ${(props) => {
    return props.textColor;
  }};

  :hover {
    background-color: ${(props) => {
      return props.bgColor === '#ED7117' ? '#ED820E' : '#222';
    }};
    color: white;
  }
  :active {
    position: relative;
    top: 1px;
    background-color: gray;
    color: black;
  }
`;