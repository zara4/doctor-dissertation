import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserByEmailQuery } from '../generated/graphql';

const Login= () =>{
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState(''); 
  let navigate = useNavigate();
  const { data, error } = useUserByEmailQuery({
    variables: {
       email: email
    },
  });
  
    function handlesignin(){
        if(email === ""||password === ""){
        alert("Please fill in all the feild required")
      }else if(email === "admin" && password === "admin123"){
          navigate('admin'); 
      }
      if(error){
        console.log("database error.... server is not running",error.message)
      }else if(data.userByEmail.password === password)
          navigate('home', { state: data.userByEmail });
      else alert("Either Username or password doesnot match")
    }
         return (
          <div className="grid place-items-center h-screen">
          <div class="w-full max-w-s px-96">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label class="block text-gray-700 text-m font-bold mb-2" for="username">
                Username
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
               id="username" 
               type="text" 
               autoFocus
               value={email}
               onChange={e => setEmail(e.target.value)}
              placeholder="Username" />
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 text-m font-bold mb-2" for="password">
                Password
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
              id="password" 
              type="password"
              value={password}
              onChange={e=> setPassword(e.target.value)}
              placeholder="******************" />
            </div>
            <div class="flex items-center justify-between">
              <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
              type="button" onClick={handlesignin}>
                Log In 
              </button>
              <a class="inline-block align-baseline font-bold text-s text-green-500 hover:text-green-800" href="signup">
              Create a new Account?
              </a>
            </div>
          </form>
          <p class="text-center text-gray-500 text-s">
            &copy;2022 Doctor Dissertation. All rights reserved.
          </p>
        </div>
        </div>
        );
    }
  export default Login