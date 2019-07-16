import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";

import withApolloClient from "../lib/with-apollo-client";
import store from "../store";

class MyApp extends App<any> {
  render() {
    const { Component, pageProps, apolloClient, store } = this.props;

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(withRedux(store)(MyApp));
