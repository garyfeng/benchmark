module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    author: 'Benchmark Design System Team',
    title: 'Benchmark Design System'
  },
  plugins: [
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/docs/`,
        name: 'docs'
      }
    },
    // page creator plugin is needed to create mdx pages from folders
    // other than the default of `/src/pages`
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/docs`
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve(`${__dirname}/src/site/index.js`)
        }
      }
    }
  ]
};
