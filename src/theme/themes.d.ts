import { CSSObject, CSSProp } from 'styled-components/macro';

// Fix for Typescript issue with css prop
declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}
// Define BaseTheme interface, we define this in this file instead of adding it to 'styled-components' like DefaultTheme
export interface BaseTheme {
  fonts: {
    body: string;
    heading: string;
  };
}

// Add style declaratuib to 'styled-components/macro' DefaultTheme
declare module 'styled-components/macro' {
  export interface DefaultTheme {
    colors: {
      bgGradient: string;
      primary: string;
      secondary: string;
      text: string;
      link: string;
      action: string;
    };
    fonts: BaseTheme['fonts'];
  }
}
