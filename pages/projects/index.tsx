import React from "react";
import { NextPage } from "next";

import GithubRepositories from "../../components/page_styles/projects_page/github_repositories";
import { PageContainer } from "../../components/page_styles/overall";
import PortfolioProjects from "../../components/page_styles/projects_page/portfolio_projects";

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
