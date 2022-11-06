import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';

import { Input, Textarea } from './Input';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
  form: {
    '& > *': {
      marginBottom: theme.spacing(3),
    },
  },
}));

interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  resourceId?: string;
  isLoading?: boolean;
  error?: any;
  onSubmit?: (values: any) => void;
}

const Form: React.FC<FormProps> = ({
  resourceId,
  isLoading,
  error,
  children,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <form className={classes.form} {...rest}>
        {children}
        <Button type='submit' variant='contained' color='primary'>
          Save
        </Button>
      </form>
    </section>
  );
};

const useFormItemStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export const FormItem: React.FC<{
  label?: string;
  children?: React.ReactElement;
}> = ({ label, children }) => {
  const classes = useFormItemStyles();
  return (
    <InputLabel className={classes.root}>
      {label}
      {children}
    </InputLabel>
  );
};

export { Input, Textarea };
export default Form;
