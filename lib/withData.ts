import withApollo from "next-with-apollo";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";

import { PrimaryUtils } from "../shared/utils/primary.utils";

function createClient(serverData: any): ApolloClient<any> {
  // Token for GitHub URL
  const GITHUB_TOKEN = "fd90c9f0264b1d64196b0dd67e69fc29cc044d8f";

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
