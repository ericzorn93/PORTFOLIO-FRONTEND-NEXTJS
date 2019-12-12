import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useSelector } from 'react-redux';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

import Layout from '../components/Layout/layout';
import SEO from '../components/SEO/seo';
import { IAllSitePage } from '../shared/types/interfaces/pages/index.page.interfaces';
// import { HomePageWrapper } from '../components/HomePage/homepage.styles';
import { PositionCenter } from '../components/styled/PositionCenter';

const IndexPage = () => {
  const isDarkModeEnabled: boolean = useSelector(
    (state: any) => state.theme.isDarkModeEnabled
  );

  const {
    allSitePage: { edges: pageEdges },
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
    pageName: edge.node.internalComponentName,
  }));

  return (
    <Layout>
      <SEO title="Home" />

      <PositionCenter>
        <h1 className="personName">Eric Zorn</h1>
        <h2 className="jobTitle">Full-Stack Software Engineer</h2>
        <h3 className="description">
          JavaScript Enthusiast. Specializing in: React, Redux, Node JS, Express
          JS, TypeScript and MongoDB
        </h3>
      </PositionCenter>
    </Layout>
  );
};

export default IndexPage;
