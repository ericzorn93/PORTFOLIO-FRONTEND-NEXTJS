import React from "react";
import { NextPage } from "next";

import { useAllProjectsQuery } from "../../lib/generated/PortfolioGraphqlComponents";
import SingleProject from "../../components/page_styles/projects_page/single_project";
import GithubRepositories from "../../components/page_styles/projects_page/github_repositories";
import { PageContainer } from "../../components/page_styles/overall/overall";

const ProjectsPage: NextPage = () => {
  const { data, loading, error } = useAllProjectsQuery();

  if (loading || error || !data) {
    return <h1>Loading...</h1>;
  }

  return (
    <PageContainer>
      <h1>Projects</h1>
      {data.allProjects.map(project => (
        <SingleProject key={project.id} project={project}></SingleProject>
      ))}
      <br />
      <GithubRepositories />
    </PageContainer>
  );
};

export default ProjectsPage;
