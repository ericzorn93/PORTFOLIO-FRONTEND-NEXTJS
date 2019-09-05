import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'gatsby';

import Layout from '../components/Layout/layout';
import Image from '../components/Image/image';
import SEO from '../components/SEO/seo';
import { IndexPageWrapper } from '../components/Page/index.page.style';

const IndexPage: React.FC = () => (
  <Layout>
    <IndexPageWrapper>
      <SEO title="Home" />
      <h1>Hi I'm, Eric Zorn,</h1>
      <p>I am a Full-Stack Software Engineer</p>
      <p>
        <em>Specializing in JavaScript, Python, and Ruby</em>
      </p>
      <p>Passionate Tech Enthusiast, Programmer, and Golfer</p>
      <div css={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </IndexPageWrapper>
  </Layout>
);

export default IndexPage;
