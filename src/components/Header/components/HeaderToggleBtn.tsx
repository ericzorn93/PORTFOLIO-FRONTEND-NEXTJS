import React from 'react'; // ts-ignore
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useSelector, useDispatch } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';

import { MenuBarActions } from '../../../store/actions/menu_bar_actions';

interface IHeaderToggleBtnProps {
  optionalStyles?: object;
}

const HeaderToggleBtn = (props: IHeaderToggleBtnProps) => {
  const { optionalStyles = {} } = props;

  /** Beginning of Redux Selectors */
  const dispatch = useDispatch();

  const isMenuBarOpen = useSelector((state: any) => state.menuBar.isOpen);
  /** End of Redux Selectors */

  /** Beginning of Methods */
  const toggleMenuBarOpen = (): void => {
    if (isMenuBarOpen) {
      dispatch(MenuBarActions.toggleMenuBarOpenAction(false));
    } else {
      dispatch(MenuBarActions.toggleMenuBarOpenAction(true));
    }
  };
  /** End of Methods */
  return (
    <React.Fragment>
      <button onClick={toggleMenuBarOpen} css={{ ...optionalStyles }}>
        <GiHamburgerMenu />
      </button>
    </React.Fragment>
  );
};

export default HeaderToggleBtn;
