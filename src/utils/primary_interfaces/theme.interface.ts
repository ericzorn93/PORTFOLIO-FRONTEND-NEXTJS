export interface ITheme {
  primary?: string;
  secondary?: string;
  alternate?: string;
  light?: string;
  lightAlternate?: string;
  black?: string;
  white?: string;
}

export interface ICombinedTheme {
  darkMode: ITheme;
  lightMode: ITheme;
}
