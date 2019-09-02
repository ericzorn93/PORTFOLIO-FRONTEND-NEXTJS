export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CombinedTheme = {
  __typename?: "CombinedTheme";
  darkMode: Theme;
  lightMode: Theme;
};

export type CreateProjectInput = {
  name: Scalars["String"];
  description: Scalars["String"];
  userId: Scalars["String"];
  tagIds?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type FindUserInput = {
  id?: Maybe<Scalars["String"]>;
  emailAddress?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  registerUser: User;
  deleteUser: User;
  updateUserRole: User;
  createProject: Project;
  deleteProject: Project;
  createTag?: Maybe<Tag>;
  updateTagWithProjects: Tag;
  deleteTag: Tag;
};

export type MutationRegisterUserArgs = {
  registerData: RegisterUserInput;
};

export type MutationDeleteUserArgs = {
  emailAddress: Scalars["String"];
};

export type MutationUpdateUserRoleArgs = {
  userRoleInput: UpdateUserRoleInput;
};

export type MutationCreateProjectArgs = {
  createProjectInput: CreateProjectInput;
};

export type MutationDeleteProjectArgs = {
  projectId: Scalars["String"];
};

export type MutationCreateTagArgs = {
  tagInput: TagInput;
};

export type MutationUpdateTagWithProjectsArgs = {
  updateTagProjectsInput: UpdateTagProjectsInput;
};

export type MutationDeleteTagArgs = {
  tagId: Scalars["String"];
};

export type Project = {
  __typename?: "Project";
  id: Scalars["ID"];
  name: Scalars["String"];
  description: Scalars["String"];
  user?: Maybe<User>;
  tags?: Maybe<Array<Tag>>;
  createdAt: Scalars["String"];
  updatedAt: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  allUsers: Array<User>;
  findUser: User;
  allProjects: Array<Project>;
  allThemes: CombinedTheme;
  allTags: Array<Tag>;
};

export type QueryFindUserArgs = {
  findUserInput: FindUserInput;
};

export type RegisterUserInput = {
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  emailAddress: Scalars["String"];
  phoneNumber: Scalars["String"];
  role?: Maybe<Scalars["String"]>;
};

export type Tag = {
  __typename?: "Tag";
  id: Scalars["ID"];
  name: Scalars["String"];
  projects?: Maybe<Array<Project>>;
  createdAt: Scalars["String"];
  updatedAt: Scalars["String"];
};

export type TagInput = {
  name: Scalars["String"];
  projectIds: Array<Scalars["String"]>;
};

export type Theme = {
  __typename?: "Theme";
  primary: Scalars["String"];
  secondary: Scalars["String"];
  alternate: Scalars["String"];
  lightAlternate: Scalars["String"];
  light: Scalars["String"];
  black: Scalars["String"];
  white: Scalars["String"];
};

export type UpdateTagProjectsInput = {
  tagId: Scalars["String"];
  projectIds: Array<Scalars["String"]>;
};

export type UpdateUserRoleInput = {
  emailAddress: Scalars["String"];
  role: Scalars["String"];
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  emailAddress: Scalars["String"];
  phoneNumber: Scalars["String"];
  role: Scalars["String"];
  projects: Array<Project>;
  createdAt: Scalars["String"];
  updatedAt: Scalars["String"];
};
