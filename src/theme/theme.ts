import { DefaultTheme } from 'styled-components/macro';
import { BaseTheme } from './themes';

// Define baseTheme for definitions that will be shared between themes
export const baseTheme: BaseTheme = {
  fonts: {
    bodyFont: 'Abel',
    headingFont: 'Nunito',
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
    primary: '#f5f7fa',
    secondary: '#35a2ca',
  },
  fonts: { ...baseTheme.fonts },
};

export const darkTheme: DefaultTheme = {
  colors: {
    bgGradient: `linear-gradient(to bottom, #1f3a4f, #1d3c53, #1b3e57, #193f5c, #174160, #124260, #0c4260, #044360, #00435b, #004256, #054250, #0c414b)`,
    primary: '#fff',
    secondary: '#00435b',
  },
  fonts: { ...lightTheme.fonts },
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
