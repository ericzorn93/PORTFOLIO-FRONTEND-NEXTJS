import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { IAllSitePage } from "../utils/types/interfaces/pages/index.page.interfaces";

const IndexPage = () => {
  const {
    allSitePage: { edges: pageEdges }
  } = useStaticQuery<IAllSitePage>(
    graphql`
      query allPages {
        allSitePage {
          edges {
            node {
              id
              path
              internalComponentName
            }
          }
        }
      }
    `
  );

  const pageData = pageEdges.map(edge => ({
    id: edge.node.id,
    path: edge.node.path,
    pageName: edge.node.internalComponentName
  }));

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      {pageData.map(page => (
        <>
          <br />
          <Link key={page.id} to={page.path}>
            Go to page {page.pageName}
          </Link>
        </>
      ))}
    </Layout>
  );
};

export default IndexPage;
