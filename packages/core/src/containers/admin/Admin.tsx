import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginBarrier from '../login';
import DashboardPage from '../../pages/dashboard';

const Admin = () => {
  return (
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
          <Route index element={<DashboardPage />} />
        </Routes>
      </LoginBarrier>
    </BrowserRouter>
  );
};

export default Admin;
