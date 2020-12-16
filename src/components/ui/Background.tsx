import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { pxToRem, randomNumber } from 'helpers/generic';
import { animateUp } from 'helpers/animations';
import BgShape from './BgShape';

const StyledContainer = styled.div`
  position: fixed;
  overflow: hidden;
  z-index: -1;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  background-image: ${(props) => props.theme.colors.bgGradient};
`;
interface BgElementProps {
  size: string;
  color: string;
  position: string;
  delay: string;
  duration: string;
}

const BgElement = styled(BgShape)<BgElementProps>`
  position: absolute;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  /* background: ${(props) => props.color}; */
  left: ${(props) => props.position};
  bottom: ${pxToRem(-100)};
  animation: ${animateUp} 25s linear infinite;
  animation-delay: ${(props) => props.delay};
  animation-duration: ${(props) => props.duration};
`;

const Background = (): JSX.Element => {
  const numberOfElements = 12;
  const [bgElements, setBgElements] = useState<BgElementProps[]>([]);

  // Create object with css styles for each bg element created
  const createBgEl = (index: number) => {
    // Divide elements along the screen according to index
    const positionRange: { min: number; max: number } = {
      min:
        index < numberOfElements / 3
          ? 0
          : index <= numberOfElements / 2
          ? 33
          : 66,
      max:
        index < numberOfElements / 3
          ? 33
          : index <= numberOfElements / 2
          ? 66
          : 100,
    };

    return {
      size: pxToRem(randomNumber(100, 20)),
      color: '#004d7a',
      position: `${randomNumber(positionRange.max, positionRange.min)}%`,
      delay: `${randomNumber(10)}s`,
      duration: `${randomNumber(30, 8)}s`,
    };
  };

  // Create bg Elements
  useEffect(() => {
    for (let index = 0; index < numberOfElements; index++) {
      setBgElements((bgElements) => [...bgElements, createBgEl(index)]);
    }
  }, []);

  return (
    <StyledContainer>
      {bgElements.map((item, index) => {
        return <BgElement key={index} {...item} />;
      })}
    </StyledContainer>
  );
};

export default Background;
