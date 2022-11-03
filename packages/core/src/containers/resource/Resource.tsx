import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ListProps, CreateProps } from '../../components';

export interface Props {
  id: string;
  ListComponent?: React.ComponentType<ListProps>;
  CreateComponent?: React.ComponentType<CreateProps>;
  EditComponent?: React.ComponentType<{}>;
  isDelete?: boolean;
}

const Resource = ({
  id,
  ListComponent,
  CreateComponent,
  EditComponent,
}: Props) => {
  return (
    <Routes>
      {getRoutes({ id, ListComponent, CreateComponent, EditComponent })}
    </Routes>
  );
};

const getRoutes = ({
  id,
  CreateComponent,
  EditComponent,
  ListComponent,
  isDelete,
}: Props) => {
  const basePath = `/${id}`;

  const resourceRoutes: React.ReactElement[] = [];

  if (ListComponent) {
    resourceRoutes.push(
      <Route
        key={basePath}
        path={basePath}
        element={
          <ListComponent
            resourceId={id}
            isCreate={!!CreateComponent}
            isEdit={!!EditComponent}
            isDelete={isDelete}
          />
        }
      />
    );
  }

  if (CreateComponent) {
    const path = `${basePath}/create`;
    resourceRoutes.push(
      <Route
        key={path}
        path={path}
        element={<CreateComponent resourceId={id} />}
      />
    );
  }

  if (EditComponent) {
    const path = `${basePath}/edit/:id`;
    resourceRoutes.push(
      <Route key={path} path={path} element={<EditComponent />} />
    );
  }

  return resourceRoutes;
};

export default Resource;
