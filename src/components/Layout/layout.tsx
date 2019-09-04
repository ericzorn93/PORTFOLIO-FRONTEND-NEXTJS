import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../Header/header';
import './styles/layout.css';
import { PageWrapper } from './styles/layout.styles';

interface ILayout {
  children: any[];
}

const Layout = ({ children }: ILayout) => {
  const {
    site: {
      siteMetadata: { title: siteTitle },
    },
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <React.Fragment>
      <PageWrapper>
        <Header siteTitle={siteTitle} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
      </PageWrapper>
      <footer>
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </React.Fragment>
  );
};

export default Layout;
