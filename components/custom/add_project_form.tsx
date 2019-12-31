import React, { useCallback } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const addProjectSchema = Yup.object().shape({
  name: Yup.string()
    .required("You must provide a length for the project name")
    .min(2)
    .max(250),
  description: Yup.string()
    .required("A description of the project needs to be provided.")
    .min(2)
    .max(1000)
});

const AddProjectForm: React.FC = () => {
  const addProjectForm = useFormik({
    validationSchema: addProjectSchema,
    initialValues: {
      name: "",
      description: ""
    },
    onSubmit: async (values, actions) => {
      const { setSubmitting } = actions;

      setSubmitting(true);
      console.log(values);
      setSubmitting(false);
    }
  });

  // Handles form submission
  const handleLocalSubmit = useCallback(
    e => {
      e.preventDefault();

      addProjectForm.handleSubmit();
    },
    [addProjectForm.values]
  );

  const { isSubmitting, errors } = addProjectForm;

  return (
    <form className="w-full" onSubmit={handleLocalSubmit}>
      <div className="flex flex-wrap w-full">
        <div className="w-full">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="project-name"
          >
            Project Name
          </label>
          <input
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.name &&
              "border-red-500"} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
            id="project-name"
            type="text"
            placeholder="Enter Project Name"
            name="name"
            value={addProjectForm.values.name}
            onChange={addProjectForm.handleChange}
            disabled={isSubmitting}
          />
          <p className={`${errors.name && "text-red-500"} text-xs italic`}>
            Please fill out this field.
          </p>
        </div>

        <div className="w-full">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="project-description"
          >
            Project Description
          </label>
          <textarea
            id="project-description"
            name="description"
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.description &&
              "border-red-500"} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
            cols={30}
            rows={10}
            onChange={addProjectForm.handleChange}
            value={addProjectForm.values.description}
            placeholder="Enter Project Description"
          ></textarea>
          <p
            className={`${errors.description && "text-red-500"} text-xs italic`}
          >
            Please fill out this field.
          </p>
        </div>
      </div>

      <div className="w-full">
        <button
          type="submit"
          className="w-full text-center bg-black text-white font-bold rounded-lg border py-2 hover:bg-gray-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddProjectForm;
