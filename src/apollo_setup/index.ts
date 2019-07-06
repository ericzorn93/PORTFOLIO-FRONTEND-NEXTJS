import ApolloClient from "apollo-boost";

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

export default apolloClient;
