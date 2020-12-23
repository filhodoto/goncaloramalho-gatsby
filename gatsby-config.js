/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require('path');

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Gonçalo Ramalho - Web Developer',
    description:
      'Hi there! I’m Gonçalo, a web enthusiast who likes to craft interesting and beautiful projecs for the web.',
    author: 'Gonçalo Ramalho',
    email: 'meet@goncaloramalho.com',
    siteUrl: 'http://www.goncaloramalho.com',
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
          include: /images/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        helpers: path.join(__dirname, 'src/helpers'),
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        styles: path.join(__dirname, 'src/styles'),
        theme: path.join(__dirname, 'src/theme'),
        api: path.join(__dirname, 'src/api'),
        images: path.join(__dirname, 'src/images'),
        state: path.join(__dirname, 'src/state'),
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
