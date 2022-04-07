import styled from 'styled-components';
import { layout, LayoutProps } from 'styled-system';

export const DropdownWrapper = styled.section`
  display: inline-flex;
  flex-direction: column;
  padding: 10px;
  background-color: #CECECE;
  margin: 0px 15px 0px 0px;

  border: 1px solid black;
  border-radius: 8px;
  margin-bottom: 10px;

  cursor: pointer;
`;

type DropdownContentProps = LayoutProps;

export const DropdownContent = styled.div<DropdownContentProps>`
  display: none;
  background-color: gray;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  margin-top: 10px;

  ${layout}
`;

type SelectedFiltersProps = LayoutProps;

export const SelectedFilters = styled.div<SelectedFiltersProps>`
  min-height: 50px;
  max-width: 70vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${layout}
`;

export const FilterTag = styled.button`
  padding: 10px;
  margin: 0px 10px 10px 0px;

  border: 1px solid black;
  border-radius: 8px;
`