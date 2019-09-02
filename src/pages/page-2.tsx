import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout/layout";
import SEO from "../components/SEO/seo";

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>This is the second Page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
