import axios from 'axios';
import jsonServer from './jsonServer';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

jest.mock('axios');

describe('jsonServer', () => {
  const apis = jsonServer(BASE_URL);

  it('should return user list', async () => {
    const users: any[] = [, , , , ,];
    const count = users.length;

    (axios.get as any).mockResolvedValueOnce({
      data: users,
      headers: { 'x-total-count': count },
    });

    const { data, total } = await apis.getList('users', {
      pagination: { page: 1, perPage: 5 },
    });

    expect(data).toEqual(users);
    expect(total).toEqual(count);
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users?_end=5&_start=0`);
  });
});
