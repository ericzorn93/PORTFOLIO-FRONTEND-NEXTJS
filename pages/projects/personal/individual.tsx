import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { PageContainer } from "../../../styles/page_styles/overall/overall";
import { useFindOneProjectByIdQuery } from "../../../lib/generated/PortfolioGraphqlComponents";
import CustomHead from "../../../components/primary/custom_head/custom_head";

const ProjectID: NextPage = () => {
  const router = useRouter();

  const { data, loading, error } = useFindOneProjectByIdQuery({
    variables: {
      projectId: router.query.id.toString()
    }
  });

  if (!data || loading || error) {
    return <h1>Loading...</h1>;
  }

  const { findOneProjectById: project } = data;
  return (
    <>
      <CustomHead pageTitle={project.name} />
      <PageContainer>
        <h1>Project Id: {project.id}</h1>
        <p>{project.name}</p>
        {project.description && <p>{project.description}</p>}
      </PageContainer>
    </>
  );
};

export default ProjectID;
