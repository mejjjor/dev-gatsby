module.exports = {
  siteMetadata: {
    title: "Jongleur - Sculpteur de ballons - Spectacle de feu - Paris ",
    description:
      "Je propose des spectacles en jongleur, sculpteur de ballons et des spectacles de feu, à Paris et partout en France"
  },
  plugins: [
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array

  ]
};
