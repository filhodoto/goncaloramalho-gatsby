import React from 'react';
import styled from 'styled-components/macro';
import { getCurrentYear } from 'helpers/generic';
import { graphql, useStaticQuery } from 'gatsby';

const FooterStyled = styled.footer`
  display: grid;
  place-items: center;
  font-size: small;
`;

const Footer = (): JSX.Element => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            email
          }
        }
      }
    `
  );

  return (
    <FooterStyled>
      <p>
        &copy; Copyright {getCurrentYear()}{' '}
        <a href={`mailto: ${site.siteMetadata.email}`} aria-label='email link'>
          Gonçalo Ramalho
        </a>
      </p>
    </FooterStyled>
  );
};

export default Footer;
