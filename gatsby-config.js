module.exports = {
  siteMetadata: {
    title: "Jongleur - Sculpteur de ballons - Spectacle de feu - Paris ",
    description:
      "Je propose des spectacles en jongleur, sculpteur de ballons et des spectacles de feu, à Paris et partout en France"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    "gatsby-transformer-remark"
  ]
};
