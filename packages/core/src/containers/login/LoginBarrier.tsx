import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthStore } from '../../store/auth';
import LoginPage from '../../pages/login';
import { User } from '../../types';

interface LoginBarrierProps {
  getUser?: () => Promise<User>;
  children?: React.ReactElement | React.ReactElement[];
}

const LoginBarrier: React.FC<LoginBarrierProps> = ({ getUser, children }) => {
  const navigate = useNavigate();
  const { isLogged, login, setUser } = useAuthStore();

  if (!isLogged) {
    return (
      <LoginPage
        submit={async ({ username, password }) => {
          if (login) {
            try {
              await login({ username, password });
              navigate('/');
            } catch (err) {}
          }
        }}
      />
    );
  }

  if (!getUser) {
    getUser().then((user) => setUser(user));
  }

  return <>{children}</>;
};

export default LoginBarrier;
