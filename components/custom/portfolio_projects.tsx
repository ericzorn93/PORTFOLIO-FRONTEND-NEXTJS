import React from "react";
import { NextComponentType } from "next";
import Link from "next/link";

import { useAllProjectsQuery } from "../../lib/generated/PortfolioGraphqlComponents";

const PortfolioProjects: NextComponentType = () => {
  const { data, loading, error } = useAllProjectsQuery();

  if (!data || loading || error) {
    return <h1>Loading...</h1>;
  }

  const { allProjects } = data;
  return (
    <>
      {allProjects.map(project => (
        <Link
          // href={`/projects/personal/individual?id=${project.id}`}
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
