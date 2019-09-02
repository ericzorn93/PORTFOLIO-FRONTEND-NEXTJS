import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const allThemesQuery = gql`
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
