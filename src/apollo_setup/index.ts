import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
// import { HttpLink } from "apollo-link-http";

const cache: InMemoryCache = new InMemoryCache();

const apolloClient = new ApolloClient({
  // link: new HttpLink(),
  uri: "http://localhost:4000/graphql",
  cache
});

export default apolloClient;
