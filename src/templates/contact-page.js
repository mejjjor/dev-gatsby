import React from "react";
import { graphql } from "gatsby";
// import Helmet from "react-helmet";

// import Navbar from "../components/Navbar";

export const ContactPageTemplate = ({title}) => {
  return (
    <div>
        un peu de cannooontact de home{title}
    </div>
  )
}

const ContactPage = ({ data }) => {
  return (
    <ContactPageTemplate title={data.markdownRemark.frontmatter.title} />
  );
};

export default ContactPage

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
