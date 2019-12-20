import { ADD_GITHUB_PROJECTS } from "../../types/project_types/project.types";
import { GithubRepositoriesQuery } from "../../../lib/generated/GithubGraphqlComponents";

/**
 * @description
 * Adds Github projects to the redux store
 * @param {GithubProject[]} githubProjects
 */
export const addGithubProjectsAction = (data: GithubRepositoriesQuery) => (
  dispatch: Function
) => {
  const {
    viewer: {
      repositories: { nodes }
    }
  } = data;

  dispatch({
    type: ADD_GITHUB_PROJECTS,
    payload: nodes
  });
};
