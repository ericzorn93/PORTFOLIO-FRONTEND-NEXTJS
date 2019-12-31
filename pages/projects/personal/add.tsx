import React from "react";
import { NextComponentType } from "next";

import AddProjectForm from "../../../components/custom/add_project_form";

const AddProject: NextComponentType = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-black">Add Personal Project</h1>
      <AddProjectForm />
    </div>
  );
};

export default AddProject;
