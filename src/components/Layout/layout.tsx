import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

import './styles/layout.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { PageWrapper } from './styles/layout.styles';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <PageWrapper>
        <Header />
        <main>{children}</main>
      </PageWrapper>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
