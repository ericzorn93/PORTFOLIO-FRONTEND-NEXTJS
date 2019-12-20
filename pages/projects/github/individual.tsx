import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

import { useFindGitHubRepoQuery } from "../../../lib/generated/GithubGraphqlComponents";
import { PageContainer } from "../../../components/page_styles/overall/overall";
import CustomHead from "../../../components/primary/custom_head/custom_head";

const ProjectID: NextPage = () => {
  const router = useRouter();

  const { data, loading, error } = useFindGitHubRepoQuery({
    context: { clientName: "githubLink" },
    variables: {
      name: router.query.name.toString()
    }
  });

  if (!data || loading || error) {
    return <h1>Loading...</h1>;
  }

  const {
    viewer: { repository }
  } = data;

  if (!repository) {
    router.push("/projects");
    return null;
  }

  return (
    <>
      <CustomHead pageTitle={repository.name} />
      <PageContainer>
        <h1>Project Id: {repository.id}</h1>
        <p>Project Name: {repository.name}</p>
      </PageContainer>
    </>
  );
};

export default ProjectID;
