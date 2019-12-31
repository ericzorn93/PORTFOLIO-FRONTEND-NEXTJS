import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NextComponentType } from "next";
import Link from "next/link";

import { useGithubRepositoriesQuery } from "../../lib/generated/GithubGraphqlComponents";
import { addGithubProjectsAction } from "../../store/actions/project_actions/project.actions";
import LoadingSpinner from "./loading_spinner";

const GithubRepositories: NextComponentType = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useGithubRepositoriesQuery({
    context: { clientName: "githubLink" },
    variables: {
      last: 100
    }
  });

  useEffect(() => {
    if (data && !loading && !error) {
      dispatch(addGithubProjectsAction(data));
    }
  }, [data, loading, error]);

  if (!data || loading || error) {
    return <LoadingSpinner isLoading={true} />;
  }

  return (
    <div>
      <h1>Github Repos</h1>
      {data.viewer.repositories.nodes.map(node => {
        return (
          <p key={node.id}>
            <Link
              href={{
                pathname: `/projects/github/individual`,
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
