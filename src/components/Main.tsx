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
  font-size: ${pxToRem(18)};
  letter-spacing: 0.02rem;
  line-height: 140%;

  ${up('sm')} {
    font-size: ${pxToRem(24)};
    line-height: 125%;
  }
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
  font-size: 2.2em;
`;

const Features = styled.span`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 1.5em;
`;

const Social = styled.div`
  margin-top: ${pxToRem(50)};
  display: flex;
`;

const BoldText = styled.p`
  font-weight: 600;
`;

const Main = (): JSX.Element => {
  const dispatch = useDispatch();
  // Get features from store
  const features = useSelector<State, State['features']>(
    (state) => state.features
  );
  // Get currrent feature from store
  const currentFeature = useSelector<State, State['currentFeature']>(
    (state) => state.currentFeature
  );
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
        <Heading>Olá! I&apos;m Gonçalo</Heading>
        <p>
          I’m a{' '}
          {typeof window !== 'undefined' && AnimateOnChange && (
            <AnimateOnChange
              animationIn='bounceIn'
              animationOut='bounceOut'
              durationOut={1000}
            >
              <Features>{currentFeature.feature}</Features>
            </AnimateOnChange>
          )}{' '}
          who likes to craft interesting and beautiful projecs for the web. To
          know more about me{' '}
          {
            <BoldText as='a' href={`mailto: ${email}`} aria-label='send email'>
              drop me a mail
            </BoldText>
          }{' '}
          or take a look at the links below.
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
