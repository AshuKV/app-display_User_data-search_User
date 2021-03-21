// in src/App.js
import * as React from "react";
//import { Admin } from 'react-admin';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
// import { PostList } from './posts';
// import { simpleRestClient} from 'admin-on-rest';
// import PostIcon from '@material-ui/icons/Book';
// import UserIcon from '@material-ui/icons/Group';


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
// const App = () => <Admin 
//     dataProvider={dataProvider} 
//   />;

const App = () => (
      <Admin dataProvider={dataProvider}>
          {/* <Resource name="users" list={ListGuesser} /> */}
          <Resource name="users" list={UserList} />
      </Admin>

  );

export default App;