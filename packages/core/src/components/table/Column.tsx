import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import { TableCellProps } from '@material-ui/core/TableCell';

const Column: React.FC<TableCellProps> = ({ ...rest }) => {
  return <TableCell {...rest} />;
};

export default Column;
