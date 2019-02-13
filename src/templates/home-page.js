import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";

export default ({ data, children }) => <div>un peu de contenu de home</div>;

export const pageQuery = graphql`
  query pageQuery {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`;
