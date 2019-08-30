import React from "react";
import { Provider } from "react-redux";
import {ApolloProvider} from 'react-apollo';

import assembleStore from "./src/store";
import apolloClient from "./src/apollo/apolloClient";

const wrapWithProviders = ({ element }: { element: any }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = assembleStore();
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          {element}
        </Provider>
      </ApolloProvider>
    </>
  );
};

export default wrapWithProviders;
