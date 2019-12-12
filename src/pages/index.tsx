import React from 'react';

import Layout from '../components/Layout/layout';
import SEO from '../components/SEO/seo';
import { PositionCenter } from '../components/styled/PositionCenter';

const IndexPage = () => {
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
