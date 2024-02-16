import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimateOnChange } from 'react-animation';
import styled from 'styled-components/macro';
import { pxToRem } from 'helpers/generic';
import SocialLinks from 'components/ui/SocialLinks';
import { useSiteMetadata } from 'api/global';
import { State } from 'state/reducer';
import { setFeature } from 'state/actions';

const MainContainer = styled.main`
  text-align: left;
  display: grid;
  place-items: center;
  font-size: ${pxToRem(18)};
  letter-spacing: 0.02rem;
  line-height: 140%;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    text-align: center;
    font-size: ${pxToRem(24)};
    line-height: 125%;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    align-items: center;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    max-width: ${pxToRem(800)};
  }
`;

const Heading = styled.h1`
  font-family: ${(props) => props.theme.fonts.heading};
  line-height: 110%;
  margin-bottom: ${pxToRem(25)};
  font-size: 2.8em;
  span {
    display: block;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-bottom: ${pxToRem(30)};

    span {
      display: inline;
    }
  }
`;

const Features = styled.span`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 1.5em;
`;

const Social = styled.div`
  margin-top: ${pxToRem(35)};
  display: flex;
  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-top: ${pxToRem(50)};
  }
`;

const BoldText = styled.p`
  font-weight: 600;
`;

const Main = (): JSX.Element => {
  const dispatch = useDispatch();
  const [startAnimation, setStartAnimation] = useState(false);
  const [featuresCounter, setFeaturesCounter] = useState(0);

  // Get features from store
  const features = useSelector<State, State['features']>(
    (state) => state.features
  );
  // Get currrent feature from store
  const currentFeature = useSelector<State, State['currentFeature']>(
    (state) => state.currentFeature
  );

  //Note:: Using this as it's Gatsby standart but I'm not sure I like this approach for the future
  const { email, social } = useSiteMetadata();

  useEffect(() => {
    // Start features loop by incrementing featuresCounter
    const featuresLoopInterval = setInterval(() => {
      // On the first time we are gonna change feature we set the animation to true
      // so we can render the text with animation
      if (!startAnimation) {
        setStartAnimation(true);
      }

      // Increment features counter so we can change the feature, if we reached the last one, start again on 0
      setFeaturesCounter((featuresCounter) =>
        featuresCounter < features.length - 1 ? featuresCounter + 1 : 0
      );
    }, 5000);
    return () => clearInterval(featuresLoopInterval);
  }, [features.length, startAnimation]);

  useEffect(() => {
    // Set new feature using featuresCounter as object index
    dispatch(setFeature(features[featuresCounter]));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [featuresCounter]);

  const featureText = useMemo(() => {
    // Check typeof window !== 'undefined' && AnimateOnChange to prevent gatsby build mistake
    // Check startAnimation yo prevent first load animation
    if (typeof window !== 'undefined' && AnimateOnChange && startAnimation) {
      return (
        <AnimateOnChange
          animationIn='bounceIn'
          animationOut='bounceOut'
          durationOut={1000}
        >
          <Features data-testid='feature-text-animate'>
            {currentFeature.feature}
          </Features>
        </AnimateOnChange>
      );
    } else {
      // On first load we render text without animation
      return (
        <Features data-testid='feature-text'>{currentFeature.feature}</Features>
      );
    }
  }, [currentFeature, startAnimation]);

  return (
    <MainContainer>
      <ContentContainer>
        <Heading>
          <span>Olá!</span> I&apos;m Gonçalo
        </Heading>
        <p>
          I’m a {featureText} who likes to craft interesting and beautiful
          projects for the web. Want to know more? Feel free to drop me{' '}
          {
            <BoldText as='a' href={`mailto: ${email}`} aria-label='send email'>
              an email
            </BoldText>
          }{' '}
          . Not feeling chatty? Then take a look at the links below.
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
