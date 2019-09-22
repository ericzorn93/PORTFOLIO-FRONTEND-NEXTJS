import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout/layout';

const SecondPage = () => (
  <Layout>
    <h1>This is the second Page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
