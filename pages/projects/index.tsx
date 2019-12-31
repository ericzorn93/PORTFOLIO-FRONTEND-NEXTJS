import React from "react";
import { NextPage } from "next";

import GithubRepositories from "../../components/custom/github_repositories";
import { PageContainer } from "../../styles/page_styles/overall/overall";
import PortfolioProjects from "../../components/custom/portfolio_projects";
import Link from "next/link";

const ProjectsPage: NextPage = () => {
  return (
    <PageContainer>
      <div className="flex flex-wrap justify-between items-center mx-5">
        <h1 className="font-bold sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl">
          All Projects
        </h1>

        <Link href="/projects/personal/add">
          <a>
            <button className="rounded border border px-3 sm:p-2 md:p-2 lg:p-2 xl:p-2 bg-black text-white hover:bg-gray-900">
              Add Project
            </button>
          </a>
        </Link>
      </div>

      <PortfolioProjects />
      <br />
      <GithubRepositories />
    </PageContainer>
  );
};

export default ProjectsPage;
