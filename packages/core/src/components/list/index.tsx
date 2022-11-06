import React from 'react';
import humanizeString from 'humanize-string';
import { useNavigate, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { GetListResponse, Result } from '@rbcrudapp/server';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Lists from '@material-ui/core/List';
import { makeStyles } from '@material-ui/styles';
import { TablePaginationProps } from '@material-ui/core/TablePagination';

import { useData } from '../../api';
import { TableProps } from '../table';

const useStyles = makeStyles((theme) => ({
  root: {},
  content: { display: 'flex', flexDirection: 'column' },
  listHeader: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listBody: {},
}));

export interface ListProps {
  resourceId?: string;
  isCreate?: boolean;
  isEdit?: boolean;
  isDelete?: boolean;
  children?: React.ReactElement | React.ReactElement[];
}

const List: React.FC<ListProps> = ({
  resourceId,
  isCreate,
  isEdit,
  isDelete,
  children,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { getList } = useData();
  const queryParams = new URLSearchParams(useLocation().search);

  let page = 1;
  const queryParamPage = queryParams.get('page');
  if (queryParamPage) {
    page = +queryParamPage;
  }

  let pageSize = 5;
  const queryParamPageSize = queryParams.get('pageSize');
  if (queryParamPageSize) {
    pageSize = +queryParamPageSize;
  }

  const { data, isFetching } = useQuery<GetListResponse>(
    [`resource/list/${resourceId}`, { pageSize }],
    {
      queryFn: () => {
        return getList(resourceId, {
          pagination: {
            page,
            rowsPerPage: pageSize,
          },
        });
      },
      keepPreviousData: true,
      retry: false,
    }
  );

  if (!resourceId) {
    return <span>No resource id available</span>;
  }

  const pagination: TablePaginationProps = {
    count: data?.total,
    page,
    rowsPerPage: pageSize,
    onPageChange: () => {
      navigate(`/resources/${resourceId}?page`);
    },
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement<TableProps>(child, {
        resourceId,
        pagination,
        loading: isFetching,
        isEdit,
        isDelete,
      });
    }
    return child;
  });

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent className={classes.content}>
        <div className={classes.listHeader}>
          <Typography variant='h5' component='h2'>
            {humanizeString(resourceId)}
          </Typography>
          {isCreate && (
            <Button
              variant='contained'
              color='primary'
              onClick={() => {
                navigate(`/resources/${resourceId}/create`);
              }}
            >
              Create
            </Button>
          )}
        </div>
        <div className={classes.listBody}>
          <Lists>{childrenWithProps}</Lists>
        </div>
      </CardContent>
    </Card>
  );
};

export default List;
