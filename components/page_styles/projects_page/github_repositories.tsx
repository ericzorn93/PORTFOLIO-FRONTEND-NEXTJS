import React from "react";
import { NextComponentType } from "next";
import Link from "next/link";

import { useGithubRepositoriesQuery } from "../../../lib/generated/GithubGraphqlComponents";

const GithubRepositories: NextComponentType = () => {
  const { data, loading, error } = useGithubRepositoriesQuery({
    context: { clientName: "githubLink" },
    variables: {
      last: 100
    }
  });

  if (!data || loading || error) {
    return <h1>Loading Github</h1>;
  }

  return (
    <div>
      <h1>Github Repos</h1>
      {data.viewer.repositories.nodes.map(node => {
        return (
          <p key={node.id}>
            <Link
              href={{
                pathname: `/projects/individual`,
                query: {
                  name: node.name
                }
              }}
            >
              <a>{node.name}</a>
            </Link>
          </p>
        );
      })}
    </div>
  );
};

export default GithubRepositories;
