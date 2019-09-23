import React, { useEffect } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { useSelector, useDispatch } from 'react-redux';
import uaParser from 'ua-parser-js';

import './App.css';
import { CustomRoutes } from './router/routes/CustomRoutes';
import { useAllThemesQuery } from './generated/graphql';
import { ThemeActions } from './store/actions/theme_actions';
import { UserAgentActions } from './store/actions/user_agent_actions';

const App: React.FC = () => {
  /** Beginning of State */

  /** End of State */

  /** Beginning of Redux */
  const allThemes = useSelector((state: any) => state.themes.allThemes);
  const dispatch = useDispatch();
  /** End of Redux */

  /** Beginning of Side Effects */
  useEffect(() => {
    const parsedUserAgent = (uaParser as any)();
    dispatch(UserAgentActions.loadInitialUserAgentAction(parsedUserAgent));
  }, []);
  /** End of Side Effects */

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
    <ThemeProvider theme={allThemes}>
      <div className="App">
        <CustomRoutes />
      </div>
    </ThemeProvider>
  );
};

export default App;
