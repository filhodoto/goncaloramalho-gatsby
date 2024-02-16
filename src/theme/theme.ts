import { DefaultTheme } from 'styled-components/macro';
import { createStyledBreakpointsTheme } from 'styled-breakpoints';

export const breakpointsTheme = createStyledBreakpointsTheme();

// Define baseTheme for definitions that will be shared between themes
export const baseTheme = {
  ...breakpointsTheme,
  fonts: {
    body: 'Source Sans Pro',
    heading: 'Montserrat',
  },
};

export const lightTheme: DefaultTheme = {
  colors: {
    bgGradient: `linear-gradient(to bottom, #f9fbff, #f0f4fd, #e6edfa, #dde6f8, #d3dff5);`,
    primary: '#cbd4f1',
    text: '#505970',
    link: '#3A445D',
    action: '#DA4167',
  },
  ...baseTheme,
};

export const darkTheme: DefaultTheme = {
  colors: {
    bgGradient: `linear-gradient(to bottom, #0a273d, #072338, #042034, #021c2f, #00192b);`,
    primary: '#004d7a',
    text: '#E5E7E6',
    link: '#8eadb9  ',
    action: '#3C546D',
  },
  ...baseTheme,
};

// Use Record so we can use typed maps and prevent error:
// "An index signature parameter type cannot be a union type. Consider using a mapped object type instead.ts(1337)"
// http://www.rickcarlino.com/2017/02/27/real-world-use-case-for-typescript-record-types.html
export const themeController: Record<'light' | 'dark', DefaultTheme> = {
  light: lightTheme,
  dark: darkTheme,
};
