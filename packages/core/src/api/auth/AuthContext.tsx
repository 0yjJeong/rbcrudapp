import React, { useContext } from 'react';
import { AuthProvider } from './types';

const AuthContext = React.createContext<AuthProvider | null>(null);

export const useAuth = () => {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw new Error('No auth context available');
  }
  return auth;
};

type AuthContextProviderProps = {
  authProvider: AuthProvider;
  children?: JSX.Element;
};

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  authProvider,
  children,
}) => {
  return (
    <AuthContext.Provider value={authProvider}>{children}</AuthContext.Provider>
  );
};
