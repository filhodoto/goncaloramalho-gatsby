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
      'Hello my name is Gonçalo Ramalho and I’m a web enthusiast who likes to craft interesting and beautiful projecs for the web.',
    author: '@filhodoto',
    siteUrl: 'http://www.goncaloramalho.com',
    social: {
      github: 'githublink',
      codesandbox: 'codesandbox_link',
      twitter: '_goncalo',
      linkedin: 'linkedinlink',
    },
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-plugin-typescript-checker',
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
      },
    },
  ],
};
