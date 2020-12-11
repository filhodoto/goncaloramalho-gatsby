import React from 'react';
import Background from 'components/ui/Background';
import Main from 'components/Main';
import GlobalStyle from 'styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { themeController } from 'theme/theme';

export default function Home(): JSX.Element {
  return (
    <ThemeProvider theme={themeController['light']!}>
      <GlobalStyle />
      <Main />
      <Background />
    </ThemeProvider>
  );
}
