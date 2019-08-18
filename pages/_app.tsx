import React, { useEffect } from "react";
import { Container } from "next/app";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";

import withApolloClient from "../src/lib/with-apollo-client";
import store from "../src/store";

const MyApp: React.FC<any> = (props: any) => {
  const { Component, pageProps, apolloClient, store } = props;

  useEffect(() => {
    document.body.style.fontFamily = "sans-serif";
  }, []);

  return (
    <Container>
      <ApolloProvider client={apolloClient}>
        <ApolloHooksProvider client={apolloClient}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ApolloHooksProvider>
      </ApolloProvider>
    </Container>
  );
};

export default withApolloClient(withRedux(store)(MyApp));
