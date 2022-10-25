import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import { useAuthStore } from '../../store/auth';
import LoginPage from '../../pages/login';
import { User } from '../../types';
import Layout from '../../layout/Layout';

interface LoginBarrierProps {
  getUser?: () => Promise<User>;
  children?: React.ReactElement | React.ReactElement[];
}

const LoginBarrier: React.FC<LoginBarrierProps> = ({ getUser, children }) => {
  // const navigate = useNavigate();
  const { login, setUser } = useAuthStore();
  const [loginError, setLoginError] = useState(false);

  if (localStorage.getItem('username')) {
    return <Layout>{children}</Layout>;
  }

  if (!getUser) {
    getUser().then((user) => setUser(user));
  }

  return (
    <LoginPage
      isLoginError={loginError}
      submit={async ({ username, password }) => {
        if (login) {
          try {
            await login({ username, password });
            window.location.replace('/');
          } catch (err) {
            setLoginError(true);
          }
        }
      }}
    />
  );
};

export default LoginBarrier;
