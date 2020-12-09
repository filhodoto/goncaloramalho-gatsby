import { keyframes } from 'styled-components';

export const animateUp = keyframes`
  0%{
      transform: translateY(0) rotate(0deg);
      opacity: 0.8;
      border-radius: 0;
  }

  100%{
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
  }`;
