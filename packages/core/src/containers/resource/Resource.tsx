import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ListProps, CreateProps, EditProps } from '../../components';

export interface Props {
  id: string;
  ListComponent?: React.ComponentType<ListProps>;
  CreateComponent?: React.ComponentType<CreateProps>;
  EditComponent?: React.ComponentType<EditProps>;
  isDeletable?: boolean;
}

const Resource = ({
  id,
  ListComponent,
  CreateComponent,
  EditComponent,
  isDeletable,
}: Props) => {
  return (
    <Routes>
      {getRoutes({
        id,
        ListComponent,
        CreateComponent,
        EditComponent,
        isDeletable,
      })}
    </Routes>
  );
};

const getRoutes = ({
  id,
  CreateComponent,
  EditComponent,
  ListComponent,
  isDeletable,
}: Props) => {
  const basePath = `/${id}`;

  const resourceRoutes: React.ReactElement[] = [];

  const isCreatable = !!CreateComponent;
  const isEditable = !!EditComponent;

  if (ListComponent) {
    resourceRoutes.push(
      <Route
        key={basePath}
        path={basePath}
        element={
          <ListComponent
            resourceId={id}
            isCreatable={isCreatable}
            isEditable={isEditable}
            isDeletable={isDeletable}
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
        element={<CreateComponent resourceId={id} isEditable={isEditable} />}
      />
    );
  }

  if (EditComponent) {
    const path = `${basePath}/edit/:id`;
    resourceRoutes.push(
      <Route
        key={path}
        path={path}
        element={<EditComponent resourceId={id} />}
      />
    );
  }

  return resourceRoutes;
};

export default Resource;
