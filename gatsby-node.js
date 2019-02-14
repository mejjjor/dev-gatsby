const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    path
                    templateKey
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: path.resolve(
              `src/templates/${String(node.frontmatter.templateKey)}.js`
            ),
            context: {}
          });
        });
      })
    );
  });
};
