/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import './layout.scss';
import './darkmode.scss';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} name="Portfolio Name" />
      <div>
        <ThemeToggler>
          {() => {
            return (
              <>
                <main>{children}</main>
                {/* <Footer name="Eric Zorn" /> */}
              </>
            );
          }}
        </ThemeToggler>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
