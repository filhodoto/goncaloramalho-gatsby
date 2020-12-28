import { keyframes } from 'styled-components';

export const animateUpAndRotate = keyframes`
  0%{
      transform: translateY(0) rotate(0deg);
      opacity: 0.8;
  }

  100%{
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
  }`;

export const animateUp = keyframes`
  0%{
      transform: translateY(0);
      opacity: 0.8;
  }

  25% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.8
  }

  100%{
      transform: translateY(-1000px);
      opacity: 0;
  }`;
