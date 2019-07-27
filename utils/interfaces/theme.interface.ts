export interface ITheme {
  primary: string;
  alternate: string;
  black: string;
  lightAlternate: string;
  light: string;
  white: string;
  secondary: string;
  __typename: string;
}

export interface IThemes {
  lightMode: ITheme;
  darkMode: ITheme;
  __typename: string;
}
