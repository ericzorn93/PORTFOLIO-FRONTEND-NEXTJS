import withApollo from "next-with-apollo";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";

import { PrimaryUtils } from "../shared/utils/primary.utils";

function createClient(serverData: any): ApolloClient<any> {
  // Token for GitHub URL
  const GITHUB_TOKEN = "df714d52d3cd2882512e64995f8edd8546c09c3c";

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
