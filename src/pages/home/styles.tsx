import styled from 'styled-components';
import { customMedia } from '../../themes/theme';

export const Section = styled.section`
  width: 45vw;

  ${customMedia.lessThan('laptopS')`
    width: 100vw;
  `}
`;

export const Title = styled.h1`
  font-size: 40px;

  ${customMedia.lessThan('laptopS')`
    margin-top: 50%;
  `}
  ${customMedia.lessThan('default')`
    margin-top: 65%;
  `}
`;

export const Article = styled.article`
  height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 100px 50px;

  ${customMedia.lessThan('laptopS')`
    justify-content: center;
    align-items: center;
    padding: 50px 25px;
  `}
  ${customMedia.lessThan('default')`
    padding: 40px 20px;
    height: 75vh;
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

  ${customMedia.lessThan('laptopS')`
    font-size: 30px;
  `}

  ${customMedia.lessThan('default')`
    font-size: 22px;
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
  height: 25vh;
  align-items: center;

  button {
    margin-top: -1%;
  }

  h2 {
    justify-content: center;
    align-items: center;
    margin-top: 45px;
    margin-bottom: 20px;
  }

  ${customMedia.lessThan('laptopS')`
    background-color: #ebebeb;
    h2 {
      margin-top: 50px;
      margin-bottom: 20px;
      margin-left: 30px;
    }
  `}

  ${customMedia.lessThan('default')`
    h2 {
      margin-left: 0px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  `}
`;

export const H2 = styled.h2`
  font-weight: normal;
  ${customMedia.lessThan('default')`
    font-size: 22px;
  `}
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

  ${customMedia.lessThan('laptopS')`
      margin-left: 35px;
      width: 80%
  `}

  ${customMedia.lessThan('default')`
    margin: 0px;
    margin-bottom: 20px;
  `}
`;
