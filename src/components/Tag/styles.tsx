import styled from 'styled-components';
import { customMedia } from '../../themes/theme';

type TagProps = {
  bgColor: string;
  textColor: string;
  width: number;
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

  ${customMedia.between('laptopS', 'laptop')`
    width: 125px;
  `};

  ${customMedia.between('tablet', 'laptopS')`
    font-size: 20px;
    width: 200px;
    height: 55px;
  `};

  ${customMedia.lessThan('mobileL')`
    width: 155px;
    padding: 0px;
    margin: 0px;
    margin-bottom: 20px;
  `};
`;

export const TagAnimated = styled(TagStyle)`
  opacity: 0;
  filter: blur(4px);
  @keyframes fade-in {
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }
  &:nth-child(1) {
    animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  &:nth-child(2) {
    animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  &:nth-child(3) {
    animation: fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  &:nth-child(4) {
    animation: fade-in 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  &:nth-child(5) {
    animation: fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  &:nth-child(6) {
    animation: fade-in 0.8s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  &:nth-child(7) {
    animation: fade-in 0.8s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  &:nth-child(8) {
    animation: fade-in 0.8s 1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  &:nth-child(9) {
    animation: fade-in 0.8s 1.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  &:nth-child(10) {
    animation: fade-in 0.8s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
`;
