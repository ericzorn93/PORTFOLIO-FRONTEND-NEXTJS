import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import { Provider } from "react-redux";

import reduxStore from "./store";
import zornApolloClient from "./apollo_setup";

const LeadComponent: React.FC = () => {
  return (
    <ApolloProvider client={zornApolloClient}>
      <ApolloHooksProvider client={zornApolloClient}>
        <Provider store={reduxStore}>
          <App />
        </Provider>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
};

ReactDOM.render(<LeadComponent />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
