import React, { useEffect, useState } from 'react';
import styled, { Keyframes } from 'styled-components/macro';
import { pxToRem, randomNumber } from 'helpers/generic';
import { animateUp, animateUpAndRotate } from 'helpers/animations';
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
  position: string;
  animationName: Keyframes;
  delay: string;
  duration: string;
}

const BgElement = styled(BgShape)<BgElementProps>`
  position: absolute;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  left: ${(props) => props.position};
  fill: ${(props) => props.theme.colors.secondary};
  bottom: ${pxToRem(-100)};
  animation: ${(props) => props.animationName} ${(props) => props.duration}
    ${(props) => props.delay} linear infinite;
`;

// Create object with css styles for each bg element created
const createBgEl = (index: number, numberOfElements: number) => {
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

  // If it's multiple of 4 it means it's an svg with a feature, those have different values
  // TODO:: Find a way of doing this only once to tell components if they are svg images or not
  const maxSize = index % 4 === 0 ? 40 : 100;
  const animation = index % 4 === 0 ? animateUp : animateUpAndRotate;

  return {
    size: pxToRem(randomNumber(maxSize, 20)),
    position: `${randomNumber(positionRange.max, positionRange.min)}%`,
    animationName: animation,
    delay: `${randomNumber(10)}s`,
    duration: `${randomNumber(30, 8)}s`,
  };
};

const Background = (): JSX.Element => {
  const numberOfElements = 18;
  const [elements, setElements] = useState<BgElementProps[]>([]);

  // Create bg Elements
  useEffect(() => {
    for (let index = 0; index < numberOfElements; index++) {
      setElements((elements) => [
        ...elements,
        createBgEl(index, numberOfElements),
      ]);
    }
  }, []);

  return (
    <StyledContainer>
      {elements.map((item, index) => {
        //TODO:: Find a way to tell bgElement if it should render an image or the default shapes
        return <BgElement key={index} {...item} />;
      })}
    </StyledContainer>
  );
};

export default Background;
