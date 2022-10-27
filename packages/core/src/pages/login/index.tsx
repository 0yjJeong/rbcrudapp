import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

import { useAuth } from '../../api/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  textInput: {
    marginBottom: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0,
    },
  },
}));

const LoginPage: React.FC = () => {
  const classes = useStyles();
  const { login } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const onSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();
    if (login) {
      try {
        await login({ username, password });
      } catch (err) {
        setLoginError(true);
      }
    }
  };

  const alertFragment = loginError && <Alert color='error'>Login Error</Alert>;

  return (
    <Container className={classes.root}>
      {alertFragment}
      <Typography variant='h4' align='center'>
        Login
      </Typography>
      <form className={classes.form} onSubmit={onSubmit}>
        <TextField
          className={classes.textInput}
          id='username'
          label='Username'
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <TextField
          className={classes.textInput}
          id='password'
          label='Password'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button variant='contained' color='primary' type='submit'>
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
