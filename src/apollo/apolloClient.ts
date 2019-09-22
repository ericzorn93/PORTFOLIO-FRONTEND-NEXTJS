import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

// @ts-ignore
const apolloClient = new ApolloClient({
  uri: 'https://ez-portfolio-backend-graphql.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

export default apolloClient;
