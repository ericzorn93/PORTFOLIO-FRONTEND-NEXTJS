export type Maybe<T> = T | null;

export interface FindUserInput {
  id?: Maybe<string>;

  emailAddress?: Maybe<string>;
}

export interface RegisterUserInput {
  firstName: string;

  lastName: string;

  emailAddress: string;

  phoneNumber: string;

  role?: Maybe<string>;
}

export interface UpdateUserRoleInput {
  emailAddress: string;

  role: string;
}

export interface CreateProjectInput {
  name: string;

  description: string;

  userId: string;

  tagIds?: Maybe<(Maybe<string>)[]>;
}

export interface TagInput {
  name: string;

  projectIds: string[];
}

export interface UpdateTagProjectsInput {
  tagId: string;

  projectIds: string[];
}

// ====================================================
// Documents
// ====================================================

export namespace GetAllThemes {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    allThemes: AllThemes;
  };

  export type AllThemes = {
    __typename?: 'CombinedTheme';

    darkMode: DarkMode;

    lightMode: LightMode;
  };

  export type DarkMode = {
    __typename?: 'Theme';

    primary: string;

    secondary: string;

    alternate: string;

    lightAlternate: string;

    light: string;

    black: string;

    white: string;
  };

  export type LightMode = {
    __typename?: 'Theme';

    primary: string;

    secondary: string;

    alternate: string;

    lightAlternate: string;

    light: string;

    black: string;

    white: string;
  };
}

import gql from 'graphql-tag';
import * as React from 'react';
import * as ReactApollo from 'react-apollo';

// ====================================================
// Components
// ====================================================

export namespace GetAllThemes {
  export const Document = gql`
    query getAllThemes {
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
  export class Component extends React.Component<
    Partial<ReactApollo.QueryProps<Query, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Query<Query, Variables>
          query={Document}
          {...((this as any)['props'] as any)}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.DataProps<Query, Variables>
  > &
    TChildProps;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Query,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Query, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
