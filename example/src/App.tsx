import { Admin, Resource, AuthProvider } from '@rbcrudapp/core';
import { jsonServer } from '@rbcrudapp/server';

import { CategoryList, CategoryCreate, CategoryEdit } from './category';
import { PostList, PostCreate, PostEdit } from './post';
import { UserList } from './user';

function App() {
  const authProvider: AuthProvider = {
    login: (params: any) => {
      if (params.username === 'admin') {
        localStorage.setItem('username', params.username);
        return Promise.resolve();
      }
      return Promise.reject();
    },
    logout: () => Promise.resolve(),
    checkError: () => Promise.resolve(),
    checkAuth: () =>
      localStorage.getItem('username') ? Promise.resolve() : Promise.reject(),
    getUserInfo: () =>
      Promise.resolve({
        id: '1',
        username: 'username',
        avatar:
          'https://cdn.pixabay.com/photo/2022/10/15/21/23/cat-7523894_1280.jpg?w=600',
      }),
  };

  return (
    <Admin
      authProvider={authProvider}
      dataProvider={jsonServer('http://localhost:3000')}
    >
      <Resource
        id='categories'
        ListComponent={CategoryList}
        CreateComponent={CategoryCreate}
        EditComponent={CategoryEdit}
      />
      <Resource
        id='posts'
        ListComponent={PostList}
        CreateComponent={PostCreate}
        EditComponent={PostEdit}
      />
      <Resource id='users' ListComponent={UserList} />
    </Admin>
  );
}

export default App;
