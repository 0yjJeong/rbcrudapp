import React from "react";

interface Props {
  id: string;
}

export const Admin = ({ id }: Props) => {
  return <div>Hello, {id}</div>;
};
