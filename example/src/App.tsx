import { Admin, Resource } from '@rbcrudapp/core';

function App() {
  return (
    <Admin>
      <Resource id='resource-1' />
      <Resource id='resource-2' />
      <Resource id='resource-3' />
    </Admin>
  );
}

export default App;
