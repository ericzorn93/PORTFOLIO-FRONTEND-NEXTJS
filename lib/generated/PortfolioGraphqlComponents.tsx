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
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any,
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


export type Email = {
   __typename?: 'Email',
  id: Scalars['ID'],
  overallCount: Scalars['Int'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type FindUserInput = {
  id?: Maybe<Scalars['String']>,
  emailAddress?: Maybe<Scalars['String']>,
};

export type InitializeEmailInput = {
  initializeCount: Scalars['Int'],
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
  /** Creates a proejct with the associated values. */
  createProject?: Maybe<Project>,
  /** Deletes a single project from the project ID passed in */
  deleteProject: Project,
  createTag: Tag,
  updateTagWithProjects: Tag,
  deleteTag: Tag,
  /** Finds and deletes a single company, based on the provided User ID */
  deleteCompany: Company,
  registerUser: User,
  login: LoggedInUser,
  /** Sends a person an email to their email address, via Sendgrid or Node Mailer. */
  sendUserEmail: Scalars['Boolean'],
  /** Initializes the email count in the emails table. */
  initializeEmail: Scalars['Int'],
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


export type MutationSendUserEmailArgs = {
  emailAddress: Scalars['String']
};


export type MutationInitializeEmailArgs = {
  initializeEmailInput: InitializeEmailInput
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
  /** Finds an array of all projects with their associated relations. */
  allProjects: Array<Project>,
  /** Finds an individual project by the project ID passed. */
  findOneProjectById: Project,
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


export type QueryFindOneProjectByIdArgs = {
  projectId: Scalars['String']
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

export type ProjectPartsFragment = (
  { __typename?: 'Project' }
  & Pick<Project, 'id' | 'name' | 'description' | 'createdAt' | 'updatedAt'>
  & { tags: Maybe<Array<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'id' | 'name'>
  )>> }
);

export type AllProjectsQueryVariables = {};


export type AllProjectsQuery = (
  { __typename?: 'Query' }
  & { allProjects: Array<(
    { __typename?: 'Project' }
    & ProjectPartsFragment
  )> }
);

export type FindOneProjectByIdQueryVariables = {
  projectId: Scalars['String']
};


export type FindOneProjectByIdQuery = (
  { __typename?: 'Query' }
  & { findOneProjectById: (
    { __typename?: 'Project' }
    & ProjectPartsFragment
  ) }
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

export const ProjectPartsFragmentDoc = gql`
    fragment ProjectParts on Project {
  id
  name
  description
  tags {
    id
    name
  }
  createdAt
  updatedAt
}
    `;
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
    ...ProjectParts
  }
}
    ${ProjectPartsFragmentDoc}`;
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
export const FindOneProjectByIdDocument = gql`
    query findOneProjectById($projectId: String!) {
  findOneProjectById(projectId: $projectId) {
    ...ProjectParts
  }
}
    ${ProjectPartsFragmentDoc}`;
export type FindOneProjectByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FindOneProjectByIdQuery, FindOneProjectByIdQueryVariables>, 'query'> & ({ variables: FindOneProjectByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const FindOneProjectByIdComponent = (props: FindOneProjectByIdComponentProps) => (
      <ApolloReactComponents.Query<FindOneProjectByIdQuery, FindOneProjectByIdQueryVariables> query={FindOneProjectByIdDocument} {...props} />
    );
    
export type FindOneProjectByIdProps<TChildProps = {}> = ApolloReactHoc.DataProps<FindOneProjectByIdQuery, FindOneProjectByIdQueryVariables> | TChildProps;
export function withFindOneProjectById<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  FindOneProjectByIdQuery,
  FindOneProjectByIdQueryVariables,
  FindOneProjectByIdProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, FindOneProjectByIdQuery, FindOneProjectByIdQueryVariables, FindOneProjectByIdProps<TChildProps>>(FindOneProjectByIdDocument, {
      alias: 'findOneProjectById',
      ...operationOptions
    });
};

/**
 * __useFindOneProjectByIdQuery__
 *
 * To run a query within a React component, call `useFindOneProjectByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneProjectByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneProjectByIdQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useFindOneProjectByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindOneProjectByIdQuery, FindOneProjectByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<FindOneProjectByIdQuery, FindOneProjectByIdQueryVariables>(FindOneProjectByIdDocument, baseOptions);
      }
export function useFindOneProjectByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneProjectByIdQuery, FindOneProjectByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindOneProjectByIdQuery, FindOneProjectByIdQueryVariables>(FindOneProjectByIdDocument, baseOptions);
        }
export type FindOneProjectByIdQueryHookResult = ReturnType<typeof useFindOneProjectByIdQuery>;
export type FindOneProjectByIdLazyQueryHookResult = ReturnType<typeof useFindOneProjectByIdLazyQuery>;
export type FindOneProjectByIdQueryResult = ApolloReactCommon.QueryResult<FindOneProjectByIdQuery, FindOneProjectByIdQueryVariables>;
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