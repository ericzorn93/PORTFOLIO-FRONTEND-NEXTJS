import React, { useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { useSelector, useDispatch } from "react-redux";

import { ThemeNamesEnum } from "../utils/primary_enums/theme.enum";
import { ThemeActions } from "../store/actions/theme_actions";
import { ITheme } from "../utils/primary_interfaces/theme.interface";

interface IHeaderProps {
  siteTitle: string;
}

const Header = (props: IHeaderProps) => {
  const { siteTitle = "" } = props;

  const themeData = useStaticQuery(graphql`
    query allThemesQuery {
      zornwebdev {
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
    }
  `);

  /** Beginning of Redux */
  const dispatch = useDispatch();
  const currentTheme: ITheme = useSelector(
    (state: any) => state.themes.currentTheme
  );
  const currentThemeName: ThemeNamesEnum = useSelector(
    (state: any) => state.themes.currentThemeName
  );
  /** End of Redux */

  /** Beginning of Side Effects */
  useEffect(() => {
    dispatch(
      ThemeActions.addAllThemeDataAction(themeData.zornwebdev.allThemes)
    );
  }, []);
  /** End of Side Effecs */

  const handleButtonClick = () => {
    switch (currentThemeName) {
      case ThemeNamesEnum.darkMode:
        dispatch(
          ThemeActions.updateCurrentThemeAction(ThemeNamesEnum.lightMode)
        );
        break;
      case ThemeNamesEnum.lightMode:
        dispatch(
          ThemeActions.updateCurrentThemeAction(ThemeNamesEnum.darkMode)
        );
        break;
      default:
        dispatch(
          ThemeActions.updateCurrentThemeAction(ThemeNamesEnum.darkMode)
        );
        break;
    }
  };

  return (
    <header
      style={{
        background:
          currentTheme.primary ||
          themeData.zornwebdev.allThemes.darkMode.primary,
        marginBottom: `1.45rem`
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <button onClick={handleButtonClick}>Toggle Theme</button>
      </div>
    </header>
  );
};

export default Header;
