import React from 'react';
import { useFetchuserQuery } from '../../generated/graphql';

function Users() {
    const {data,loading,error} =useFetchuserQuery({
        fetchPolicy:"network-only",
    });
  
    if(loading)
    return <div class="flex items-center justify-center">
    <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div> 
    if(!data || data === undefined)
    <div class="flex justify-center items-center">
    <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
      <span class="visually-hidden"></span>
    </div>
  </div> 
  if(!data)
  return     
<div class="flex justify-center">
  <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center py-96">
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">No User found</h5>
      <p class="text-gray-700 text-base mb-4">
      Get back on the document to add <b>Comments</b>
      </p>
    </div>
  </div>
  </div>
  
  if(error)
    return <div>{error.message}</div>
return (
    <div class="container px-6 mx-auto grid">
    <h2 class="my-6 text-2xl font-semibold text-gray-700">
        Registered Users
    </h2>

    <div className="flex flex-col container pb-60">
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 p-5">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 justify-end">
         <div className="justify-end border-b border-gray-200 sm:rounded-lg">
           <table className="min-w-full divide-y divide-gray-200">
           <thead className="bg-green-600 text-white">
                 <tr>
                  <th scope="col"  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider" >
                    Name</th>
                 <th  scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                 Email</th>
                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                 Version</th>
                 </tr> </thead>
                 <tbody className="bg-white divide-y divide-gray-200">
                  {data.fetchUser.map((users,i) => (
                  <tr key={i}>
                      <td className="px-6 py-4 whitespace-nowrap">
                       <div className="flex items-center">
                               <div className="">
                                   <div className="text-sm font-medium text-gray-900">{users.name}</div>
                                </div>
                              </div>
                               </td>
                   <td className="px-6 py-4 whitespace-nowrap">
                     <div className="text-sm text-gray-900">{users.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                     <div className="text-sm text-gray-900">{users.version}</div>
                    </td>
                   </tr>
                 ))}
                </tbody>
                  </table>
                    </div>
                </div>
            </div>
         </div>

    </div>
  );
}

export default Users;