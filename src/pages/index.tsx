import React from 'react';
import Background from 'components/ui/Background';
import Main from 'components/Main';
import GlobalStyle from 'styles/globalStyle';
import styled, { ThemeProvider } from 'styled-components';
import { themeController } from 'theme/theme';
import { pxToRem } from 'helpers/generic';
import Footer from 'components/Footer';
import Header from 'components/Header';

const MainContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: ${pxToRem(20)};
  min-height: 100vh;
`;

export default function Home(): JSX.Element {
  return (
    <ThemeProvider theme={themeController['dark']!}>
      <GlobalStyle />
      <MainContainer>
        <Header />
        <Main />
        <Footer />
      </MainContainer>
      <Background />
    </ThemeProvider>
  );
}