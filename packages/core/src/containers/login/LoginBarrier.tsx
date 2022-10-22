import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthStore } from '../../store/auth';
import LoginPage from '../../pages/login';

interface LoginBarrierProps {
  children?: React.ReactElement | React.ReactElement[];
}

const LoginBarrier: React.FC<LoginBarrierProps> = ({ children }) => {
  const navigate = useNavigate();
  const { isLogged, login } = useAuthStore();

  if (isLogged) {
    return <>{children}</>;
  } else {
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
};

export default LoginBarrier;
