import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { useAuth } from '../../api/auth';
import { Outlet } from 'react-router-dom';

interface Props {
  children?: React.ReactElement | React.ReactElement[];
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: 'minmax(233px, auto) 1fr',
  },
  sidebar: {
    background: '#121212',
    color: '#fff',
    height: '100%',
  },
  content: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  pageHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  pageBody: {
    padding: theme.spacing(3),
  },
}));

export const Layout = ({ children }: Props) => {
  const classes = useStyles();
  const { logout } = useAuth();

  return (
    <div className={classes.root}>
      <div className={classes.sidebar}>
        <Link href='#'>Service Name</Link>
        <List className={classes.sidebar}>
          <ListItem>
            <ListItemText primary='Option 1' />
          </ListItem>
          <ListItem>
            <ListItemText primary='Option 2' />
          </ListItem>
        </List>
      </div>
      <div className={classes.content}>
        <div className={classes.pageHeader}>
          <Typography variant='h4'>Header</Typography>
          <Button variant='contained' color='primary' onClick={logout}>
            Logout
          </Button>
        </div>
        <div className={classes.pageBody}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
