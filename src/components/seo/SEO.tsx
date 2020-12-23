import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

interface SEOInterface {
  isDarkMode: boolean;
  description?: string;
  title?: string;
  keywords?: string[];
  image?: string;
}
//TODO:: Find a (not over complicated) way of importing image for card
const SEO: FC<SEOInterface> = ({
  isDarkMode,
  title,
  description,
  image: metaImage = 'https://res.cloudinary.com/jlengstorf/image/upload/f_auto,g_auto/v1593579116/jason.af/og-image.jpg',
}) => {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              description
              keywords
              siteUrl
            }
          }
        }
      `}
      render={(data) => {
        const metaDescription: string =
          description || data.site.siteMetadata.description;

        const currentTitle: string = title || data.site.siteMetadata.title;

        console.log('do we have metaImage ? ', metaImage);
        console.log(metaImage);
        return (
          <Helmet defer={false}>
            {/* General tags */}
            <title>{currentTitle}</title>
            <link rel='canonical' href={data.site.siteMetadata.siteUrl} />
            <meta name='description' content={metaDescription} />
            <meta name='image' content={metaImage} />

            {/* OpenGraph tags */}
            <meta property='og:type' content='website' />
            <meta property='og:url' content={data.site.siteMetadata.siteUrl} />
            <meta property='og:description' content={metaDescription} />
            <meta property='og:image' content={metaImage} />

            {/* Twitter Card tags */}
            <meta
              name='twitter:widgets:theme'
              content={isDarkMode ? 'dark' : 'light'}
            />
            <meta name='twitter:dnt' content='on' />
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:creator' content='@_goncalo' />
            <meta name='twitter:title' content={currentTitle} />
            <meta name='twitter:description' content={metaDescription} />
            <meta name='twitter:image' content={metaImage} />
          </Helmet>
        );
      }}
    />
  );
};

export default SEO;
