import React from "react";
import { graphql } from "gatsby";
// import Helmet from "react-helmet";

import Content, { HTMLContent } from "../components/Content";

export const ContactPageTemplate = ({ title, body, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      un peu de cannooontact de home{title}
      <PageContent content={body} />
    </div>
  );
};

const ContactPage = ({ data }) => {
  return (
    <ContactPageTemplate
      contentComponent={HTMLContent}
      body={data.markdownRemark.html}
      title={data.markdownRemark.frontmatter.title}
    />
  );
};

export default ContactPage;

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
