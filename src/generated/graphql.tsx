import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type CombinedTheme = {
   __typename?: 'CombinedTheme',
  darkMode: Theme,
  lightMode: Theme,
};

export type CreateProjectInput = {
  name: Scalars['String'],
  description: Scalars['String'],
  userId: Scalars['String'],
  tagIds?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FindUserInput = {
  id?: Maybe<Scalars['String']>,
  emailAddress?: Maybe<Scalars['String']>,
};

export type LoggedInUser = {
   __typename?: 'LoggedInUser',
  user?: Maybe<User>,
  jwt?: Maybe<Scalars['String']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  registerUser: User,
  deleteUser: User,
  updateUserRole: User,
  login: LoggedInUser,
  createProject: Project,
  deleteProject: Project,
  createTag?: Maybe<Tag>,
  updateTagWithProjects: Tag,
  deleteTag: Tag,
};


export type MutationRegisterUserArgs = {
  registerData: RegisterUserInput
};


export type MutationDeleteUserArgs = {
  emailAddress: Scalars['String']
};


export type MutationUpdateUserRoleArgs = {
  userRoleInput: UpdateUserRoleInput
};


export type MutationLoginArgs = {
  emailAddress: Scalars['String']
};


export type MutationCreateProjectArgs = {
  createProjectInput: CreateProjectInput
};


export type MutationDeleteProjectArgs = {
  projectId: Scalars['String']
};


export type MutationCreateTagArgs = {
  tagInput: TagInput
};


export type MutationUpdateTagWithProjectsArgs = {
  updateTagProjectsInput: UpdateTagProjectsInput
};


export type MutationDeleteTagArgs = {
  tagId: Scalars['String']
};

export type Project = {
   __typename?: 'Project',
  id: Scalars['ID'],
  name: Scalars['String'],
  description: Scalars['String'],
  user?: Maybe<User>,
  tags?: Maybe<Array<Tag>>,
  createdAt: Scalars['String'],
  updatedAt: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  allUsers: Array<User>,
  findUser: User,
  allProjects: Array<Project>,
  allThemes: CombinedTheme,
  allTags: Array<Tag>,
};


export type QueryFindUserArgs = {
  findUserInput: FindUserInput
};

export type RegisterUserInput = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  emailAddress: Scalars['String'],
  phoneNumber: Scalars['String'],
  role?: Maybe<Scalars['String']>,
};

export type Tag = {
   __typename?: 'Tag',
  id: Scalars['ID'],
  name: Scalars['String'],
  projects?: Maybe<Array<Project>>,
  createdAt: Scalars['String'],
  updatedAt: Scalars['String'],
};

export type TagInput = {
  name: Scalars['String'],
  projectIds: Array<Scalars['String']>,
};

export type Theme = {
   __typename?: 'Theme',
  primary: Scalars['String'],
  secondary: Scalars['String'],
  alternate: Scalars['String'],
  lightAlternate: Scalars['String'],
  light: Scalars['String'],
  black: Scalars['String'],
  white: Scalars['String'],
};

export type UpdateTagProjectsInput = {
  tagId: Scalars['String'],
  projectIds: Array<Scalars['String']>,
};

export type UpdateUserRoleInput = {
  emailAddress: Scalars['String'],
  role: Scalars['String'],
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  emailAddress: Scalars['String'],
  phoneNumber: Scalars['String'],
  role: Scalars['String'],
  projects: Array<Project>,
  createdAt: Scalars['String'],
  updatedAt: Scalars['String'],
};
export type AllThemesQueryVariables = {};


export type AllThemesQuery = (
  { __typename?: 'Query' }
  & { allThemes: (
    { __typename?: 'CombinedTheme' }
    & { darkMode: (
      { __typename?: 'Theme' }
      & Pick<Theme, 'primary' | 'secondary' | 'alternate' | 'lightAlternate' | 'light' | 'black' | 'white'>
    ), lightMode: (
      { __typename?: 'Theme' }
      & Pick<Theme, 'primary' | 'secondary' | 'alternate' | 'lightAlternate' | 'light' | 'black' | 'white'>
    ) }
  ) }
);

export type AllUsersQueryVariables = {};


export type AllUsersQuery = (
  { __typename?: 'Query' }
  & { allUsers: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'emailAddress'>
    & { projects: Array<(
      { __typename?: 'Project' }
      & Pick<Project, 'id' | 'name'>
    )> }
  )> }
);

export type DeleteUserMutationVariables = {
  emailAddress: Scalars['String']
};


export type DeleteUserMutation = (
  { __typename?: 'Mutation' }
  & { deleteUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'emailAddress'>
  ) }
);

export const AllThemesDocument = gql`
    query allThemes {
  allThemes {
    darkMode {
      primary
      secondary
      alternate
      lightAlternate
      light
      black
      white
    }
    lightMode {
      primary
      secondary
      alternate
      lightAlternate
      light
      black
      white
    }
  }
}
    `;

    export function useAllThemesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllThemesQuery, AllThemesQueryVariables>) {
      return ApolloReactHooks.useQuery<AllThemesQuery, AllThemesQueryVariables>(AllThemesDocument, baseOptions);
    }
      export function useAllThemesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllThemesQuery, AllThemesQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<AllThemesQuery, AllThemesQueryVariables>(AllThemesDocument, baseOptions);
      }
      
export type AllThemesQueryHookResult = ReturnType<typeof useAllThemesQuery>;
export type AllThemesQueryResult = ApolloReactCommon.QueryResult<AllThemesQuery, AllThemesQueryVariables>;
export const AllUsersDocument = gql`
    query allUsers {
  allUsers {
    id
    firstName
    lastName
    emailAddress
    projects {
      id
      name
    }
  }
}
    `;

    export function useAllUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
      return ApolloReactHooks.useQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, baseOptions);
    }
      export function useAllUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, baseOptions);
      }
      
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersQueryResult = ApolloReactCommon.QueryResult<AllUsersQuery, AllUsersQueryVariables>;
export const DeleteUserDocument = gql`
    mutation deleteUser($emailAddress: String!) {
  deleteUser(emailAddress: $emailAddress) {
    id
    firstName
    lastName
    emailAddress
  }
}
    `;
export type DeleteUserMutationFn = ApolloReactCommon.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

    export function useDeleteUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
      return ApolloReactHooks.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, baseOptions);
    }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = ApolloReactCommon.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;