import { Fragment } from "react";
import { useQuery } from "react-apollo-hooks";
import { useSelector, useDispatch } from "react-redux";
import Head from "next/head";

import Header from "../Header";
import { THEME_QUERY } from "../../graphql/theme/queries/theme.query";
import Loading from "../Loading";
import Error from "../Error";
import { loadThemesAction } from "../../store/actions/theme.actions";

interface LayoutProps {
  title?: string;
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
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

  if (!Object.values(selectedTheme).length) {
    const { getAllThemes } = themeData;
    dispatch(loadThemesAction(getAllThemes, selectedTheme));
  }

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{title || "Eric Zorn Portfolio"}</title>
        <style>
          {`
            * {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
              font-family: sans-serif;
            }
            html {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
              font-family: sans-serif;
            }
            body {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
              font-family: sans-serif;
            }
          `}
        </style>
      </Head>
      <main>
        <Header />
        {children}
      </main>
    </Fragment>
  );
};

export default Layout;
