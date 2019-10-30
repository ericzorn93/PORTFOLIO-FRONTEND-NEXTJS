import React from "react";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/react-hooks";

import assembleStore from "../../store/assembleStore";
import { client } from "../../apollo/apolloClient";

const WrapRootElement: React.FC<any> = ({ element }) => {
  // Redux Store
  const store = assembleStore();

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>{element}</Provider>
    </ApolloProvider>
  );
};

export default WrapRootElement;
