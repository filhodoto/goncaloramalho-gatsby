/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require('path');

// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules'
);

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Gonçalo Ramalho - Web Developer',
    description:
      'Hi there! I’m Gonçalo, a web enthusiast who likes to craft interesting and beautiful projecs for the web.',
    author: 'Gonçalo Ramalho',
    email: 'meet@goncaloramalho.com',
    siteUrl: 'https://www.goncaloramalho.com',
    keywords: [
      'web developer',
      'web design',
      'web Development',
      'frontend-developer',
      'react',
      'javascript',
      'portfolio',
      'Gonçalo Ramalho',
      'remote',
    ],
    social: {
      linkedin: 'https://www.linkedin.com/in/gtramalho',
      github: 'https://github.com/filhodoto',
      twitter: 'https://twitter.com/_goncalo',
      instagram: 'https://instagram.com/goncalo_ramalho/',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-plugin-typescript-checker',
    `gatsby-plugin-preload-fonts`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: path.join(__dirname, 'src/images/svg/'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        // Gatsby required rules directory
        rulePaths: [gatsbyRequiredRules],
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        // Default settings that may be omitted or customized
        stages: ['develop'],
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        exclude: ['node_modules', 'bower_components', '.cache', 'public'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        helpers: path.join(__dirname, 'src/helpers'),
        pages: path.join(__dirname, 'src/pages'),
        styles: path.join(__dirname, 'src/styles'),
        theme: path.join(__dirname, 'src/theme'),
        api: path.join(__dirname, 'src/api'),
        state: path.join(__dirname, 'src/state'),
        assets: path.join(__dirname, 'src/assets'),
        images: path.join(__dirname, 'src/images'),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `goncalo-ramalho-website`,
        short_name: `gr-website`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#505970`,
        display: `standalone`,
        display: 'minimal-ui',
        icon: 'src/images/png/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        // [required] - path to your createStore module
        pathToCreateStoreModule: './src/state/createStore',
        // [optional] - options passed to `serialize-javascript`
        // info: https://github.com/yahoo/serialize-javascript#options
        // will be merged with these defaults:
        serialize: {
          space: 0,
          // if `isJSON` is set to `false`, `eval` is used to deserialize redux state,
          // otherwise `JSON.parse` is used
          isJSON: true,
          unsafe: false,
          ignoreFunction: true,
        },
        // [optional] - if true will clean up after itself on the client, default:
        cleanupOnClient: true,
        // [optional] - name of key on `window` where serialized state will be stored, default:
        windowKey: '__PRELOADED_STATE__',
      },
    },
  ],
};
