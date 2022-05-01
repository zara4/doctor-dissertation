import React,{ useState} from "react";
import { useLocation } from 'react-router-dom';
import { useCommentByIdQuery } from "../generated/graphql";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import { saveAs } from "file-saver";
import size from '../Progress Report.docx'

const Matrix = () => {
  const location = useLocation();
  const comments =[]
  console.log(location.state.user.filename)
  const {data,loading,error} =useCommentByIdQuery({
      variables:{
         authorfileId: location.state.user.authorfile
      } 
  });
  function loadFile(url, callback) {
    PizZipUtils.getBinaryContent(url, callback);
}
if(data){
  console.log(data.CommentByID)
}
const generateDocument = () => {
  const date= new Date().toLocaleString()
  loadFile(size,
      function (error, content) {
          if (error) {
              throw error;
          }
          const zip = new PizZip(content);
          const doc = new Docxtemplater(zip, {
              paragraphLoop: true,
              linebreaks: true,
          });

          doc.render({
              first_name: location.state.user.user.name,
              Date: date,
              title: location.state.user.filename,
              comments
           });
          const out = doc.getZip().generate({
              type: "blob",
              mimeType:
                  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          }); 
          saveAs(out, "progress-report.docx");
      }
  );
};

  const commentsArray = () =>{
      let res
     data.CommentByID.forEach((comment,i)=>{
       i++
       res ={
        number:""+i,
        comment:comment.comment,
        reason:comment.reason,
        original:comment.original,
        revised:comment.revised,
     }
    comments.push(res)
    }) 
  }
  if(location.state.matrix && data && comments.length === 0){
    commentsArray()
    console.log()
  }  
  if(loading)
  return <div class="flex items-center justify-center">
  <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div> 
  if(!data || data === undefined)
  <div class="flex justify-center items-center">
  <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div> 
if(!data)
return   
<div class="flex justify-center">
<div class="block rounded-lg shadow-lg bg-white max-w-sm text-center py-96">
  <div class="p-6">
    <h5 class="text-gray-900 text-xl font-medium mb-2">No comments added yet</h5>
    <p class="text-gray-700 text-base mb-4">
    Get back on the document to add <b>Comments</b>
    </p>
  </div>
</div>
</div>

if(error)
  return <div>{error.message}</div>
  return ( 
    <div className="flex flex-col container pb-60">
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 p-5">
    <div class="flex justify-end">
   <div class="p-6">
      <button type="button" class=" inline-block px-6 py-2.5 bg-yellow-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={generateDocument}>
       Download</button>
  </div>
</div>
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 justify-end">
         <div className="justify-end border-b border-gray-200 sm:rounded-lg">
           <table className="min-w-full divide-y divide-gray-200">
           <thead className="bg-green-600 text-white">
                 <tr>
                  <th scope="col"  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider" >
                    Original Text</th>
                 <th  scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                 Reason For Change</th>
                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                 Reviewer's Comment </th>
                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                 Proposed Revision </th>
                 <th scope="col" className="p-px text-left text-xs font-medium text-white uppercase tracking-wider">
                 Page no </th>
                  </tr> </thead>
                 <tbody className="bg-white divide-y divide-gray-200">
                  {data.CommentByID.map((comments,i) => (
                  <tr key={i}>
                      <td className="px-6 py-4 whitespace-nowrap">
                       <div className="flex items-center">
                               <div className="">
                                   <div className="text-sm font-medium text-gray-900">{comments.original}</div>
                                </div>
                              </div>
                               </td>
                   <td className="px-6 py-4 whitespace-nowrap">
                     <div className="text-sm text-gray-900">{comments.reason}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                     <div className="text-sm text-gray-900">{comments.comment}</div>
                    </td>
                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{comments.revised}</td>
                     <td className="p-2 whitespace-nowrap text-sm text-gray-500">1</td>
                   </tr>
                 ))}
                </tbody>
                  </table>
                    </div>
                </div>
            </div>
         </div>
  );
};

export default Matrix;