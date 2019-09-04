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
    <HeaderWrapper theme={currentTheme}>
      <HeaderTitle theme={currentTheme}>
        <Link to="/">Eric Zorn | Full-Stack Engineer</Link>
      </HeaderTitle>
      <ul>
        <li>
          <button onClick={handleButtonClick}>Toggle Theme</button>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
        </li>

        <li>
          <a href="https://github.com/ericzorn93" target="_blank">
            GitHub Profile
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ericzorn/" target="_blank">
            LinkedIn Profile
          </a>
        </li>
        <li>
          <a href="https://twitter.com/zornwebdev" target="_blank">
            Twitter Profile
          </a>
        </li>
      </ul>
    </HeaderWrapper>
  );
};

export default Header;
