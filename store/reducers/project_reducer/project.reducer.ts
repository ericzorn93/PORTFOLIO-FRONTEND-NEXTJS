import { IAction } from "../../../shared/types/interfaces/redux/action.type";
import { Project as GithubProject } from "../../../lib/generated/GithubGraphqlComponents";
import { Project as PersonalProject } from "../../../lib/generated/PortfolioGraphqlComponents";

interface ProjectState {
  githubProjects: GithubProject[];
  personalProjects: PersonalProject[];
}

// Reducer Values
const initialState: ProjectState = {
  githubProjects: [],
  personalProjects: []
};

export const projectReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
