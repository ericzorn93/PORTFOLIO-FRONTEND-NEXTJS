// eslint-disable-next-line no-unused-vars
import React from 'react'; // @ts-ignore
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';
import { useSelector, useDispatch } from 'react-redux';
import { FaGithub, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { IoIosContact, IoIosPaper, IoIosLaptop } from 'react-icons/io';
import { MdWbSunny } from 'react-icons/md';
import { TiHome } from 'react-icons/ti';

import { ThemeNamesEnum } from '../../utils/primary_enums/theme.enum';
import HeaderToggleBtn from './components/HeaderToggleBtn';
import { ThemeActions } from '../../store/actions/theme_actions';
import { ITheme } from '../../utils/primary_interfaces/theme.interface';
import { HeaderWrapper, NavList } from './styles/header.styles';

const Header: React.FC = () => {
  /** Beginning of Redux */
  const dispatch = useDispatch();
  const currentTheme: ITheme = useSelector(
    (state: any) => state.themes.currentTheme,
  );
  const currentThemeName: ThemeNamesEnum = useSelector(
    (state: any) => state.themes.currentThemeName,
  );

  const isMenuBarOpen: boolean = useSelector(
    (state: any) => state.menuBar.isOpen,
  );
  /** End of Redux */

  /** Beginning of Methods */
  const toggleTheme = (): void => {
    switch (currentThemeName) {
      case ThemeNamesEnum.darkMode:
        dispatch(
          ThemeActions.updateCurrentThemeAction(ThemeNamesEnum.lightMode),
        );
        break;
      case ThemeNamesEnum.lightMode:
        dispatch(
          ThemeActions.updateCurrentThemeAction(ThemeNamesEnum.darkMode),
        );
        break;
      default:
        dispatch(
          ThemeActions.updateCurrentThemeAction(ThemeNamesEnum.darkMode),
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
    outline: 'none',
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
              <Link to="/">
                <TiHome />
              </Link>
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
              <a href="https://github.com/ericzorn93">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ericzorn/">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/zornwebdev">
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
