import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";

export default ({ data }) => {
  console.log("zzzzzzzzzz", data);
  return (
    <div>
      un peu de cannooontact de home{data.markdownRemark.frontmatter.title}
    </div>
  );
};

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
