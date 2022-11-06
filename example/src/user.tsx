import React from 'react';
import { List, Table, Column, ListProps } from '@rbcrudapp/core';

export const UserList = (props: ListProps) => {
  return (
    <List {...props}>
      <Table>
        <Column key='id'>Id</Column>
        <Column key='firstName'>First Name</Column>
        <Column key='lastName'>Last Name</Column>
        <Column key='email'>Email</Column>
        <Column key='status'>Status</Column>
      </Table>
    </List>
  );
};
