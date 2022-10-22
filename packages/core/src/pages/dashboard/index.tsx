import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';

import Layout from '../../layout/Layout';

const DashboardPage = () => {
  return (
    <Layout>
      <Typography variant='h3'>Dashboard Page</Typography>
      <Link to='/login'>Go to login</Link>
    </Layout>
  );
};

export default DashboardPage;
