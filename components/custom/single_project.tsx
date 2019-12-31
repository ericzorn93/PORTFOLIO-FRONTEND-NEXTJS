import React from "react";
import { NextComponentType } from "next";
import { Project } from "../../lib/generated/PortfolioGraphqlComponents";

interface ProjectProps {
  project: Partial<Project>;
}

const SingleProject: NextComponentType<null, null, ProjectProps> = ({
  project
}) => {
  return (
    <>
      <b>ID: {project.id}</b>
      <p>{project.name}</p>
    </>
  );
};

export default SingleProject;
