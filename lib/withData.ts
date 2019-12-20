import withApollo from "next-with-apollo";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";

import { PrimaryUtils } from "../shared/utils/primary.utils";

function createClient(serverData: any): ApolloClient<any> {
  // Token for GitHub URL
  const GITHUB_TOKEN = "5f7904f6c432f6c85c6a0b3ec4f9413e255ae9be";

  const portfolioLink = new HttpLink({
    uri: PrimaryUtils.graphQlUrl,
    headers: {}
  });

  const githubLink = new HttpLink({
    uri: "https://api.github.com/graphql",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`
    }
  });

  return new ApolloClient({
    link: HttpLink.split(
      operation => {
        return operation.getContext().clientName === "githubLink";
      },
      githubLink,
      portfolioLink
    ),
    cache: new InMemoryCache()
  });
}

export default withApollo(createClient);
