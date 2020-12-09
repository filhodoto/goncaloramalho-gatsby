import { pxToRem } from 'helpers/generic';
import React from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

const MainContainer = styled.main`
  --padding: ${pxToRem(20)};
  display: grid;
  padding: var(--padding);
  min-height: calc(100vh - var(--padding) * 2);
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid white;

  ${up('md')} {
    max-width: ${pxToRem(800)};
    border: 1px solid red;
  }
`;

const Header = styled.h1`
  font-family: ${(props) => props.theme.fonts.headingFont};
  color: purple;
`;

const Main = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <Header>My name</Header>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, quam
          eos? Culpa, dolorum! Dolorem, commodi eveniet deserunt maxime nulla
          quidem doloremque, dignissimos officiis accusantium incidunt placeat
          iure temporibus? Doloribus, tenetur!
        </p>
        <ul>
          <li>github</li>
          <li>github</li>
          <li>github</li>
        </ul>
      </ContentContainer>
    </MainContainer>
  );
};

export default Main;
