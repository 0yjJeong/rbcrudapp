import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';

interface DashboardPageProps {
  children?: React.ReactElement | React.ReactElement[];
}

const DashboardPage = ({ children }: DashboardPageProps) => {
  return (
    <>
      <Typography variant='h3'>Dashboard Page</Typography>
      <Link to='/login'>Go to login</Link>
      {children}
    </>
  );
};

export default DashboardPage;
