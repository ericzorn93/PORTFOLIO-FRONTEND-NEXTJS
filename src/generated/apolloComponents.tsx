import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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

export type FindUserInput = {
  id?: Maybe<Scalars["String"]>;
  emailAddress?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  registerUser: User;
  deleteUser: User;
  updateUserRole: User;
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

export type Query = {
  __typename?: "Query";
  getAllUsers: Array<User>;
  findUser: User;
  getAllThemes: CombinedTheme;
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
  createdAt: Scalars["String"];
  updatedAt: Scalars["String"];
};
export type GetAllThemesQueryVariables = {};

export type GetAllThemesQuery = { __typename?: "Query" } & {
  getAllThemes: { __typename?: "CombinedTheme" } & {
    darkMode: { __typename?: "Theme" } & Pick<
      Theme,
      | "primary"
      | "secondary"
      | "alternate"
      | "lightAlternate"
      | "light"
      | "black"
      | "white"
    >;
    lightMode: { __typename?: "Theme" } & Pick<
      Theme,
      | "primary"
      | "secondary"
      | "alternate"
      | "lightAlternate"
      | "light"
      | "black"
      | "white"
    >;
  };
};

export const GetAllThemesDocument = gql`
  query getAllThemes {
    getAllThemes {
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
export type GetAllThemesComponentProps = Omit<
  ReactApollo.QueryProps<GetAllThemesQuery, GetAllThemesQueryVariables>,
  "query"
>;

export const GetAllThemesComponent = (props: GetAllThemesComponentProps) => (
  <ReactApollo.Query<GetAllThemesQuery, GetAllThemesQueryVariables>
    query={GetAllThemesDocument}
    {...props}
  />
);

export type GetAllThemesProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<GetAllThemesQuery, GetAllThemesQueryVariables>
> &
  TChildProps;
export function withGetAllThemes<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    GetAllThemesQuery,
    GetAllThemesQueryVariables,
    GetAllThemesProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    GetAllThemesQuery,
    GetAllThemesQueryVariables,
    GetAllThemesProps<TChildProps>
  >(GetAllThemesDocument, {
    alias: "withGetAllThemes",
    ...operationOptions
  });
}
