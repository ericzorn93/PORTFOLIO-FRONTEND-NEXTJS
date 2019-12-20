import { IAction } from "../../../shared/types/interfaces/redux/action.type";
import { Project as PersonalProject } from "../../../lib/generated/PortfolioGraphqlComponents";
import { ADD_GITHUB_PROJECTS } from "../../types/project_types/project.types";

interface ProjectState {
  githubProjects: any[];
  personalProjects: PersonalProject[];
}

// Reducer Values
const initialState: ProjectState = {
  githubProjects: [],
  personalProjects: []
};

export const projectReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ADD_GITHUB_PROJECTS:
      return {
        ...state,
        githubProjects: action.payload
      };

    default:
      return state;
  }
};
