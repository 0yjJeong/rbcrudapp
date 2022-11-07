import React, { useState, useRef } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Result } from '@rbcrudapp/server';
import TableInner from '@material-ui/core/Table';
import TableOuter from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles, TablePaginationProps } from '@material-ui/core';

import { useData } from '../../api';
import Column from './Column';

const useStyles = makeStyles(() => ({
  tableOuter: {},
  tableInner: {},
}));

export interface TableProps {
  resourceId?: string;
  rows?: Array<Result>;
  loading?: boolean;
  pagination?: TablePaginationProps;
  isEditable?: boolean;
  isDeletable?: boolean;
  onConfirmDelete?: (id: any) => void;
  children?: React.ReactElement | React.ReactElement[];
}

const Table: React.FC<TableProps> = ({
  resourceId,
  rows,
  isEditable,
  isDeletable,
  children,
}) => {
  const classes = useStyles();

  const { deleteOne } = useData();

  if (!resourceId) {
    return <span>No resource id available</span>;
  }

  const queryClient = useQueryClient();

  const mutation = useMutation(
    ({ resourceId, id }: { resourceId: string; id: string | number }) => {
      return deleteOne(resourceId, id);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(`resource/list/${resourceId}`);
      },
    }
  );

  return (
    <TableOuter className={classes.tableOuter}>
      <TableInner className={classes.tableInner}>
        <TableHead>
          <TableRow>
            {children}
            <TableCell>{(isEditable || isDeletable) && 'Actions'}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow key={row.id}>
              {Object.keys(row).map((item) => (
                <TableCell key={item}>{row[item]}</TableCell>
              ))}
              <ExtendedTableCell
                resourceId={resourceId}
                id={row.id}
                onConfirmDelete={() =>
                  mutation.mutate({ resourceId, id: row.id })
                }
              />
            </TableRow>
          ))}
        </TableBody>
      </TableInner>
    </TableOuter>
  );
};

const useExtendedTableCellStyles = makeStyles((theme) => ({
  root: {},
  popper: {
    background: '#fff',
    border: '1px solid #dedede',
  },
  popperHead: {
    padding: theme.spacing(2),
    color: 'rgba(0, 0, 0, 0.87)',
  },
  popperBody: {
    display: 'flex',
    '& > button': {
      borderRadius: 0,
      flex: 1,
    },
    '& > button:first-child': {
      background: '#dedede',
    },
    '& > button:last-child': {
      color: '#fff',
      background: '#fc1e65',
    },
  },
}));

interface ExtendedTableCellProps {
  resourceId: string;
  id?: string | number;
  isEditable?: boolean;
  isDeletable?: boolean;
  onConfirmDelete?: () => void;
}

const ExtendedTableCell: React.FC<ExtendedTableCellProps> = ({
  resourceId,
  id,
  isEditable,
  isDeletable,
  onConfirmDelete,
}) => {
  const classes = useExtendedTableCellStyles();
  const navigate = useNavigate();
  const anchorEl = useRef<HTMLButtonElement>();
  const [open, setOpen] = useState(false);

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setOpen(true);
  };

  const EditButtonFragment = isEditable && (
    <Button
      type='button'
      variant='contained'
      color='primary'
      onClick={() => {
        navigate(`/resources/${resourceId}/edit/${id}`);
      }}
    >
      Edit
    </Button>
  );

  const DeleteButtonFragment = isDeletable && (
    <Button
      ref={anchorEl}
      variant='outlined'
      color='secondary'
      onClick={handleClick}
    >
      Delete
    </Button>
  );

  const PopperFragment = (
    <Popper className={classes.popper} open={open} anchorEl={anchorEl.current}>
      <div className={classes.popperHead}>
        <Typography align='center'>Are you sure?</Typography>
      </div>
      <div className={classes.popperBody}>
        <Button
          onClick={() => {
            onConfirmDelete();
            setOpen(false);
          }}
        >
          Yes
        </Button>
        <Button
          onClick={() => {
            setOpen(false);
          }}
        >
          No
        </Button>
      </div>
    </Popper>
  );

  return (
    <TableCell>
      <>
        {true && (
          <>
            {EditButtonFragment}
            {DeleteButtonFragment}
            {PopperFragment}
          </>
        )}
      </>
    </TableCell>
  );
};

export { Column };
export default Table;
