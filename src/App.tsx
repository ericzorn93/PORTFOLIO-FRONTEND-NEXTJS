import React, { Fragment } from "react";
import { gql } from "apollo-boost";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "emotion-theming";

import "./App.css";
import EZRouter from "./components/EZRouter";
import { LOAD_THEMES } from "./store/types/theme.types";
import { useQuery } from "react-apollo-hooks";
import Loading from "./components/Loading";
// import { loadThemesAction } from "./store/actions/theme.actions";

// Theme Query
const THEME_QUERY = gql`
  query getAllThemes {
    getAllThemes {
      darkMode {
        primary
        secondary
        alternate
        lightAlternate
        light
        black
        white
      }
      lightMode {
        primary
        secondary
        alternate
        lightAlternate
        light
        black
        white
      }
    }
  }
`;

interface Props {}

const App: React.FC<Props> = props => {
  /** Beginning State */
  const completeThemes = useSelector(
    (state: any) => state.themes.completeThemes
  );
  const selectedTheme = useSelector((state: any) => state.themes.selectedTheme);
  /** End State */

  /** Beginning Dispatchers */
  const dispatch = useDispatch();
  /** End Dispatchers */

  /** Beginning Apollo Queries &Mutations */
  const {
    data: themeData,
    error: themeError,
    loading: themeLoading
  } = useQuery(THEME_QUERY);
  /** End Apollo Queries & Mutations */

  if (themeError) {
    return <h1>Error</h1>;
  }

  if (themeLoading) {
    return <Loading />;
  }

  const { getAllThemes } = themeData;
  dispatch({
    type: LOAD_THEMES,
    payload: {
      lightMode: getAllThemes.lightMode,
      darkMode: getAllThemes.darkMode,
      completeThemes: getAllThemes,
      selectedTheme: selectedTheme || "darkMode"
    }
  });

  return (
    <Fragment>
      <ThemeProvider theme={completeThemes[selectedTheme] || {}}>
        <EZRouter />
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
