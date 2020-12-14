import React from 'react';
import styled from 'styled-components';
import { pxToRem } from 'helpers/generic';

const HeaderStyled = styled.header`
  height: ${pxToRem(30)};
`;

const Header = (): JSX.Element => {
  return <HeaderStyled>Header</HeaderStyled>;
};

export default Header;
