import { CSSObject, CSSProp } from 'styled-components/macro';
import { baseTheme } from './theme';

// Fix for Typescript issue with css prop
declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}
type BaseTheme = typeof baseTheme;

// Add style declaratuib to 'styled-components/macro' DefaultTheme
declare module 'styled-components/macro' {
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
