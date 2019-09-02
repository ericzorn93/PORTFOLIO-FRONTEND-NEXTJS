import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout/layout';
import Image from '../components/Image/image';
import SEO from '../components/SEO/seo';
import { HomePageWrapper } from '../styles/styled_components/page_styles/index.page';

const IndexPage = () => (
  <Layout>
    <HomePageWrapper>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </HomePageWrapper>
  </Layout>
);

export default IndexPage;
