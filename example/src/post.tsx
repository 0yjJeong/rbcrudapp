import React from 'react';
import {
  List,
  ListProps,
  Create,
  CreateProps,
  Edit,
  EditProps,
  Table,
  Column,
  Form,
  FormItem,
  Input,
} from '@rbcrudapp/core';

export const PostList: React.FC<ListProps> = (props) => {
  return (
    <List {...props}>
      <Table>
        <Column key='id'>ID</Column>
        <Column key='title'>Title</Column>
        <Column key='slug'>Slug</Column>
      </Table>
    </List>
  );
};

export const PostCreate: React.FC<CreateProps> = (props) => {
  return (
    <Create {...props}>
      <Form>
        <FormItem label='Title'>
          <Input name='title' required={true} />
        </FormItem>
        <FormItem label='Slug'>
          <Input name='slug' />
        </FormItem>
      </Form>
    </Create>
  );
};

export const PostEdit: React.FC<EditProps> = (props) => {
  return (
    <Edit {...props}>
      <Form>
        <FormItem label='Title'>
          <Input name='title' required={true} />
        </FormItem>
        <FormItem label='Slug'>
          <Input name='slug' />
        </FormItem>
      </Form>
    </Edit>
  );
};
