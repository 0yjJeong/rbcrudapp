import React from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import getFormData from 'get-form-data';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { useData } from '../../api';

export interface CreateProps {
  resourceId?: string;
  children?: React.ReactElement | React.ReactElement[];
}

const Create: React.FC<CreateProps> = ({ resourceId, children }) => {
  const { create } = useData();
  const navigate = useNavigate();

  if (!resourceId) {
    return <span>No resource id available</span>;
  }

  const mutation = useMutation(
    ({ resourceId, values }: { resourceId: string; values: any }) =>
      create(resourceId, values),
    {
      onSuccess: () => {
        return navigate(`/resources/${resourceId}`);
      },
    }
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = getFormData(event.target);
    mutation.mutate({ resourceId, values });
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement<{ resourceId?: string; [key: string]: any }>(
        child as any,
        {
          resourceId,
          onSubmit,
          error: mutation.error,
          isLoading: mutation.isLoading,
        }
      );
    }
    return child;
  });

  return (
    <Card>
      <CardContent>
        <Typography variant='h5' component='h2'>
          Create {resourceId}
        </Typography>
        {childrenWithProps}
      </CardContent>
    </Card>
  );
};

export default Create;
