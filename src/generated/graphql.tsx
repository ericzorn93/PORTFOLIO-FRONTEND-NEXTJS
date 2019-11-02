import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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

export type Company = {
   __typename?: 'Company',
  id: Scalars['ID'],
  name: Scalars['String'],
  description: Scalars['String'],
  companyGenre: CompanyGenre,
  createdAt: Scalars['String'],
  updatedAt: Scalars['String'],
};

export type CompanyGenre = {
   __typename?: 'CompanyGenre',
  id: Scalars['ID'],
  genre: Scalars['String'],
  companies: Array<Company>,
  createdAt: Scalars['String'],
  updatedAt: Scalars['String'],
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
  allCompanies: Array<Company>,
  allCompanyGenres: Array<CompanyGenre>,
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
export type AllCompaniesQueryVariables = {};


export type AllCompaniesQuery = (
  { __typename?: 'Query' }
  & { allCompanies: Array<(
    { __typename?: 'Company' }
    & Pick<Company, 'id' | 'name'>
    & { companyGenre: (
      { __typename?: 'CompanyGenre' }
      & Pick<CompanyGenre, 'id' | 'genre'>
    ) }
  )> }
);

export type AllCompanyGenresQueryVariables = {};


export type AllCompanyGenresQuery = (
  { __typename?: 'Query' }
  & { allCompanyGenres: Array<(
    { __typename?: 'CompanyGenre' }
    & Pick<CompanyGenre, 'id' | 'genre'>
    & { companies: Array<(
      { __typename?: 'Company' }
      & Pick<Company, 'id' | 'name'>
    )> }
  )> }
);

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

export const AllCompaniesDocument = gql`
    query allCompanies {
  allCompanies {
    id
    name
    companyGenre {
      id
      genre
    }
  }
}
    `;
export type AllCompaniesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllCompaniesQuery, AllCompaniesQueryVariables>, 'query'>;

    export const AllCompaniesComponent = (props: AllCompaniesComponentProps) => (
      <ApolloReactComponents.Query<AllCompaniesQuery, AllCompaniesQueryVariables> query={AllCompaniesDocument} {...props} />
    );
    
export type AllCompaniesProps<TChildProps = {}> = ApolloReactHoc.DataProps<AllCompaniesQuery, AllCompaniesQueryVariables> & TChildProps;
export function withAllCompanies<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllCompaniesQuery,
  AllCompaniesQueryVariables,
  AllCompaniesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, AllCompaniesQuery, AllCompaniesQueryVariables, AllCompaniesProps<TChildProps>>(AllCompaniesDocument, {
      alias: 'allCompanies',
      ...operationOptions
    });
};

    export function useAllCompaniesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllCompaniesQuery, AllCompaniesQueryVariables>) {
      return ApolloReactHooks.useQuery<AllCompaniesQuery, AllCompaniesQueryVariables>(AllCompaniesDocument, baseOptions);
    }
      export function useAllCompaniesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllCompaniesQuery, AllCompaniesQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<AllCompaniesQuery, AllCompaniesQueryVariables>(AllCompaniesDocument, baseOptions);
      }
      
export type AllCompaniesQueryHookResult = ReturnType<typeof useAllCompaniesQuery>;
export type AllCompaniesQueryResult = ApolloReactCommon.QueryResult<AllCompaniesQuery, AllCompaniesQueryVariables>;
export const AllCompanyGenresDocument = gql`
    query allCompanyGenres {
  allCompanyGenres {
    id
    genre
    companies {
      id
      name
    }
  }
}
    `;
export type AllCompanyGenresComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllCompanyGenresQuery, AllCompanyGenresQueryVariables>, 'query'>;

    export const AllCompanyGenresComponent = (props: AllCompanyGenresComponentProps) => (
      <ApolloReactComponents.Query<AllCompanyGenresQuery, AllCompanyGenresQueryVariables> query={AllCompanyGenresDocument} {...props} />
    );
    
export type AllCompanyGenresProps<TChildProps = {}> = ApolloReactHoc.DataProps<AllCompanyGenresQuery, AllCompanyGenresQueryVariables> & TChildProps;
export function withAllCompanyGenres<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllCompanyGenresQuery,
  AllCompanyGenresQueryVariables,
  AllCompanyGenresProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, AllCompanyGenresQuery, AllCompanyGenresQueryVariables, AllCompanyGenresProps<TChildProps>>(AllCompanyGenresDocument, {
      alias: 'allCompanyGenres',
      ...operationOptions
    });
};

    export function useAllCompanyGenresQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllCompanyGenresQuery, AllCompanyGenresQueryVariables>) {
      return ApolloReactHooks.useQuery<AllCompanyGenresQuery, AllCompanyGenresQueryVariables>(AllCompanyGenresDocument, baseOptions);
    }
      export function useAllCompanyGenresLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllCompanyGenresQuery, AllCompanyGenresQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<AllCompanyGenresQuery, AllCompanyGenresQueryVariables>(AllCompanyGenresDocument, baseOptions);
      }
      
export type AllCompanyGenresQueryHookResult = ReturnType<typeof useAllCompanyGenresQuery>;
export type AllCompanyGenresQueryResult = ApolloReactCommon.QueryResult<AllCompanyGenresQuery, AllCompanyGenresQueryVariables>;
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
export type AllThemesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllThemesQuery, AllThemesQueryVariables>, 'query'>;

    export const AllThemesComponent = (props: AllThemesComponentProps) => (
      <ApolloReactComponents.Query<AllThemesQuery, AllThemesQueryVariables> query={AllThemesDocument} {...props} />
    );
    
export type AllThemesProps<TChildProps = {}> = ApolloReactHoc.DataProps<AllThemesQuery, AllThemesQueryVariables> & TChildProps;
export function withAllThemes<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllThemesQuery,
  AllThemesQueryVariables,
  AllThemesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, AllThemesQuery, AllThemesQueryVariables, AllThemesProps<TChildProps>>(AllThemesDocument, {
      alias: 'allThemes',
      ...operationOptions
    });
};

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
export type AllUsersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllUsersQuery, AllUsersQueryVariables>, 'query'>;

    export const AllUsersComponent = (props: AllUsersComponentProps) => (
      <ApolloReactComponents.Query<AllUsersQuery, AllUsersQueryVariables> query={AllUsersDocument} {...props} />
    );
    
export type AllUsersProps<TChildProps = {}> = ApolloReactHoc.DataProps<AllUsersQuery, AllUsersQueryVariables> & TChildProps;
export function withAllUsers<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllUsersQuery,
  AllUsersQueryVariables,
  AllUsersProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, AllUsersQuery, AllUsersQueryVariables, AllUsersProps<TChildProps>>(AllUsersDocument, {
      alias: 'allUsers',
      ...operationOptions
    });
};

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
export type DeleteUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteUserMutation, DeleteUserMutationVariables>, 'mutation'>;

    export const DeleteUserComponent = (props: DeleteUserComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteUserMutation, DeleteUserMutationVariables> mutation={DeleteUserDocument} {...props} />
    );
    
export type DeleteUserProps<TChildProps = {}> = ApolloReactHoc.MutateProps<DeleteUserMutation, DeleteUserMutationVariables> & TChildProps;
export function withDeleteUser<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteUserMutation,
  DeleteUserMutationVariables,
  DeleteUserProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteUserMutation, DeleteUserMutationVariables, DeleteUserProps<TChildProps>>(DeleteUserDocument, {
      alias: 'deleteUser',
      ...operationOptions
    });
};

    export function useDeleteUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
      return ApolloReactHooks.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, baseOptions);
    }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = ApolloReactCommon.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;