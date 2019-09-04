/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../Header/header';
import './layout.css';

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
      <div css={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
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
      </div>
      <footer>
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </React.Fragment>
  );
};

export default Layout;
