import { useContext, useReducer, useState } from "react";
import { formContext } from "../Contexts";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";


//SignUp component
const SignUp = () => {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");

  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/register",
        {
          name: UserName,
          password: Password
        });
      console.log(response.data);
      if (response.status === 200) {
        // setIsUserName(UserName);
        // setIsUserFloor(response.data.Floor);
        // <Redirect to="/home"/>;
        history.push({
          // state: setIsSignedIn(true),
          pathname: "/home",
        });
      }
    }
    catch (err) {
      const error = err.response;
      console.log(error);
    }
  };


  return (
    <>
      {
        <section className="text-gray-700 text-center ">
          
          <div className="flex justify-center">
            <h1 className="   mx-60 hover:bg-red-400 text-center mt-10 flex font-semibold justify-center items-center text-white bg-green-500 py-2 w-40   rounded-md">
              SignUp As Collector
            </h1>
          </div>
          <div className="absolute object-cover w-auto h-auto">
            <img src="landscape.2jpg.jpg" />
          </div>

          <div className="container px-8 flex pt-20 pb-30 mx-40 lg:px-5">
            <div className="flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
              {/* <div className="absolute object-cover w-full h-full">
                <img src="Signup.jpg" />
              </div> */}
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -m-2">
                  <div className="w-full p-2">
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="username"
                        className="w-full px-4 py-2 text-red-500  bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0"
                        value={UserName}
                        onChange={(e) => {
                          setUserName(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="w-full p-2">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="password"
                      required
                      value={Password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      className="w-full px-4 py-2 mr-4 text-base text-red-500 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0"
                    />
                  </div>

                  <div className="w-full p-2 ">
                    <button className="w-full px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-green-500 rounded-lg hover:bg-red-400 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                      Sign Up
                    </button>
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