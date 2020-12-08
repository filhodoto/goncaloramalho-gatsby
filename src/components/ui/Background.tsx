import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { pxToRem } from 'helpers/generic';

const animate = keyframes`
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

const StyledContainer = styled.div`
  position: absolute;
  overflow: hidden;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  background-image: linear-gradient(
    to right top,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
  );
`;
interface BgElementProps {
  size: string;
  color: string;
  position: string;
  delay: string;
  duration: string;
}

const BgElement = styled.div<BgElementProps>`
  position: absolute;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background: ${(props) => props.color};
  left: ${(props) => props.position};
  bottom: ${pxToRem(-100)};
  animation: ${animate} 25s linear infinite;
  animation-delay: ${(props) => props.delay};
  animation-duration: ${(props) => props.duration};
`;

const Background = () => {
  const bgElements: BgElementProps[] = [
    {
      size: pxToRem(20),
      color: '#004d7a',
      position: '80%',
      delay: '2s',
      duration: '15s',
    },
    {
      size: pxToRem(40),
      color: '#00bf72',
      position: '40%',
      delay: '4s',
      duration: '10s',
    },
    {
      size: pxToRem(80),
      color: '#31b37f',
      position: '12%',
      delay: '1s',
      duration: '20s',
    },
    {
      size: pxToRem(20),
      color: '#095785',
      position: '23%',
      delay: '3s',
      duration: '12s',
    },
  ];
  return (
    <StyledContainer>
      {bgElements.map((item, index) => {
        return <BgElement key={index} {...item} />;
      })}
    </StyledContainer>
  );
};

export default Background;
