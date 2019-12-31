import React from "react";
import App from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-boost";
import { Store } from "redux";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";

import withData from "../lib/withData";
import Page from "../components/primary/page/page";
import assembleStore from "../store/assembleStore";
import { AllThemesComponent } from "../lib/generated/PortfolioGraphqlComponents";
import { ADD_ALL_THEME_DATA } from "../store/types/theme_types/theme.types";

import "../styles/scss/main.scss";

interface MyAppProps {
  Component: React.ComponentClass | React.FunctionComponent;
  apollo: ApolloClient<any>;
  pageProps: any;
  store: Store;
}

class MyApp extends App<MyAppProps> {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps: { query?: any } = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // This exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, apollo, pageProps, store } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <Provider store={store}>
          <AllThemesComponent>
            {({ data, loading, error }) => {
              if (loading || error || !data) {
                return <h1>Loading...</h1>;
              }

              // Theme Data Add To Redux Store
              store.dispatch({
                type: ADD_ALL_THEME_DATA,
                payload: {
                  darkMode: data.allThemes.darkMode,
                  lightMode: data.allThemes.lightMode
                }
              });

              return (
                <Page>
                  <Component {...pageProps} themeData={data} />
                </Page>
              );
            }}
          </AllThemesComponent>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default withRedux(assembleStore)(withData(MyApp));
