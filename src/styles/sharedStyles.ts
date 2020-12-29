import { css } from 'styled-components';

// Our App uses grid to get a full height design (alternative to 100vh) but for this
// to work in mobile we need these elements to have height: 100%
export const FixForFullHeight = css`
  html,
  body,
  body > div,
  body > div > div {
    height: 100%;
  }
`;
