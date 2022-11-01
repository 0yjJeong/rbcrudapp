import { Admin, Resource, AuthProvider } from '@rbcrudapp/core';
import { jsonServer } from '@rbcrudapp/server';

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
        id='resource-1'
        ListComponent={() => <>ListComponent</>}
        CreateComponent={() => <>CreateComponent</>}
        EditComponent={() => <>EditComponent</>}
        isDelete
      />
      <Resource
        id='resource-2'
        ListComponent={() => <></>}
        CreateComponent={() => <></>}
        EditComponent={() => <></>}
        isDelete
      />
    </Admin>
  );
}

export default App;
