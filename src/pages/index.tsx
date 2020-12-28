import React from 'react';
import { useSelector } from 'react-redux';
import { State } from 'state/reducer';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/globalStyle';
import { themeController } from 'theme/theme';
import { pxToRem } from 'helpers/generic';
import Main from 'components/Main';
import Background from 'components/Background';
import Footer from 'components/Footer';
import Header from 'components/Header';
import SEO from 'components/seo/SEO';

const MainContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: ${pxToRem(20)};
  min-height: 100vh;
`;

export default function Home(): JSX.Element {
  const isDarkMode = useSelector<State, State['darkmode']>(
    (state) => state.darkmode
  );
  return (
    <ThemeProvider theme={themeController[isDarkMode ? 'dark' : 'light']}>
      <SEO isDarkMode={isDarkMode} />
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
