import { withRouter } from "next/router";
import Link from "next/link";
import { useQuery } from "react-apollo-hooks";
import { useSelector, useDispatch } from "react-redux";

import { THEME_QUERY } from "../../apollo_setup/root_queries/theme.query";
import Loading from "../Loading";
import Error from "../Error";
import { LOAD_THEMES } from "../../store/types/theme.types";

const Header: React.FC = () => {
  /** Beginning State */
  const completeThemes = useSelector(
    (state: any) => state.themes.completeThemes
  );
  const selectedTheme = useSelector((state: any) => state.themes.selectedTheme);
  /** End State */

  /** Beginning Dispatchers */
  const dispatch = useDispatch();
  /** End Dispatchers */

  /** Beginning Apollo Queries &Mutations */
  const {
    data: themeData,
    error: themeError,
    loading: themeLoading
  } = useQuery(THEME_QUERY);
  /** End Apollo Queries & Mutations */

  if (themeError) {
    return <Error message="Could not upload themes" />;
  }

  if (themeLoading) {
    return <Loading />;
  }

  const { getAllThemes } = themeData;
  dispatch({
    type: LOAD_THEMES,
    payload: {
      lightMode: getAllThemes.lightMode,
      darkMode: getAllThemes.darkMode,
      completeThemes: getAllThemes,
      selectedTheme: selectedTheme || "darkMode"
    }
  });

  // dispatch(loadThemesAction(getAllThemes));

  return (
    <header>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </header>
  );
};

export default withRouter(Header);
