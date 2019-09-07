import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';

import './styles/layout.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { PageWrapper } from './styles/layout.styles';

interface ILayout {}

const Layout: React.FC<ILayout> = ({ children }) => {
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
        <main>{children}</main>
      </PageWrapper>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
