import React from 'react';
import {
  List,
  Create,
  Edit,
  Table,
  Column,
  Form,
  FormItem,
  Input,
  ListProps,
  CreateProps,
  EditProps,
} from '@rbcrudapp/core';

export const CategoryList = (props: ListProps) => {
  return (
    <List {...props}>
      <Table>
        <Column key='id'>ID</Column>
        <Column key='title'>Title</Column>
      </Table>
    </List>
  );
};

export const CategoryCreate = (props: CreateProps) => {
  return (
    <Create {...props}>
      <Form>
        <FormItem label='Title'>
          <Input name='title' />
        </FormItem>
      </Form>
    </Create>
  );
};

export const CategoryEdit = (props: EditProps) => {
  return (
    <Edit {...props}>
      <Form>
        <FormItem label='Title'>
          <Input name='title' />
        </FormItem>
      </Form>
    </Edit>
  );
};
