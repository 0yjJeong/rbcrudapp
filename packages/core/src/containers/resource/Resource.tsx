import React, { useEffect } from 'react';

export interface Props {
  id?: string;
}

const Resource = ({ id }: Props) => {
  useEffect(() => {
    console.log(`plugin-id: {${id}}`);
  }, []);

  return <span>resource - {id}</span>;
};

export default Resource;
