import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DashboardPage from './pages/dashboard';
import LoginPage from './pages/login';

export const Admin = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<DashboardPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
