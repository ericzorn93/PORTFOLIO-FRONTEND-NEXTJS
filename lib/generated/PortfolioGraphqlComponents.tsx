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
  deleteUser: User,
  updateUserRole: User,
  createProject?: Maybe<Project>,
  deleteProject: Project,
  createTag: Tag,
  updateTagWithProjects: Tag,
  deleteTag: Tag,
  /** Finds and deletes a single company, based on the provided User ID */
  deleteCompany: Company,
  registerUser: User,
  login: LoggedInUser,
};


export type MutationDeleteUserArgs = {
  emailAddress: Scalars['String']
};


export type MutationUpdateUserRoleArgs = {
  userRoleInput: UpdateUserRoleInput
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


export type MutationDeleteCompanyArgs = {
  companyId: Scalars['String']
};


export type MutationRegisterUserArgs = {
  registerData: RegisterUserInput
};


export type MutationLoginArgs = {
  emailAddress: Scalars['String']
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
  allTags: Array<Tag>,
  allThemes: CombinedTheme,
  /** 
 * Finds all companies and returns the array of all companies in the database,
   * with the provided relations in the company entity.
 */
  allCompanies: Array<Company>,
  /** Finds a single company, based on the company name as a string that is provided */
  findOneCompany: Company,
  allCompanyGenres: Array<CompanyGenre>,
  /** Queries the file system to find and then download the proper resume. */
  downloadResume: Scalars['Boolean'],
};


export type QueryFindUserArgs = {
  findUserInput: FindUserInput
};


export type QueryFindOneCompanyArgs = {
  companyName: Scalars['String']
};


export type QueryDownloadResumeArgs = {
  resumeName: Scalars['String']
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
  /** Concatonates the user's first and last name. */
  fullName: Scalars['String'],
};

export type AllProjectsQueryVariables = {};


export type AllProjectsQuery = (
  { __typename?: 'Query' }
  & { allProjects: Array<(
    { __typename?: 'Project' }
    & Pick<Project, 'id' | 'name'>
    & { tags: Maybe<Array<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'name'>
    )>> }
  )> }
);

export type AllTagsQueryVariables = {};


export type AllTagsQuery = (
  { __typename?: 'Query' }
  & { allTags: Array<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'id' | 'name'>
  )> }
);

export type ThemePartsFragment = (
  { __typename?: 'Theme' }
  & Pick<Theme, 'primary' | 'secondary' | 'alternate' | 'lightAlternate' | 'light' | 'black' | 'white'>
);

export type AllThemesQueryVariables = {};


export type AllThemesQuery = (
  { __typename?: 'Query' }
  & { allThemes: (
    { __typename?: 'CombinedTheme' }
    & { darkMode: (
      { __typename?: 'Theme' }
      & ThemePartsFragment
    ), lightMode: (
      { __typename?: 'Theme' }
      & ThemePartsFragment
    ) }
  ) }
);

export type UserPartsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'firstName' | 'lastName' | 'emailAddress'>
);

export type AllUsersQueryVariables = {};


export type AllUsersQuery = (
  { __typename?: 'Query' }
  & { allUsers: Array<(
    { __typename?: 'User' }
    & UserPartsFragment
  )> }
);

export const ThemePartsFragmentDoc = gql`
    fragment ThemeParts on Theme {
  primary
  secondary
  alternate
  lightAlternate
  light
  black
  white
}
    `;
export const UserPartsFragmentDoc = gql`
    fragment UserParts on User {
  id
  firstName
  lastName
  emailAddress
}
    `;
export const AllProjectsDocument = gql`
    query allProjects {
  allProjects {
    id
    name
    tags {
      id
      name
    }
  }
}
    `;
export type AllProjectsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllProjectsQuery, AllProjectsQueryVariables>, 'query'>;

    export const AllProjectsComponent = (props: AllProjectsComponentProps) => (
      <ApolloReactComponents.Query<AllProjectsQuery, AllProjectsQueryVariables> query={AllProjectsDocument} {...props} />
    );
    
export type AllProjectsProps<TChildProps = {}> = ApolloReactHoc.DataProps<AllProjectsQuery, AllProjectsQueryVariables> | TChildProps;
export function withAllProjects<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllProjectsQuery,
  AllProjectsQueryVariables,
  AllProjectsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, AllProjectsQuery, AllProjectsQueryVariables, AllProjectsProps<TChildProps>>(AllProjectsDocument, {
      alias: 'allProjects',
      ...operationOptions
    });
};

/**
 * __useAllProjectsQuery__
 *
 * To run a query within a React component, call `useAllProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllProjectsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllProjectsQuery, AllProjectsQueryVariables>) {
        return ApolloReactHooks.useQuery<AllProjectsQuery, AllProjectsQueryVariables>(AllProjectsDocument, baseOptions);
      }
export function useAllProjectsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllProjectsQuery, AllProjectsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllProjectsQuery, AllProjectsQueryVariables>(AllProjectsDocument, baseOptions);
        }
export type AllProjectsQueryHookResult = ReturnType<typeof useAllProjectsQuery>;
export type AllProjectsLazyQueryHookResult = ReturnType<typeof useAllProjectsLazyQuery>;
export type AllProjectsQueryResult = ApolloReactCommon.QueryResult<AllProjectsQuery, AllProjectsQueryVariables>;
export const AllTagsDocument = gql`
    query allTags {
  allTags {
    id
    name
  }
}
    `;
export type AllTagsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllTagsQuery, AllTagsQueryVariables>, 'query'>;

    export const AllTagsComponent = (props: AllTagsComponentProps) => (
      <ApolloReactComponents.Query<AllTagsQuery, AllTagsQueryVariables> query={AllTagsDocument} {...props} />
    );
    
export type AllTagsProps<TChildProps = {}> = ApolloReactHoc.DataProps<AllTagsQuery, AllTagsQueryVariables> | TChildProps;
export function withAllTags<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllTagsQuery,
  AllTagsQueryVariables,
  AllTagsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, AllTagsQuery, AllTagsQueryVariables, AllTagsProps<TChildProps>>(AllTagsDocument, {
      alias: 'allTags',
      ...operationOptions
    });
};

/**
 * __useAllTagsQuery__
 *
 * To run a query within a React component, call `useAllTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTagsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllTagsQuery, AllTagsQueryVariables>) {
        return ApolloReactHooks.useQuery<AllTagsQuery, AllTagsQueryVariables>(AllTagsDocument, baseOptions);
      }
export function useAllTagsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllTagsQuery, AllTagsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllTagsQuery, AllTagsQueryVariables>(AllTagsDocument, baseOptions);
        }
export type AllTagsQueryHookResult = ReturnType<typeof useAllTagsQuery>;
export type AllTagsLazyQueryHookResult = ReturnType<typeof useAllTagsLazyQuery>;
export type AllTagsQueryResult = ApolloReactCommon.QueryResult<AllTagsQuery, AllTagsQueryVariables>;
export const AllThemesDocument = gql`
    query allThemes {
  allThemes {
    darkMode {
      ...ThemeParts
    }
    lightMode {
      ...ThemeParts
    }
  }
}
    ${ThemePartsFragmentDoc}`;
export type AllThemesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllThemesQuery, AllThemesQueryVariables>, 'query'>;

    export const AllThemesComponent = (props: AllThemesComponentProps) => (
      <ApolloReactComponents.Query<AllThemesQuery, AllThemesQueryVariables> query={AllThemesDocument} {...props} />
    );
    
export type AllThemesProps<TChildProps = {}> = ApolloReactHoc.DataProps<AllThemesQuery, AllThemesQueryVariables> | TChildProps;
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

/**
 * __useAllThemesQuery__
 *
 * To run a query within a React component, call `useAllThemesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllThemesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllThemesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllThemesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllThemesQuery, AllThemesQueryVariables>) {
        return ApolloReactHooks.useQuery<AllThemesQuery, AllThemesQueryVariables>(AllThemesDocument, baseOptions);
      }
export function useAllThemesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllThemesQuery, AllThemesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllThemesQuery, AllThemesQueryVariables>(AllThemesDocument, baseOptions);
        }
export type AllThemesQueryHookResult = ReturnType<typeof useAllThemesQuery>;
export type AllThemesLazyQueryHookResult = ReturnType<typeof useAllThemesLazyQuery>;
export type AllThemesQueryResult = ApolloReactCommon.QueryResult<AllThemesQuery, AllThemesQueryVariables>;
export const AllUsersDocument = gql`
    query allUsers {
  allUsers {
    ...UserParts
  }
}
    ${UserPartsFragmentDoc}`;
export type AllUsersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllUsersQuery, AllUsersQueryVariables>, 'query'>;

    export const AllUsersComponent = (props: AllUsersComponentProps) => (
      <ApolloReactComponents.Query<AllUsersQuery, AllUsersQueryVariables> query={AllUsersDocument} {...props} />
    );
    
export type AllUsersProps<TChildProps = {}> = ApolloReactHoc.DataProps<AllUsersQuery, AllUsersQueryVariables> | TChildProps;
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

/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
        return ApolloReactHooks.useQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, baseOptions);
      }
export function useAllUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, baseOptions);
        }
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersLazyQueryHookResult = ReturnType<typeof useAllUsersLazyQuery>;
export type AllUsersQueryResult = ApolloReactCommon.QueryResult<AllUsersQuery, AllUsersQueryVariables>;