import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsx jsx */
import { jsx } from '@emotion/core';

import './styles/layout.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { PageWrapper } from './styles/layout.styles';
import { useAllThemesQuery } from '../../generated/graphql';
import { ThemeActions } from '../../store/actions/theme_actions';

const Layout = ({ children }) => {
  /** Beginning of Redux */
  const allThemes = useSelector((state: any) => state.themes.allThemes);
  const dispatch = useDispatch();
  /** End of Redux */

  /** Beginning of GraphQL Queries */
  const {
    loading: themeLoading,
    data: themeData,
    error: themeError,
  } = useAllThemesQuery();
  /** End of GraphQL Queries */

  if (
    !Object.values(allThemes.darkMode).length &&
    !Object.values(allThemes.lightMode).length &&
    themeData
  ) {
    const { darkMode, lightMode } = themeData.allThemes;

    const themes = {
      darkMode,
      lightMode,
    };

    dispatch(ThemeActions.addAllThemeDataAction(themes));
  }

  if (themeError || themeLoading) {
    return <div>Loading...</div>;
  }

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
