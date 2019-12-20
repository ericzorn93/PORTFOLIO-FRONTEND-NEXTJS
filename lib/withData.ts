import withApollo from "next-with-apollo";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";

import { PrimaryUtils } from "../shared/utils/primary.utils";

function createClient(serverData: any): ApolloClient<any> {
  // Token for GitHub URL

  const portfolioLink = new HttpLink({
    uri: PrimaryUtils.graphQlUrl,
    headers: {}
  });

  const githubLink = new HttpLink({
    uri: "https://api.github.com/graphql",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
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
