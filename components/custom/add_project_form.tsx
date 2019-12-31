import React from "react";
import { FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";

import {
  useCreateProjectMutation,
  useFindMeQuery,
  useAllTagsQuery,
  useCreateTagMutation
} from "../../lib/generated/PortfolioGraphqlComponents";
import FormErrorMessage from "./form_error_message";

const addProjectSchema = Yup.object().shape({
  name: Yup.string()
    .required("You must provide a length for the project name")
    .min(2)
    .max(250),
  description: Yup.string()
    .required("A description of the project needs to be provided.")
    .min(2)
    .max(1000),
  tagIds: Yup.array().notRequired(),
  newTag: Yup.string().notRequired()
});

const AddProjectForm: React.FC = () => {
  const { loading: meLoading, data: meData, error: meError } = useFindMeQuery();
  const [
    addProject,
    { loading: addProjectLoading, error: addProjectError }
  ] = useCreateProjectMutation();
  const { loading: tagsLoading, data: allTags } = useAllTagsQuery();
  const [
    createTag
    // { loading: createTagLoading, data: createTagData, error: createTagError }
  ] = useCreateTagMutation({ refetchQueries: ["allTags"] });

  return (
    <Formik
      initialValues={{ name: "", description: "", tagIds: [], newTag: "" }}
      onSubmit={async (values, actions) => {
        const { setSubmitting, setErrors, resetForm } = actions;

        if (!meData || meLoading || meError) {
          return;
        }

        setSubmitting(true);

        try {
          let tagId: string;
          if (values.newTag) {
            const { data } = await createTag({
              variables: {
                name: values.newTag,
                projectIds: [""]
              }
            });

            if (data?.createTag) {
              tagId = data.createTag.id;
            }
          }

          await addProject({
            variables: {
              userId: meData.findMe.id,
              name: values.name,
              description: values.description,
              tagIds: [...values.tagIds, tagId ? tagId : ""]
            }
          });
          setSubmitting(false);
          resetForm();
        } catch (error) {
          setSubmitting(false);

          const errorMessage: string =
            "Could not submit the form at this time, please try again later";
          setErrors({
            name: errorMessage,
            description: errorMessage,
            newTag: errorMessage
          });
        }
      }}
      validationSchema={addProjectSchema}
    >
      {({ values, isSubmitting, errors, handleChange }) => {
        return (
          <>
            {addProjectError && (
              <div className="w-full text-center mt-8 text-xl font-bold">
                <FormErrorMessage message={addProjectError.message} />
              </div>
            )}

            <Form className="w-full px-5">
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
                    value={values.name}
                    onChange={handleChange}
                    disabled={addProjectLoading || isSubmitting}
                  />
                  <p
                    className={`${errors.name &&
                      "text-red-500"} text-xs italic`}
                  >
                    You Must Provide a Project Name for the Project
                  </p>
                </div>

                <div className="w-full mt-8">
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
                    onChange={handleChange}
                    value={values.description}
                    placeholder="Enter Project Description"
                    disabled={addProjectLoading || isSubmitting}
                  ></textarea>
                  <p
                    className={`${errors.description &&
                      "text-red-500"} text-xs italic`}
                  >
                    You Must Add a Message When Creating a Project
                  </p>
                </div>
              </div>

              <div className="w-full mt-8">
                <label
                  htmlFor="projectSelection"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  All Available Project Tags
                </label>

                {allTags && !tagsLoading && allTags.allTags && (
                  <FieldArray
                    name="tagIds"
                    render={arrayHelpers => (
                      <div>
                        {allTags.allTags && allTags.allTags.length && (
                          <>
                            <select
                              name="projects"
                              id="projectSelection"
                              multiple={true}
                              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outlone-none focus:bg-white"
                              disabled={!allTags.allTags.length}
                            >
                              {allTags.allTags.map((tag, index) => (
                                <option
                                  key={tag.id}
                                  value={tag.id}
                                  className="appearance-none block w-full bg-gray-300 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outlone-none focus:bg-white"
                                  onClick={() => {
                                    if (
                                      Object.values(values).includes(tag.id)
                                    ) {
                                      arrayHelpers.remove(index);
                                    } else {
                                      arrayHelpers.insert(index, tag.id);
                                    }
                                  }}
                                >
                                  {tag.name}
                                </option>
                              ))}
                            </select>
                            <p
                              className={`${errors.tagIds &&
                                !errors.tagIds.includes(null) &&
                                "text-red-500"} text-xs italic`}
                            >
                              Please Add Project Tag ID
                            </p>
                          </>
                        )}
                      </div>
                    )}
                  />
                )}
              </div>

              <div className="w-full mt-8">
                <div className="w-full">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="new-tag"
                  >
                    Tag Name
                  </label>
                  <input
                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.newTag &&
                      "border-red-500"} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                    id="new-tag"
                    type="text"
                    placeholder="Enter Tag Name"
                    name="newTag"
                    value={values.newTag}
                    onChange={handleChange}
                    disabled={addProjectLoading || isSubmitting}
                  />
                  <p
                    className={`${errors.newTag &&
                      "text-red-500"} text-xs italic`}
                  >
                    You Must Provide a New Tag Name
                  </p>
                </div>
              </div>

              <div className="w-full px-5 mt-8">
                <button
                  type="submit"
                  className="hover:cursor-pointer w-full text-center bg-black text-white font-bold rounded-lg border py-2 hover:bg-gray-900"
                  disabled={addProjectLoading || isSubmitting}
                >
                  Submit
                </button>
              </div>
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default AddProjectForm;
