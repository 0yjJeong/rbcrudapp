import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthContextProvider, AuthProvider } from '../../api/auth';
import { DataContextProvider, DataProvider } from '../../api/data';
import Layout from '../../layout/Layout';
import DashboardPage from '../../pages/dashboard';
import LoginPage from '../../pages/login';
import LoginBarrier from '../login';

interface Props {
  authProvider: AuthProvider;
  dataProvider: DataProvider;
  children?: React.ReactElement | React.ReactElement[];
}

const Admin = ({ authProvider, dataProvider, children }: Props) => {
  const queryClient = new QueryClient();

  return (
    <AuthContextProvider authProvider={authProvider}>
      <DataContextProvider dataProvider={dataProvider}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <LoginBarrier>
              <Routes>
                <Route path='resources/*' element={children} />
                <Route path='login' element={<LoginPage />} />
                <Route
                  index
                  element={
                    <Layout>
                      <DashboardPage />
                    </Layout>
                  }
                />
              </Routes>
            </LoginBarrier>
          </BrowserRouter>
        </QueryClientProvider>
      </DataContextProvider>
    </AuthContextProvider>
  );
};

export default Admin;
