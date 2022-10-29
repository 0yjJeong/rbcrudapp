import React from 'react';
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
  return (
    <AuthContextProvider authProvider={authProvider}>
      <DataContextProvider dataProvider={dataProvider}>
        <BrowserRouter>
          <LoginBarrier
            getUser={() =>
              Promise.resolve({
                id: '1',
                username: 'username',
                avatar:
                  'https://cdn.pixabay.com/photo/2022/10/15/21/23/cat-7523894_1280.jpg?w=600',
              })
            }
          >
            <Routes>
              <Route path='/login' element={<LoginPage />} />
              <Route element={<Layout />}>
                <Route
                  path='/'
                  element={<DashboardPage>{children}</DashboardPage>}
                />
              </Route>
            </Routes>
          </LoginBarrier>
        </BrowserRouter>
      </DataContextProvider>
    </AuthContextProvider>
  );
};

export default Admin;
