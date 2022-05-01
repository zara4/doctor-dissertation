import React ,{useState}from "react";
import { useNavigate } from "react-router-dom";
import { useAdduserMutation } from '../generated/graphql';
const Signup= () =>{
  const [email,setEmail] = useState('');
  const [name,setName] = useState('');
  const [password,setPassword] = useState(''); 
  let navigate = useNavigate();

  const [Adduser] = useAdduserMutation();
  const uid = Math.floor(10000 + Math.random() * 90000);
    const handlesignup = async() =>{
      if(name === " " || password === " " || email === "" ){
         alert("Please fill in all the required boxes") 
      }else if(uid != 0){
          const response = await Adduser({
              variables: {
                  userdata: {
                      id:uid,
                      name:name,
                      email:email,
                      password:password,
                      role:'User',
                      version:"Free"
                  }
              }
          }).then((response) => {
            alert("Your Account has been created")
             navigate("login");
               }).catch((error) => {
              console.log(JSON.stringify(error, null, 2));
          })  
      }
  }

        return (
          <div className="grid place-items-center h-screen">
          <div class="w-full max-w-s px-96">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label class="block text-gray-700 text-m font-bold mb-2" for="username">
                Name
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="username" 
              type="text" 
              placeholder="Name" 
              autoFocus
              value={name}
              onChange={e => setName(e.target.value)}
            />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-m font-bold mb-2" for="username">
                Username
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="username" 
              type="text" 
              placeholder="Username" 
              autoFocus
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            </div>
           
            <div class="mb-6">
              <label class="block text-gray-700 text-m font-bold mb-2" for="password">
                Password
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
              id="password" 
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="******************" />
            </div>
            <div class="flex items-center justify-between">
              <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
              type="button" onClick={handlesignup}>
                Sign Up
              </button>
              <a class="inline-block align-baseline font-bold text-s text-green-500 hover:text-green-800" href="login">
              Already have an Account?
              </a>
            </div>
          </form>
          <p class="text-center text-gray-500 text-s">
            &copy;2022 M S O. All rights reserved.
          </p>
        </div>
        </div>
        );
    }
  export default Signup