import React, { FC } from 'react';
import { randomNumber } from 'helpers/generic';
import { AnimateOnChange } from 'react-animation';
import { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { State } from 'state/reducer';
import Beer from 'images/svg/beer.svg';
import Plane from 'images/svg/plane.svg';
import Web from 'images/svg/web.svg';
import Cheese from 'images/svg/cheese.svg';
import Comic from 'images/svg/comic.svg';

const svgStyles = css`
  height: 100%;
  width: 100%;
`;

// Blob shape path we can randomly choose for our bg shapes
const shapes: string[] = [
  'M43.4,-64.2C53.8,-52.3,58,-36.2,60.4,-21.4C62.7,-6.6,63.2,7.1,60.6,21C57.9,35,52.1,49.3,41.4,60.9C30.8,72.6,15.4,81.5,0,81.5C-15.4,81.4,-30.7,72.4,-45.5,62.2C-60.3,51.9,-74.5,40.4,-82.4,24.7C-90.3,9.1,-91.8,-10.6,-82.3,-22.7C-72.8,-34.8,-52.3,-39.2,-36.7,-49.5C-21.1,-59.7,-10.6,-75.9,3,-80C16.5,-84.1,33.1,-76.2,43.4,-64.2Z',
  'M40.8,-57.4C49.6,-49.8,51.1,-33.5,55.5,-18.4C60,-3.3,67.4,10.5,64.3,21.2C61.3,31.9,47.7,39.5,35.3,50C22.8,60.6,11.4,74.1,-0.3,74.6C-12,75,-24.1,62.4,-34.9,51.3C-45.8,40.2,-55.4,30.7,-63.1,17.9C-70.9,5.2,-76.7,-10.8,-71,-21.5C-65.4,-32.2,-48.3,-37.6,-34.6,-43.5C-20.8,-49.5,-10.4,-55.9,2.8,-59.8C16,-63.6,32.1,-64.9,40.8,-57.4Z',
  'M59,-36.1C67,-20.1,57.7,3.9,44.9,23.5C32.2,43.1,16.1,58.3,-5.7,61.6C-27.5,64.9,-55.1,56.3,-67.3,37C-79.5,17.7,-76.5,-12.4,-62.7,-31.6C-49,-50.9,-24.5,-59.4,0.5,-59.7C25.4,-60,50.9,-52,59,-36.1Z',
  'M48.9,-70.2C62.7,-67.2,72.9,-52.6,79,-36.8C85.1,-21,87.2,-4.1,82,9.7C76.7,23.5,64.2,34.1,53.2,45.1C42.2,56,32.6,67.2,20,73.2C7.5,79.1,-8.1,79.8,-18.6,72.5C-29.1,65.2,-34.6,49.9,-46.7,38.8C-58.9,27.8,-77.7,20.8,-82.4,9.9C-87.1,-1.1,-77.6,-16.1,-66.4,-26.1C-55.2,-36,-42.4,-41,-31,-45.2C-19.7,-49.4,-9.8,-52.8,3.8,-58.8C17.5,-64.8,35.1,-73.3,48.9,-70.2Z',
];

// Create a blob shape based
const BlobShape: FC = (): JSX.Element => {
  // Define shape by randomly getting a path from shapes array
  const shape = randomNumber(3);

  return (
    <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
      <path d={shapes[shape]} transform='translate(100 100)' />
    </svg>
  );
};

// Using React.memo to prevent it from re-render and change shape when we change theme
const MemoizedBlobShape = React.memo(BlobShape);

// Component rendefing Feature Shapes
const FeatureShape: FC = (): JSX.Element => {
  const currentFeature = useSelector<State, State['currentFeature']>(
    (state) => state.currentFeature
  );

  return typeof window !== 'undefined' && AnimateOnChange ? (
    <AnimateOnChange
      animationIn='bounceIn'
      animationOut='bounceOut'
      durationOut={500}
    >
      {(() => {
        switch (currentFeature['icon']) {
          case 'dish':
            return <Cheese css={svgStyles} />;
          case 'plane':
            return <Plane css={svgStyles} />;
          case 'comic':
            return <Comic css={svgStyles} />;
          case 'web':
            return <Web css={svgStyles} />;
          default:
            return <Beer css={svgStyles} />;
        }
      })()}
    </AnimateOnChange>
  ) : (
    <></>
  );
};

const BgShape: FC<{
  className?: string;
  isFeatureEl?: boolean;
}> = (props): JSX.Element => {
  return (
    <div className={props.className}>
      {!props.isFeatureEl ? <MemoizedBlobShape /> : <FeatureShape />}
    </div>
  );
};

export default BgShape;
