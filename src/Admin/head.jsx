import { useState } from "react"
const Headbar = (props) => {
  const [toggle,settoggle]=useState(false)
  const handledown = () =>{
    if(toggle === false){
      settoggle(true)
    }else settoggle(false)
  }
  const handleSignout = () =>{
    window.location.href = '/';
  }
  return (
    <div>
      <nav
        class="relative w-full flex flex-wrap items-center justify-between py-3 bg-green-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light"
      >
        <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button
            class="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
            type="button"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              class="w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
          <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent1">
            <a class="text-xl text-white pr-2 font-semibold p-10" href="#">Admin Dashboard</a>
          </div>

          <div class="flex items-center relative">
            <div class="dropdown relative">
              <a
                class="text-white opacity-80 hover:opacity-90 focus:opacity-80 mr-4 dropdown-toggle hidden-arrow flex items-center"
                href="#"
                id="dropdownMenuButton1"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="bell"
                  class="w-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                  ></path>
                </svg>
                <span
                  class="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5"
                >1</span>
              </a>
            </div>
            <div class="dropdown relative">
              <a
                class="dropdown-toggle flex items-center hidden-arrow"
                id="dropdownMenuButton2"
                role="button"
                onClick={handledown}
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
                  class="rounded-full"
                  style={{ height: '35px', width: '35px' }}
                  alt=""
                  loading="lazy"
                />
              </a>

              <ul
                className={"dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none left-auto right-0" + (toggle ? " ":"hidden invisible")}
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a
                    class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    href="#"
                  >Help</a>
                </li>
                <li>
                  <a
                    class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    href="#"
                  >Edit Profile</a>
                </li>
                <li>
                  <a
                    class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    onClick={handleSignout}
                  >Sign Out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Headbar