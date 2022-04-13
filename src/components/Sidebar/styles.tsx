import styled from 'styled-components';
import { display, DisplayProps } from 'styled-system';

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

export const NavIcon = styled.div`
  margin: 0 0 0 15px;
`;

type DropdownContentProps = DisplayProps;

export const DropdownContent = styled.div<DropdownContentProps>`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  width: 300px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;

  ${display}
`;

export const DropdownItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;

  
`;

export const Text = styled.p`
  font-size: 20px;
  margin-left: 10px;
`;