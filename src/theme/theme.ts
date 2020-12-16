import { DefaultTheme } from 'styled-components/macro';
import { BaseTheme } from './themes';

// Define baseTheme for definitions that will be shared between themes
export const baseTheme: BaseTheme = {
  fonts: {
    body: 'Source Sans Pro',
    heading: 'Montserrat',
  },
};

export const lightTheme: DefaultTheme = {
  colors: {
    bgGradient: `linear-gradient(
      to right top,
      #051937,
      #004d7a,
      #008793,
      #00bf72,
      #a8eb12
    )`,
    primary: '#35a2ca',
    secondary: '#35a2ca',
    text: '#FEFCF8',
    link: '#FFEFCA',
    action: '#E9C46A',
  },
  fonts: { ...baseTheme.fonts },
};

export const darkTheme: DefaultTheme = {
  colors: {
    bgGradient: `linear-gradient(to bottom, #16425b, #133a50, #113245, #0e2a3a, #0c2330)`,
    primary: '#00435b',
    secondary: '#004d7a',
    text: '#FEFCF8',
    link: '#96C2C9',
    action: '#E9C46A',
  },
  fonts: { ...baseTheme.fonts },
};

// Use Record so we can use typed maps and prevent error:
// "An index signature parameter type cannot be a union type. Consider using a mapped object type instead.ts(1337)"
// http://www.rickcarlino.com/2017/02/27/real-world-use-case-for-typescript-record-types.html
export const themeController: Partial<Record<
  'light' | 'dark',
  DefaultTheme
>> = {
  light: lightTheme,
  dark: darkTheme,
};
