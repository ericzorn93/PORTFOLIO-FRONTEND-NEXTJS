import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import "./App.css";
import HomePage from "./pages/HomePage";
import { connect } from "react-redux";
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
}

const App: React.FC<Props> = props => {
  const { dispatchLoadThemes } = props;

  return (
    <Fragment>
      <Query query={themeQuery}>
        {(response: any) => {
          if (response.loading) return <h1>Loading...</h1>;
          if (response.error) return <h1>Error</h1>;

          if (response.data && dispatchLoadThemes) {
            const { getAllThemes } = response.data;
            dispatchLoadThemes(getAllThemes);
          }

          return (
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={HomePage} />
              </Switch>
            </BrowserRouter>
          );
        }}
      </Query>
    </Fragment>
  );
};

// Redux Actions
const mapStateToProps = (state: any) => ({});

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
