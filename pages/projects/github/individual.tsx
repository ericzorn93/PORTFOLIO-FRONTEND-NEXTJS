import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { useFindGitHubRepoQuery } from "../../../lib/generated/GithubGraphqlComponents";
import { PageContainer } from "../../../styles/page_styles/overall/overall";
import CustomHead from "../../../components/primary/custom_head/custom_head";
import LoadingSpinner from "../../../components/custom/loading_spinner";

const ProjectID: NextPage = () => {
  const router = useRouter();

  const { data, loading, error } = useFindGitHubRepoQuery({
    context: { clientName: "githubLink" },
    variables: {
      name: router.query.name.toString()
    }
  });

  if (!data || loading || error) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <LoadingSpinner isLoading={true} />
      </div>
    );
  }

  // Retrieve repository from the github viewer data
  const {
    viewer: { repository }
  } = data;

  // Redirect if the repository does not exist
  if (!repository) {
    router.push("/projects");
    return null;
  }

  // Grab data off of the existing repository
  const { id, name, description } = repository;
  return (
    <>
      <CustomHead pageTitle={name} />
      <PageContainer>
        <div className="mt-4 mx-4">
          <h1 className="text-center font-bold">Project Id: {id}</h1>
          <p>
            <span className="font-bold">Project Name:</span> {name}
          </p>
          {description && (
            <p>
              <span className="font-bold">Project Description:</span>{" "}
              {description}
            </p>
          )}
        </div>
      </PageContainer>
    </>
  );
};

export default ProjectID;
