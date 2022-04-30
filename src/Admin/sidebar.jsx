import { FaFile, FaFileCode, FaHome, FaSalesforce, FaUser } from "react-icons/fa"
import { MdSettings } from "react-icons/md"

const Sidebar = () =>{
    return(
<div class="w-60 h-full shadow-xl bg-green-900 absolute" id="sidenavSecExample">
  <ul class="relative px-1">
    <li class="relative">
      <a class="flex items-center text-s py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-green-600 hover:bg-green-50 transition duration-300 ease-in-out" href="admin" data-mdb-ripple="true" data-mdb-ripple-color="primary">
        <FaHome class="w-6 h-6 mr-3" />
        <span>Dashboard</span>
      </a>
    </li>
  </ul>
  <ul class="relative px-1">
    <li class="relative">
      <a class="flex items-center text-s py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-green-600 hover:bg-green-50 transition duration-300 ease-in-out" href="users" data-mdb-ripple="true" data-mdb-ripple-color="primary">
        <FaUser class="w-6 h-6 mr-3" />
        <span>Users</span>
      </a>
    </li>
  </ul>
  <ul class="relative px-1">
    <li class="relative">
      <a class="flex items-center text-s py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-green-600 hover:bg-green-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
        <FaSalesforce class="w-6 h-6 mr-3"/>
        <span>Sales</span>
      </a>
    </li>
    </ul>
    <ul>
    <li class="relative" id="sidenavXxEx2">
      <a class="flex items-center text-s py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-green-600 hover:bg-green-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapseSidenavXxEx2" aria-expanded="false" aria-controls="collapseSidenavXxEx2">
       <FaFile className="mr-3 w-5 h-5"/>
        <span>Quotations</span>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
        </svg>
      </a>
      <ul class="relative accordion-collapse collapse hidden" id="collapseSidenavXxEx2" aria-labelledby="sidenavXxEx2" data-bs-parent="#sidenavSecExample">
        <li class="relative">
          <a href="#!" class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-green-600 hover:bg-green-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Link 5</a>
        </li>
        <li class="relative">
          <a href="#!" class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-green-600 hover:bg-green-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Link 6</a>
        </li>
      </ul>
    </li> 
  </ul>
  <ul class="relative px-1">
    <li class="relative">
      <a class="flex items-center text-s py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-green-600 hover:bg-green-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
        <FaFileCode class="w-6 h-6 mr-3" />
        <span>Reports</span>
      </a>
    </li>
  </ul>
  <ul class="relative px-1">
    <li class="relative">
      <a class="flex items-center text-s py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-green-600 hover:bg-green-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
        <MdSettings class="w-6 h-6 mr-3" />
        <span>Settings</span>
      </a>
    </li>
  </ul>
  
  <div class="text-center bottom-0 absolute w-full">
    <hr class="m-0" />
  </div>
</div>
    )
}
export default Sidebar