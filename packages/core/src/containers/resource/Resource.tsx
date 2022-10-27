import React from 'react';

export interface Props {
  id: string;
  list: boolean;
  create: boolean;
  edit: boolean;
  show: boolean;
}

const Resource = ({ id, list, create, edit, show }: Props) => {
  return <span>resource - {id}</span>;
};

export default Resource;
