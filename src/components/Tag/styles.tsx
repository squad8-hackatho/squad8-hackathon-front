import styled from 'styled-components';
import { layout, LayoutProps } from 'styled-system';

type TagProps = LayoutProps & {
    bgColor: string;
    textColor: string;
  };

export const TagStyle = styled.button<TagProps>`
  border-radius: 8px;
  border: 1px solid none;
  padding: 16px 31px;
  transition-duration: 0.1s;

  margin: 0px 10px 20px 10px;
  text-decoration: none;

  width: 165px;
  height: 45px;
  white-space: nowrap;

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
  }
  :active {
    position: relative;
    top: 1px;
    background-color: gray;
    color: black;
  }

  ${layout}
`;
