import React, { useEffect } from 'react';

import { useResourceStore } from '../../store/resource';

export interface Props {
  id: string;
  list: boolean;
  create: boolean;
  edit: boolean;
  show: boolean;
}

const Resource = ({ id, list, create, edit, show }: Props) => {
  const resource = useResourceStore();

  useEffect(() => {
    resource.register({
      [id]: {
        props: {
          id,
          hasCreate: create,
          hasList: list,
          hasEdit: edit,
          hasShow: show,
        },
        data: [],
        list: {
          params: {
            page: 1,
          },
        },
      },
    });
  }, []);

  return <span>resource - {id}</span>;
};

export default Resource;
