import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimateOnChange } from 'react-animation';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { pxToRem } from 'helpers/generic';
import SocialLinks from 'components/ui/SocialLinks';
import { useSiteMetadata } from 'api/global';
import { State } from 'state/reducer';
import { setFeature } from 'state/actions';

const MainContainer = styled.main`
  text-align: center;
  display: grid;
  place-items: center;
  font-size: ${pxToRem(24)};
  letter-spacing: 0.05rem;
  line-height: 1.8rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${up('md')} {
    max-width: ${pxToRem(800)};
  }
`;

const Heading = styled.h1`
  font-family: ${(props) => props.theme.fonts.heading};
  line-height: 120%;
  margin-bottom: ${pxToRem(20)};
  font-size: 3rem;
`;

const Features = styled.span`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 2rem;
`;

const Social = styled.div`
  margin-top: ${pxToRem(50)};
  display: flex;
`;

const Main = (): JSX.Element => {
  // Get features from store
  const features = useSelector<State, State['features']>(
    (state) => state.features
  );
  // Get currrent feature from store
  const currentFeature = useSelector<State, State['currentFeature']>(
    (state) => state.currentFeature
  );
  const dispatch = useDispatch();
  const [featuresCounter, setFeaturesCounter] = useState(0);

  //Note:: Using this as it's Gatsby standart but I'm not sure I like this approach for the future
  const { email, social } = useSiteMetadata();

  useEffect(() => {
    // Start features loop by incrementing featuresCounter
    const featuresLoopInterval = setInterval(() => {
      // Increment features counter so we can change the feature, if we reached the last one, start again on 0
      setFeaturesCounter((featuresCounter) =>
        featuresCounter < features.length - 1 ? featuresCounter + 1 : 0
      );
    }, 5000);
    return () => clearInterval(featuresLoopInterval);
  }, [features.length]);

  useEffect(() => {
    // Set new feature using featuresCounter as object index
    dispatch(setFeature(features[featuresCounter]));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [featuresCounter]);

  return (
    <MainContainer>
      <ContentContainer>
        <Heading>Olá! I'm Gonçalo</Heading>
        <p>
          I’m a{' '}
          <AnimateOnChange
            animationIn='bounceIn'
            animationOut='bounceOut'
            durationOut={500}
          >
            <Features>{currentFeature.feature}</Features>
          </AnimateOnChange>{' '}
          who likes to craft interesting and beautiful projecs for the web. To
          know more about me take a look at links below or we can have an{' '}
          {
            <a href={`mailto: ${email}`} aria-label='email link'>
              old fashion chat
            </a>
          }
          .
        </p>
        <Social>
          {Object.entries(social).map(([key, value]) => {
            return <SocialLinks key={key} link={value} platform={key} />;
          })}
        </Social>
      </ContentContainer>
    </MainContainer>
  );
};

export default Main;
