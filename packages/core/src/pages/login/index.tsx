import React from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

const LoginPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    navigate('/');
  };

  return (
    <Container className={classes.root}>
      <Typography variant='h4' align='center'>
        Login
      </Typography>
      <form className={classes.form} onSubmit={onSubmit}>
        <TextField
          className={classes.textInput}
          id='username'
          label='Username'
        />
        <TextField
          className={classes.textInput}
          id='password'
          label='Password'
        />
        <Button variant='contained' color='primary' type='submit'>
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
