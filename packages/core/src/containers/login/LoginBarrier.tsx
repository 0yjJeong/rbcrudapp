import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthStore } from '../../store/auth';
import { User } from '../../types';
import { useAuth } from '../../api/auth';

interface LoginBarrierProps {
  children?: React.ReactElement | React.ReactElement[];
}

const LoginBarrier: React.FC<LoginBarrierProps> = ({ children }) => {
  const { checkAuth, getUserInfo } = useAuth();
  const { setUser } = useAuthStore();

  const navigate = useNavigate();

  useEffect(() => {
    checkAuth({}).catch(() => navigate('/login'));
  }, [checkAuth]);

  useEffect(() => {
    if (getUserInfo) {
      getUserInfo().then((user) => setUser(user));
    }
  }, [getUserInfo]);

  return <>{children}</>;
};

export default LoginBarrier;
