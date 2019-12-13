import React, { useMemo } from 'react';
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

  const pageData = useMemo(() => {
    return pageEdges
      .filter(edge => {
        const pageName = edge.node.internalComponentName;

        if (!pageName) {
          return false;
        }

        if (!pageName.includes('Github') && !pageName.includes('Contentful')) {
          return false;
        }

        return true;
      })
      .map(edge => {
        let updatedPageName = edge.node.internalComponentName;

        if (updatedPageName.includes('Github')) {
          updatedPageName = updatedPageName.split('Github')[1];
        } else if (updatedPageName.includes('Contentful')) {
          updatedPageName = updatedPageName.split('Contentful')[1];
        }

        return {
          id: edge.node.id,
          path: edge.node.path,
          pageName: updatedPageName,
          type: edge.node.path.includes('github') ? 'github' : 'contentful',
        };
      });
  }, [pageEdges]);

  return (
    <Layout>
      <h1>Projects</h1>
      {pageData.map(page => (
        <>
          <Link key={page.id} to={page.path} state={{ type: page.type }}>
            {page.pageName}
          </Link>
          <br />
        </>
      ))}
    </Layout>
  );
};

export default ProjectsPage;
