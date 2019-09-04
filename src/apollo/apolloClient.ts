import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-unfetch';

// @ts-ignore
const apolloClient = new ApolloClient({
  uri: 'https://ez-portfolio-backend-graphql.herokuapp.com/graphql',
  fetch,
  cache: new InMemoryCache(),
});

export default apolloClient;
