import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';


function createApolloClient() {
  let apolloUri: string;

  if(process.env.NODE_ENV !== 'production') {
    apolloUri = "http://localhost:4000/graphql"
  } else {
    apolloUri = 'https://ez-portfolio-backend-graphql.herokuapp.com/graphql'
  }

  const apolloClient = new ApolloClient({
    uri: apolloUri,
    cache: new InMemoryCache(),
  });

  return apolloClient
}


export default createApolloClient();
