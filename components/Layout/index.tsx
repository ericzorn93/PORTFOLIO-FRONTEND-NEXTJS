import { useQuery } from "react-apollo-hooks";
import { useSelector, useDispatch, connect } from "react-redux";

import Header from "../Header";
import { THEME_QUERY } from "../../graphql/theme/queries/theme.query";
import Loading from "../Loading";
import Error from "../Error";
import { loadThemesAction } from "../../store/actions/theme.actions";

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  /** Beginning State */
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
  dispatch(loadThemesAction(getAllThemes, selectedTheme));

  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default Layout;
