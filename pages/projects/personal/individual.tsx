import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { generate as generateId } from "shortid";

import { PageContainer } from "../../../styles/page_styles/overall/overall";
import { useFindOneProjectByIdQuery } from "../../../lib/generated/PortfolioGraphqlComponents";
import CustomHead from "../../../components/primary/custom_head/custom_head";
import LoadingSpinner from "../../../components/custom/loading_spinner";

const ProjectID: NextPage = () => {
  const router = useRouter();

  const { data, loading, error } = useFindOneProjectByIdQuery({
    variables: {
      projectId: router.query.id.toString()
    }
  });

  if (!data || loading || error) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <LoadingSpinner isLoading={true} />
      </div>
    );
  }

  // Extract Data off of the custom project saved in the local database
  const { findOneProjectById: project } = data;
  const { id, name, description, tags } = project;

  return (
    <>
      <CustomHead pageTitle={name} />
      <PageContainer>
        <div className="mt-4 mx-4">
          <h1 className="font-bold text-center text-xl">Project Id: {id}</h1>
          <p>
            <span className="font-bold">Name:</span> {name}
          </p>
          {description && (
            <p>
              <span className="font-bold">Description:</span> {description}
            </p>
          )}
          <p>
            <span className="font-bold">Tags: </span>
            {tags?.map(tag => (
              <span key={generateId()}>
                {tags.length > 1 ? `${tag.name}, ` : tag.name}
              </span>
            ))}
          </p>
        </div>
      </PageContainer>
    </>
  );
};

export default ProjectID;
