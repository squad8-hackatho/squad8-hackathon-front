import styled from 'styled-components';
import { theme, customMedia } from '../../themes/theme';

export const Section = styled.section`
  width: 45vw;

  ${customMedia.lessThan('mobile')`
    width: 100vw;
  `}
`;

export const Title = styled.h1`
  font-size: 40px;

  ${customMedia.lessThan('mobile')`
    margin-top: 50%;
  `}
`;

export const Article = styled.article`
  height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 100px 50px;

  ${customMedia.lessThan('mobile')`
    justify-content: center;
    align-items: center;
    padding: 50px 25px;
  `}
`;

export const SpanRef = styled.span`
  display: inline-block;
  font-size: 40px;
  padding: 5px;
  opacity: 0;
  filter: blur(4px);

  @keyframes fade-in {
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }

  ${customMedia.lessThan('mobile')`
    font-size: 30px;
  `}
`;

export const Span = styled(SpanRef)`
  &:nth-child(1) {
    animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  &:nth-child(2) {
    animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  &:nth-child(3) {
    animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
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

export const CardName = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 35vh;

  h2 {
    justify-content: center;
    align-items: center;
    margin-top: 45px;
    margin-bottom: 20px;
    margin-left: 100px;
  }

  ${customMedia.lessThan('mobile')`
    background-color: #ebebeb;
    h2 {
      justify-content: center;
      align-items: center;
      margin-top: 50px;
      margin-bottom: 20px;
      margin-left: 30px;
    }
  `}
`;

export const H2 = styled.h2`
  font-weight: normal;
`;

export const Input = styled.input`
  margin: 0px 100px 30px 100px;
  padding: 5px;
  background-color: transparent;

  border: 0;
  border-bottom: 1px solid black;

  &:focus {
    border: 0;
    outline: 0;
    border-bottom: 1px solid black;
  }

  ${customMedia.lessThan('mobile')`
      margin-left: 35px;
      width: 80%
  `}
`;

export const Button = styled.button`
  border-radius: 28px;
  border: 1px solid;
  padding: 16px 31px;
  width: 10vw;
  margin-left: 70%;

  text-decoration: none;
  font-weight: bold;

  :hover {
    background-color: #2d7ff9;
    color: ${theme.colors.primary};
  }

  ${customMedia.lessThan('mobile')`
      margin-left: 60%;
      width: 35vw;
  `}
`;
