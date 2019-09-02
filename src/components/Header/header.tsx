// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react"; // @ts-ignore
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link, useStaticQuery, graphql } from "gatsby";
import { useSelector, useDispatch } from "react-redux";

import { ThemeNamesEnum } from "../../utils/primary_enums/theme.enum";
import { ThemeActions } from "../../store/actions/theme_actions";
import { ITheme } from "../../utils/primary_interfaces/theme.interface";
import { HeaderTitle, HeaderWrapper } from "./styles/header.styles";
import SEO from "../SEO/seo";

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
  /** End of Side Effects */

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
    <HeaderWrapper
      css={{
        background:
          currentTheme.primary ||
          themeData.zornwebdev.allThemes.darkMode.primary
      }}
    >
      <SEO title={"Eric Zorn Portfolio" || siteTitle} />
      <HeaderTitle theme={currentTheme}>Eric Zorn Portfolio</HeaderTitle>
    </HeaderWrapper>
  );
};

export default Header;
