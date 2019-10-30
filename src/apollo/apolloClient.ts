import ApolloClient, { InMemoryCache } from "apollo-boost";
import fetch from "isomorphic-fetch";

export const client = new ApolloClient({
  uri: "https://ez-portfolio-backend-graphql.herokuapp.com/graphql",
  cache: new InMemoryCache(),
  fetch
});
