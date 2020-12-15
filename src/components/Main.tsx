import React, { useEffect, useState } from 'react';
import { pxToRem } from 'helpers/generic';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { AnimateOnChange } from 'react-animation';
import SocialLinks from 'components/ui/SocialLinks';
import { useSiteMetadata } from 'api/global';

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
  font-family: ${(props) => props.theme.fonts.headingFont};
  margin-bottom: ${pxToRem(20)};
  font-size: 3rem;
  color: ${(props) => props.theme.colors.primary};
`;

const Features = styled.span`
  font-family: ${(props) => props.theme.fonts.headingFont};
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
`;

const Social = styled.div`
  /* margin-top: ${pxToRem(20)}; */
  display: flex;
  /* flex-direction: column; */

  ${up('sm')} {
    flex-direction: row;
  }
`;

const Main = (): JSX.Element => {
  const features: { feature: string; icon: string }[] = [
    { feature: 'Web enthusiast', icon: '' },
    { feature: 'Backpacker', icon: '' },
    { feature: 'Beer drinker', icon: '' },
    { feature: 'Comics reader', icon: '' },
    { feature: 'Cheese addict', icon: '' },
  ];
  const [whatIam, setWhatIam] = useState(features[0]);
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
    setWhatIam(features[featuresCounter]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [featuresCounter]);

  return (
    <MainContainer>
      <ContentContainer>
        <p>Welcome to my humble abode</p>
        <Heading>My name is Gonçalo</Heading>
        <p>
          I’m a{' '}
          <AnimateOnChange
            animationIn='bounceIn'
            animationOut='bounceOut'
            durationOut={500}
          >
            <Features>{whatIam.feature}</Features>
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
