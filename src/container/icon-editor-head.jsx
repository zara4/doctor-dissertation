import { FaArrowLeft, FaBoxes, FaFileAlt, FaFileCode, FaQuoteLeft, FaUserFriends } from "react-icons/fa";
import { MdSettings,MdOutlineMessage } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const IconEditorHead = () => {
  const location = useLocation();
  let navigate = useNavigate();
  const handleMatrix = () =>{
    navigate('matrix-report',{ state: {user: location.state ,text:"",matrix:true }})
  } 
    return (
        <div>
  <nav class="py-6 bg-green-800 relative flex items-center w-full">
  <a class="nav-link block mx-8 lg:px-2 py-px text-white transition duration-150 ease-in-out" onClick={()=>{navigate(-2);}} >
  <FaArrowLeft size={15} /></a>
    <div class="px-6 w-full flex flex-wrap items-center justify-center">
      <p class="pr-8 py-2 text-white">Document Editor</p>
    </div>
  </nav>
  <nav class="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
    <div class="px-6 w-full flexfocus:text-gray-700 flex-wrap items-center justify-between">
    <ul class="flex justify-between">
  <li class="mr-6">
    <a class="text-center block border border-white rounded hover:border-gray-200 text-green-500 hover:bg-gray-200 py-2 px-4" href="#">File</a>
  </li>
  <li class="mr-6">
    <a class="text-center block border border-white rounded hover:border-gray-200 text-green-500 hover:bg-gray-200 py-2 px-4" href="#">Home</a>
  </li>
  <li class="mr-6">
    <a class="text-center block border border-white rounded hover:border-gray-200 text-green-500 hover:bg-gray-200 py-2 px-4" href="#">Insert</a>
  </li>
  <li class="mr-6">
    <a class="text-center block border border-white rounded hover:border-gray-200 text-green-500 hover:bg-gray-200 py-2 px-4" href="#">Layout</a>
  </li>
  <li class="mr-6">
    <a class="text-center block border border-white rounded hover:border-gray-200 text-green-500 hover:bg-gray-200 py-2 px-4" href="#">Reference</a>
  </li>
  <li class="mr-6">
    <a class="text-center block border border-white rounded hover:border-gray-200 text-green-500 hover:bg-gray-200 py-2 px-4" href="#">View</a>
  </li>
  <li class="mr-6">
    <a class="text-center block border border-white rounded hover:border-gray-200 text-green-500 hover:bg-gray-200 py-2 px-4" href="#">Help</a>
  </li>
</ul>
    </div>
  </nav>
  <div class="flex justify-center m-3 py-6 ">
    <button type="button" class="mx-2 inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">
    <FaQuoteLeft size={35} />Citations</button>
    <button type="button" className={"mx-2 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out" + (location.state.matrix ? " bg-green-900 " : " bg-green-600")} 
    onClick={handleMatrix}>
    <FaFileAlt size={35}/>Change Matrix</button>
    <button type="button" class="mx-2 inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">
    <FaFileCode size={35}/>Reference Manager</button>
    <button type="button" class="mx-2 inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">
    <FaUserFriends size={35}/>Commitee Members</button>
    <button type="button" class="mx-2 inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">
    <FaBoxes size={35}/>Theme Coding</button>
    <button type="button" class="mx-2 inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">
    <MdSettings size={35}/>Settings</button>
    <button type="button" class="mx-2 inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">
    <MdOutlineMessage size={35}/>Contact Us</button>
</div>
        </div>

    )
}
export default IconEditorHead 