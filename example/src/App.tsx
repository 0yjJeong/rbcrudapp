import { Admin, Resource } from '@rbcrudapp/core';
import { jsonServer } from '@rbcrudapp/server';

function App() {
  return (
    <Admin
      authProvider={{
        login: () => Promise.resolve(),
        logout: () => Promise.resolve(),
        checkAuth: () => Promise.resolve(),
      }}
      dataProvider={jsonServer('http://localhost:3000')}
    >
      <Resource
        id='resource-1'
        list={false}
        create={false}
        edit={false}
        show={false}
      />
      <Resource
        id='resource-2'
        list={false}
        create={false}
        edit={false}
        show={false}
      />
      <Resource
        id='resource-3'
        list={false}
        create={false}
        edit={false}
        show={false}
      />
    </Admin>
  );
}

export default App;
