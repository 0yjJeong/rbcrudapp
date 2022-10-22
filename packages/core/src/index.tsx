import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginBarrier from './containers/login/LoginBarrier';
import DashboardPage from './pages/dashboard';

export const Admin = () => {
  return (
    <>
      <BrowserRouter>
        <LoginBarrier>
          <Routes>
            <Route index element={<DashboardPage />} />
          </Routes>
        </LoginBarrier>
      </BrowserRouter>
    </>
  );
};
