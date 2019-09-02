// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'; // @ts-ignore
/** @jsx jsx */
import { jsx } from '@emotion/core';
// eslint-disable-next-line no-unused-vars
import { Link, useStaticQuery, graphql } from 'gatsby';
import { useSelector, useDispatch } from 'react-redux';

import { ThemeNamesEnum } from '../../utils/primary_enums/theme.enum';
import { ThemeActions } from '../../store/actions/theme_actions';
import { ITheme } from '../../utils/primary_interfaces/theme.interface';
import { HeaderTitle, HeaderWrapper } from './styles/header.styles';

interface IHeaderProps {
  siteTitle?: string;
}

const Header = (props: IHeaderProps) => {
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
    // eslint-disable-next-line react/jsx-filename-extension
    <HeaderWrapper
      css={{ background: currentTheme.primary }}
      theme={currentTheme}
    >
      <HeaderTitle theme={currentTheme}>Eric Zorn Portfolio</HeaderTitle>
      <button onClick={handleButtonClick}>Toggle Theme</button>
    </HeaderWrapper>
  );
};

export default Header;
