import { graphql, useStaticQuery } from 'gatsby';

export interface SiteMetadataProps {
  email: string;
  social: { [key: string]: string };
}

export const useSiteMetadata = (): SiteMetadataProps => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          email
          social {
            github
            linkedin
            twitter
            instagram
          }
        }
      }
    }
  `);

  return site.siteMetadata;
};
