import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthStore } from '../../store/auth';
import { User } from '../../types';
import { useAuth } from '../../api/auth';

interface LoginBarrierProps {
  getUser?: () => Promise<User>;
  children?: React.ReactElement | React.ReactElement[];
}

const LoginBarrier: React.FC<LoginBarrierProps> = ({ getUser, children }) => {
  const { checkAuth } = useAuth();
  const { setUser } = useAuthStore();

  const navigate = useNavigate();

  useEffect(() => {
    checkAuth({}).catch(() => navigate('/login'));
  }, [checkAuth]);

  if (!getUser) {
    getUser().then((user) => setUser(user));
  }

  return <>{children}</>;
};

export default LoginBarrier;
