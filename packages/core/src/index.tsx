import React from 'react';
import Layout from './layout/Layout';

interface Props {
  id?: string;
  children?: React.ReactElement;
}

export const Admin = ({ children }: Props) => {
  return <Layout>{children}</Layout>;
};
