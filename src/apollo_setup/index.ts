import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";

import isDevelopment from "../utils/is_development.util";

function generateZornApolloClient() {
  let graphQLConnection: string;
  const cache: InMemoryCache = new InMemoryCache();

  if (isDevelopment) {
    graphQLConnection = "http://localhost:4000/graphql";
  } else {
    graphQLConnection =
      "https://ez-portfolio-backend-graphql.herokuapp.com/graphql";
  }

  const zornApolloClient = new ApolloClient({
    uri: graphQLConnection,
    cache
  });

  return zornApolloClient;
}

export default generateZornApolloClient();
