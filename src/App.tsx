import React, { Fragment } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { connect } from "react-redux";
import { ThemeProvider } from "emotion-theming";

import "./App.css";
import EZRouter from "./components/EZRouter";
import { LOAD_THEMES } from "./store/types/theme.types";
// import { loadThemesAction } from "./store/actions/theme.actions";

// Theme Query
const themeQuery = gql`
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

interface Props {
  dispatchLoadThemes: Function;
  lightModeTheme: object;
  darkModeTheme: object;
  selectedTheme: string;
}

const App: React.FC<Props> = props => {
  const {
    dispatchLoadThemes,
    lightModeTheme,
    darkModeTheme,
    selectedTheme
  } = props;

  // Event Listeners
  const updateThemes = (themeData: any) => {
    if (!themeData) {
      return;
    }
    dispatchLoadThemes(themeData);
  };

  return (
    <Fragment>
      <Query query={themeQuery}>
        {(response: any) => {
          if (
            response.loading &&
            !Object.values(darkModeTheme).length &&
            !Object.values(lightModeTheme).length
          ) {
            return <h1>Loading...</h1>;
          }

          if (response.error) {
            return <h1>Error</h1>;
          }

          if (
            response.data &&
            dispatchLoadThemes &&
            !Object.values(darkModeTheme).length &&
            !Object.values(lightModeTheme).length
          ) {
            const { getAllThemes } = response.data;
            updateThemes(getAllThemes);
          }

          if (lightModeTheme && darkModeTheme) {
            const chosenTheme: object =
              selectedTheme === "darkMode" ? darkModeTheme : lightModeTheme;

            return (
              <ThemeProvider theme={chosenTheme || {}}>
                <EZRouter />
              </ThemeProvider>
            );
          }
        }}
      </Query>
    </Fragment>
  );
};

// Redux Actions
const mapStateToProps = (state: any) => ({
  lightModeTheme: state.themes.lightMode,
  darkModeTheme: state.themes.darkMode,
  selectedTheme: state.themes.selectedTheme
});

const mapDispatchToProps = (dispatch: Function) => ({
  dispatchLoadThemes: (themes: any) =>
    dispatch({
      type: LOAD_THEMES,
      payload: {
        lightMode: themes.lightMode,
        darkMode: themes.darkMode,
        selectedTheme: "darkMode"
      }
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
