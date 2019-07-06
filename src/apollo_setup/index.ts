import ApolloClient from "apollo-boost";

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000"
});

export default apolloClient;
