import React from 'react';
import styled from 'styled-components/macro';
import { getCurrentYear } from 'helpers/generic';
import { useSiteMetadata } from 'api/global';

const FooterStyled = styled.footer`
  display: grid;
  place-items: center;
  font-size: small;
`;

const Footer = (): JSX.Element => {
  const { email } = useSiteMetadata();

  return (
    <FooterStyled>
      <p>
        &copy; Copyright {getCurrentYear()}{' '}
        <a href={`mailto: ${email}`} aria-label='email link'>
          Gonçalo Ramalho
        </a>
      </p>
    </FooterStyled>
  );
};

export default Footer;
