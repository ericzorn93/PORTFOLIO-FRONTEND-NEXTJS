import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import "./App.css";
import HomePage from "./pages/HomePage";

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

const App: React.FC = () => {
  return (
    <Fragment>
      <Query query={themeQuery}>
        {(response: any) => {
          if (response.loading) return <h1>Loading...</h1>;
          if (response.error) return <h1>Error</h1>;

          if (response.data) {
            console.log(response.data);
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

export default App;
