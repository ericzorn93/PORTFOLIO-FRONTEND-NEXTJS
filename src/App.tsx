import React, { Fragment, useEffect, useState } from "react";
import { gql } from "apollo-boost";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "emotion-theming";

import "./App.css";
import EZRouter from "./components/EZRouter";
import { LOAD_THEMES } from "./store/types/theme.types";
import { useQuery } from "react-apollo-hooks";
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
  const [currentTheme, setCurrentTheme] = useState({});
  const selectedTheme = useSelector((state: any) => state.themes.selectedTheme);
  const lightModeTheme = useSelector((state: any) => state.themes.lightMode);
  const darkModeTheme = useSelector((state: any) => state.themes.darkMode);
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

  /** Beginning Side Effect **/
  useEffect(() => {
    if (selectedTheme === "darkMode") {
      setCurrentTheme(darkModeTheme);
    } else {
      setCurrentTheme(lightModeTheme);
    }
  }, [darkModeTheme, lightModeTheme, selectedTheme]);
  /** End Side Effects **/

  if (themeLoading) {
    return <h1>Loading...</h1>;
  }

  if (themeError) {
    return <h1>Error</h1>;
  }

  const { getAllThemes } = themeData;
  dispatch({
    type: LOAD_THEMES,
    payload: {
      lightMode: getAllThemes.lightMode,
      darkMode: getAllThemes.darkMode,
      completeThemes: getAllThemes,
      selectedTheme: "darkMode"
    }
  });

  return (
    <Fragment>
      <ThemeProvider theme={currentTheme || {}}>
        <EZRouter />
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
