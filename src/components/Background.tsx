import React, { FC, useEffect, useState } from 'react';
import styled, { Keyframes } from 'styled-components/macro';
import { pxToRem, randomNumber } from 'helpers/generic';
import { animateUp, animateUpAndRotate } from 'helpers/animations';
import BgShape from 'components/ui/BgShape';

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
  isFeatureEl: boolean;
}

const BgElement = styled(BgShape)<BgElementProps>`
  position: absolute;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  left: ${(props) => props.position};
  fill: ${(props) => props.theme.colors.primary};
  bottom: ${pxToRem(-100)};
  animation: ${(props) => props.animationName} ${(props) => props.duration}
    ${(props) => props.delay} linear infinite;
`;

// Divide elements along the screen according to index
const setPositionRange = (
  index: number,
  numberOfElements: number
): { min: number; max: number } => {
  return {
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
};

// Create object with css styles for each bg element created
const createBgEl = (index: number, numberOfElements: number) => {
  // If it's multiple of 3 it means it's an svg with a feature, those have different values
  // Add + 1 so we remove index 0 which will always return true
  const isFeatureEl = (index + 1) % 3 === 0;
  const positionRange = setPositionRange(index, numberOfElements);
  return {
    size: pxToRem(randomNumber(isFeatureEl ? 60 : 100, isFeatureEl ? 30 : 20)),
    position: `${randomNumber(positionRange.max, positionRange.min)}%`,
    animationName: isFeatureEl ? animateUp : animateUpAndRotate,
    delay: `${randomNumber(10)}s`,
    duration: `${randomNumber(30, 12)}s`,
    isFeatureEl: isFeatureEl,
  };
};

export interface BackgroundProps {
  numberOfElements: number;
}

const Background: FC<BackgroundProps> = ({ numberOfElements }): JSX.Element => {
  const [elements, setElements] = useState<BgElementProps[]>([]);

  // Create bg Elements
  useEffect(() => {
    for (let index = 0; index < numberOfElements; index++) {
      setElements((elements) => [
        ...elements,
        createBgEl(index, numberOfElements),
      ]);
    }
  }, [numberOfElements]);

  return (
    <StyledContainer>
      {elements.map((item, index) => {
        return <BgElement key={`${index}-${item.position}`} {...item} />;
      })}
    </StyledContainer>
  );
};

export default React.memo(Background);
