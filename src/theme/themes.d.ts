import { CSSObject, CSSProp } from 'styled-components';
import { baseTheme } from './theme';

// Fix for Typescript issue with css prop
declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}

type BaseTheme = typeof baseTheme;

// Add style declarations to 'styled-components' DefaultTheme
declare module 'styled-components' {
  export interface DefaultTheme extends BaseTheme {
    colors: {
      bgGradient: string;
      primary: string;
      text: string;
      link: string;
      action: string;
    };
  }
}
