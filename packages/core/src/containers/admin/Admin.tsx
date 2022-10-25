import React from 'react';

import LoginBarrier from '../login';

interface Props {
  children?: React.ReactElement | React.ReactElement[];
}

const Admin = ({ children }: Props) => {
  return (
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
      {children}
    </LoginBarrier>
  );
};

export default Admin;
