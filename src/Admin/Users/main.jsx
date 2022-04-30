import React from 'react';
import Headbar from '../head';
import Sidebar from '../sidebar';
import Users from './users';
function Main(props) {

  return (
    <div>
      <Headbar />
      <Sidebar />
      <div className="ml-72">

        <div className="flex items-center px-5 py-5">
<Users />
                  </div>
      </div>

    </div>
  );
}

export default Main;