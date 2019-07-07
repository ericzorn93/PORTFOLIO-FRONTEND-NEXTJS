import React, { Fragment } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { connect } from "react-redux";

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

          return <EZRouter />;
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
