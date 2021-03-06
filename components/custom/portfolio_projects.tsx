import React from "react";
import { NextComponentType } from "next";
import Link from "next/link";

import { useAllProjectsQuery } from "../../lib/generated/PortfolioGraphqlComponents";
import LoadingSpinner from "./loading_spinner";

const PortfolioProjects: NextComponentType = () => {
  const { data, loading, error } = useAllProjectsQuery();

  if (!data || loading || error) {
    // return <LoadingSpinner isLoading={true} color={null} />;
    return null;
  }

  const { allProjects } = data;
  return (
    <>
      <h1 className="font-bold">Personal Projects</h1>
      {allProjects.map(project => (
        <Link
          href={{
            pathname: "/projects/personal/individual",
            query: {
              id: project.id
            }
          }}
          key={project.id}
        >
          <a>{project.name}</a>
        </Link>
      ))}
    </>
  );
};

export default PortfolioProjects;
