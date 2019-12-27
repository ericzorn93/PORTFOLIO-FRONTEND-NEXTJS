import React from "react";
import { NextPage } from "next";

import GithubRepositories from "../../components/custom/github_repositories";
import { PageContainer } from "../../styles/page_styles/overall/overall";
import PortfolioProjects from "../../components/custom/portfolio_projects";

const ProjectsPage: NextPage = () => {
  return (
    <PageContainer>
      <h1>Projects</h1>
      <PortfolioProjects />
      <br />
      <GithubRepositories />
    </PageContainer>
  );
};

export default ProjectsPage;
