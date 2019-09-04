// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'; // @ts-ignore
/** @jsx jsx */
import { jsx } from '@emotion/core';
// eslint-disable-next-line no-unused-vars
import { Link, useStaticQuery, graphql } from 'gatsby';
import { animated, useSpring } from 'react-spring';
import { useSelector, useDispatch } from 'react-redux';
import { FaGithub, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { IoIosContact, IoIosPaper, IoIosLaptop } from 'react-icons/io';
import { MdWbSunny } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';

import { ThemeNamesEnum } from '../../utils/primary_enums/theme.enum';
import { ThemeActions } from '../../store/actions/theme_actions';
import { MenuBarActions } from '../../store/actions/menu_bar_actions';
import { ITheme } from '../../utils/primary_interfaces/theme.interface';
import { HeaderTitle, HeaderWrapper, NavList } from './styles/header.styles';

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

  const isMenuBarOpen: boolean = useSelector(
    (state: any) => state.menuBar.isOpen
  );
  /** End of Redux */

  /** Beginning of Side Effects */
  useEffect(() => {
    dispatch(
      ThemeActions.addAllThemeDataAction(themeData.zornwebdev.allThemes)
    );
  }, []);
  /** End of Side Effects */

  /** Beginning of Methods */
  const toggleMenuBarOpen = (): void => {
    if (isMenuBarOpen) {
      dispatch(MenuBarActions.toggleMenuBarOpenAction(false));
    } else {
      dispatch(MenuBarActions.toggleMenuBarOpenAction(true));
    }
  };

  const toggleTheme = (): void => {
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
  /** End of Methods */

  /** Beginning of Animations */
  const menuAnimationProps = useSpring({
    opacity: 1,
    tranform: 'translateX(0px)',
    from: {
      transform: 'translateX(-200px)',
      opacity: 0,
    },
  });
  /** End of Animations */

  return (
    <HeaderWrapper theme={currentTheme}>
      <HeaderTitle theme={currentTheme}>
        <Link to="/">Eric Zorn | Full-Stack Engineer</Link>
      </HeaderTitle>

      <NavList theme={currentTheme}>
        <li>
          <button onClick={toggleMenuBarOpen}>
            <GiHamburgerMenu />
          </button>
        </li>
        <li>
          <button onClick={toggleTheme}>
            <MdWbSunny />
          </button>
        </li>
        <li>
          <Link to="/projects">
            <IoIosLaptop />
          </Link>
        </li>
        <li>
          <Link to="/blog">
            <IoIosPaper />
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <IoIosContact />
          </Link>
        </li>

        <li>
          <a href="https://github.com/ericzorn93" target="_blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ericzorn/" target="_blank">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/zornwebdev" target="_blank">
            <FaTwitterSquare />
          </a>
        </li>
      </NavList>
    </HeaderWrapper>
  );
};

export default Header;
