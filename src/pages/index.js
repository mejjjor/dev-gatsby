import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

import "../components/main.sass";

import Navbar from "../components/Navbar";

export default ({ data, children }) => (
  <div>
    <Helmet>
      <html lang="fr" />
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/img/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="/img/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/img/favicon-16x16.png"
        sizes="16x16"
      />

      <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
      <meta name="theme-color" content="#09324b" />

      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={data.site.siteMetadata.title} />
      <meta property="og:url" content="/" />
      <meta property="og:image" content="/img/og-image.jpg" />
    </Helmet>
    <Navbar />
    <div>{children}</div>
  </div>
);

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`;
