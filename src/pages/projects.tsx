import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Layout from '../components/Layout/layout';
import { IAllSitePage } from '../shared/types/interfaces/pages/index.page.interfaces';

const ProjectsPage: React.FC = () => {
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
    type: edge.node.path.includes('github') ? 'github' : 'contentful',
  }));

  return (
    <Layout>
      <h1>Projects Page</h1>
      {pageData.map(page => (
        <>
          <Link to={page.path} key={page.id} state={{ type: page.type }}>
            {page.pageName}
          </Link>
          <br />
        </>
      ))}
    </Layout>
  );
};

export default ProjectsPage;
