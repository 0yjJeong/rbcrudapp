import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { useData } from '../../api';

export interface EditProps {
  resourceId?: string;
  children?: React.ReactElement | React.ReactElement[];
}

const Edit: React.FC<EditProps> = ({ resourceId, children }) => {
  const { update, getOne } = useData();
  const navigate = useNavigate();
  const { id } = useParams();

  if (!resourceId || !id) {
    return <span>No resource id available</span>;
  }

  const { data } = useQuery(`resource/getOne/${resourceId}`, () =>
    getOne(resourceId, id)
  );

  const mutation = useMutation(
    ({ resourceId, values }: { resourceId: string; values: any }) =>
      update(resourceId, id, values),
    {
      onSuccess: () => {
        return navigate(`/resources/${resourceId}`);
      },
    }
  );

  const onSubmit = async (values: any) => {
    mutation.mutate({ resourceId, values });
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as any, {
        resourceId,
        data,
        onSubmit,
        error: mutation.error,
        isLoading: mutation.isLoading,
      });
    }
    return child;
  });

  return (
    <Card>
      <CardContent>
        <Typography>{resourceId}</Typography>
        {childrenWithProps}
      </CardContent>
    </Card>
  );
};

export default Edit;
