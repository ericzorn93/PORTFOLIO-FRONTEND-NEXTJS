import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'gatsby';

import Layout from '../components/Layout/layout';
import Image from '../components/Image/image';
import SEO from '../components/SEO/seo';

const IndexPage: React.FC = () => (
  <Layout>
    <div>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div css={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
);

export default IndexPage;
