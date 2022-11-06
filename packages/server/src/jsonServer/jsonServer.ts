import axios from 'axios';
import { stringify } from 'query-string';

export type Id = string | number;

export type Result = {
  id: Id;
  [key: string]: any;
};

export type Pagination = {
  page: number;
  rowsPerPage: number;
};

export type GetListResponse = {
  data: Result[];
  total: number;
};

export type CreateResponse = {
  data: Result;
};

export type UpdateResponse = {
  data: Result;
};

export type GetOneResponse = {
  data: Result;
};

export type DeleteOneResponse = {
  data: Result;
};

export interface ServerResponses {
  getList(
    resourceId: string,
    params: {
      pagination: Pagination;
    }
  ): Promise<GetListResponse>;
  getOne(resourceId: string, id: Id): Promise<GetOneResponse>;
  deleteOne(resourceId: string, id: Id): Promise<DeleteOneResponse>;
  create(resourceId: string, params: any): Promise<CreateResponse>;
  update(resourceId: string, id: Id, params: any): Promise<UpdateResponse>;
}

const jsonServer = (apiUrl: string): ServerResponses => {
  return {
    async getList(resourceId, params) {
      const { page, rowsPerPage } = params.pagination;
      const query = {
        _page: page,
        _limit: rowsPerPage,
      };

      const { data, headers } = await axios.get<Result[]>(
        `${apiUrl}/${resourceId}?${stringify(query)}`
      );

      const total = +headers['x-total-count'];

      return {
        data,
        total,
      };
    },
    async getOne(resourceId, id) {
      const { data } = await axios.get<Result>(`${apiUrl}/${resourceId}/${id}`);

      return { data };
    },
    async deleteOne(resourceId) {
      const { data } = await axios.delete<Result>(`${apiUrl}/${resourceId}`);

      return { data };
    },
    async create(resourceId, params) {
      const { data } = await axios.post<Result>(
        `${apiUrl}/${resourceId}`,
        params
      );

      return {
        data,
      };
    },
    async update(resourceId, id, params) {
      const { data } = await axios.put<Result>(
        `${apiUrl}/${resourceId}/${id}`,
        params
      );

      return {
        data,
      };
    },
  };
};

export default jsonServer;
