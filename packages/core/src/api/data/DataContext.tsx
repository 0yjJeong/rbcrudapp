import React, { useContext } from 'react';
import { jsonServer, ServerResponses } from '@rbcrudapp/server';

export type DataProvider = ServerResponses;

const DataContext = React.createContext<ServerResponses | null>(
  jsonServer('http://jsonplaceholder.typicode.com')
);

export const useData = () => {
  const data = useContext(DataContext);
  if (!data) {
    throw new Error('No data context available');
  }
  return data;
};

type DataContextProviderProps = {
  dataProvider: DataProvider;
  children?: JSX.Element;
};

export const DataContextProvider = ({
  dataProvider,
  children,
}: DataContextProviderProps) => {
  return (
    <DataContext.Provider value={dataProvider}>{children}</DataContext.Provider>
  );
};
