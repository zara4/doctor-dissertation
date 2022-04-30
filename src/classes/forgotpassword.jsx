import React from 'react';

const ForgotPassword = () => {
    function handlerecovery(){
        alert("An Email has been sent to your email address")
    }
    return (
                  <div className="grid place-items-center h-screen focus:shadow-outline">
                  <div class="w-full max-w-s px-96">
                  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                      <label class="block text-gray-700 text-m font-bold mb-2" for="email">
                        Email
                      </label>
                      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
                    </div>
                    <div class="flex items-center justify-between">
                      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                      type="button" onClick={handlerecovery}>
                        Recover your Password
                      </button>
                      <a class="inline-block align-baseline font-bold text-s text-green-500 hover:text-green-800" href="">
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
};
export default ForgotPassword