/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require('path');
const sass = require('sass');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  pathPrefix: process.env.PATH_PREFIX || '/cranach-grafiken-gatsby',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-transition-link',
    'gatsby-transformer-json',
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'material icons',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'de',
        useLangKeyLayout: false,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: sass,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: './content/',
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '~': resolve('src'),
        },
        extensions: [
          'js',
          'jsx',
          'css',
          'scss',
          'json',
        ],
      },
    },
  ],
};
