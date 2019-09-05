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

import { ThemeNamesEnum } from '../../utils/primary_enums/theme.enum';
import HeaderToggleBtn from './components/HeaderToggleBtn';
import { ThemeActions } from '../../store/actions/theme_actions';
import { ITheme } from '../../utils/primary_interfaces/theme.interface';
import { HeaderWrapper, NavList } from './styles/header.styles';

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

  /** Beginning of Animations and Styles */
  const menuAnimationProps = useSpring({
    transform: `translateX(${isMenuBarOpen ? 0 : -200}px)`,
  });

  const menuButtonAnimationProps = useSpring({
    opacity: isMenuBarOpen ? 0 : 1,
  });

  const optionalMenuBarStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '2rem',
    color: currentTheme.primary,
    '&:hover': {
      color: currentTheme.secondary,
    },
  };
  /** End of Animations and Styles */

  return (
    <React.Fragment>
      <animated.div style={{ ...menuAnimationProps }}>
        <HeaderWrapper theme={currentTheme}>
          <NavList theme={currentTheme}>
            <li>
              <HeaderToggleBtn />
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
      </animated.div>

      <animated.div
        style={{
          position: 'absolute',
          left: 20,
          top: 20,
          ...menuButtonAnimationProps,
        }}
      >
        <HeaderToggleBtn optionalStyles={optionalMenuBarStyles} />
      </animated.div>
    </React.Fragment>
  );
};

export default Header;
