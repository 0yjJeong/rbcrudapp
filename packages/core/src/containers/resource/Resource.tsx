import React from 'react';
import { Routes, Route } from 'react-router-dom';

export interface Props {
  id: string;
  ListComponent?: React.ComponentType<{}>;
  CreateComponent?: React.ComponentType<{}>;
  EditComponent?: React.ComponentType<{}>;
  isDelete?: boolean;
}

const Resource = ({
  id,
  ListComponent,
  CreateComponent,
  EditComponent,
  isDelete,
}: Props) => {
  return (
    <Routes>
      {getRoutes({
        id,
        ListComponent,
        CreateComponent,
        EditComponent,
        isDelete,
      })}
    </Routes>
  );
};

const getRoutes = ({
  id,
  CreateComponent,
  EditComponent,
  ListComponent,
}: Props) => {
  const basePath = `/resources/${id}`;

  const resourceRoutes: React.ReactElement[] = [];

  if (ListComponent) {
    resourceRoutes.push(<Route path={basePath} element={<ListComponent />} />);
  }

  if (CreateComponent) {
    const path = `${basePath}/create`;
    resourceRoutes.push(<Route path={path} element={<CreateComponent />} />);
  }

  if (EditComponent) {
    const path = `${basePath}/edit/:id`;
    resourceRoutes.push(<Route path={path} element={<EditComponent />} />);
  }

  return resourceRoutes;
};

export default Resource;
