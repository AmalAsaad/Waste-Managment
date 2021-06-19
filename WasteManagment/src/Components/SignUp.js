import { useContext, useReducer, useState } from "react";
import { formContext } from "../Contexts";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";


//SignUp component
const SignUp = () => {
  // const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
  };


  return (
    <>
      {
        <section className="text-gray-700 text-center ">
          <div className="flex justify-center">
            <h1 className="  hover:bg-red-400 text-center mt-10 flex font-semibold justify-center items-center text-white bg-green-500 py-2 w-40   rounded-md">
              SignUp As Collector
            </h1>
          </div>
          <div className="absolute object-cover w-full h-full">
            <img src="Signup.jpg" />
          </div>
          <div className="container px-8 pt-24 pb-24 mx-auto lg:px-4">
            <div className="flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -m-2">
                  <div className="w-full p-2">
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="username"
                        className="w-full px-4 py-2 text-red-500  bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0"
                      // value={username}
                      // onChange={(e) => {
                      //   setFormState({ username: e.target.value });
                      // }}
                      />
                    </div>
                  </div>

                  <div className="w-full p-2">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="password"
                      // value={password}
                      // onChange={(e) => {
                      //   setFormState({ password: e.target.value });
                      // }}
                      className="w-full px-4 py-2 mr-4 text-base text-red-500 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0"
                    />
                  </div>
 
                  <div className="w-full p-2 ">
                    <button className="w-full px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-green-500 rounded-lg hover:bg-red-400 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                      Sign Up
                    </button>
                    {/* {passwordError && (
                      <p className="text-red-500 mt-2">Passwords don't match</p>
                    )} */}
                  </div>
                </div>
              </form>
              <p className="mt-8 text-center">
                Already have an account?
                <Link
                  to="/login"
                  className="font-semibold text-black-500 hover:text-red-400"
                >
                  LogIn
                </Link>
              </p>
            </div>
          </div>
        </section>
      }
      {/* {isSignedUp && <Login />} */}
    </>
  );
};
export default SignUp;