import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'gatsby';

import Layout from '../components/Layout/layout';

interface Props {
  path: string;
  pageContext: {
    isCreatedByStatefulCreatePages: boolean;
    project: {
      id: string;
      name: string;
      about: string;
    };
  };
}

const GithubProjectTemplate: React.FC<Props> = ({ path, pageContext }) => {
  const { project } = pageContext;

  return (
    <Layout>
      <div css={{ margin: 50 }}>
        <h1>{project.name}</h1>
        <h4>
          <em>Path: {path}</em>
        </h4>
        <p>{project.about}</p>

        <Link to="/">Go Home</Link>
      </div>
    </Layout>
  );
};

export default GithubProjectTemplate;
