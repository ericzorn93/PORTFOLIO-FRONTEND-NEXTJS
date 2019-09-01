import React, { useState, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { useDispatch } from "react-redux";

import { ThemeNamesEnum } from "../utils/primary_enums/theme.enum";
import { ThemeActions } from "../store/actions/theme_actions";

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
  /** End of Redux */

  /** Beginning of State */
  const [currentTheme, setCurrentTheme] = useState(ThemeNamesEnum.darkMode);
  /** End of State */

  /** Beginning of Side Effects */
  useEffect(() => {
    dispatch(
      ThemeActions.addAllThemeDataAction(themeData.zornwebdev.allThemes)
    );
  }, []);
  /** End of Side Effecs */

  const handleButtonClick = () => {
    switch (currentTheme) {
      case ThemeNamesEnum.darkMode:
        setCurrentTheme(ThemeNamesEnum.lightMode);
        break;
      case ThemeNamesEnum.lightMode:
        setCurrentTheme(ThemeNamesEnum.darkMode);
        break;
      default:
        setCurrentTheme(ThemeNamesEnum.darkMode);
        break;
    }
  };

  return (
    <header
      style={{
        background: themeData.zornwebdev.allThemes[currentTheme].primary,
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
