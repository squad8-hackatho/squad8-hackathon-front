import styled from 'styled-components';
import { theme } from '../../themes/theme';

export const Section = styled.section`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  max-width: 40ch;
  text-align: center;
  transform: scale(0.94);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
`;

export const P = styled.p``;

export const SpanRef = styled.span`
  display: inline-block;
  padding: 5px;
  opacity: 0;
  filter: blur(4px);

  @keyframes fade-in {
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }
`;

export const Span = styled(SpanRef)`
  &:nth-child(1) {
    animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  &:nth-child(2) {
    animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
`;

export const SpanP = styled(SpanRef)`
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
`;

export const NameCard = styled.article`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 40vh;
  background-color: #ebebeb;

  h2 {
    margin-top: 83px;
    margin-bottom: 40px;
    margin-left: 100px;
  }
`;

export const NameForm = styled.input`
  margin-left: 100px;
  margin-bottom: 50px;
  margin-right: 100px;
  padding: 20px;
  background-color: transparent;

  font-size: larger;

  border: 0;
  border-bottom: 1px solid black;

  :focus {
    border: 0;
    outline: 0;
    border-bottom: 1px solid black;
  }
`;

export const Button = styled.button`
  border-radius: 28px;
  border: 1px solid;
  padding: 16px 31px;
  display: block;
  width: 20vw;
  margin-left: 100px;

  text-decoration: none;
  font-weight: bold;

  :hover {
    background-color: #2d7ff9;
    color: ${theme.colors.primary};
  }
`;
