import { Link, useHistory } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useContext } from "react";
import { formContext } from "../Contexts";
import axios from "axios";

//NavBar component
const NavBar = () => {
  // const history = useHistory();
  // const { isSignedIn, setIsSignedIn } = useContext(formContext);
  const handleClick = async (url) => {
    
  };
  return (
    <>
      <div className="text-gray-700 bg-white ">
        <div className="flex flex-col flex-wrap p-5 mx-auto border-b md:items-center md:flex-row">
          <Link to="/" className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
            <div className="inline-flex items-center">
              <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-cyan-400 to-lightBlue-500"></div>
              <h2 className="font-semibold tracking-tighter text-red-500 transition duration-1000 ease-in-out transform text-bold lg:mr-8">
                Smart Wasting System
              </h2>
            </div>
          </Link>
          <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
            <HashLink
              to="/#contact"
              smooth
              className="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800 invisible md:visible"
            >
              Contact
            </HashLink>

          </nav>
          <div className="flex m-auto">
            {/* <button
              onClick={(e) => handleClick("/login")}
              className="items-center justify-center  px-8 py-2 ml-auto font-semibold text-white transition duration-500 ease-in-out transform bg-red-500 rounded-lg hover:bg-red-400 focus:ring focus:outline-none"
            >
              {isSignedIn ? "Logout" : "Login"}
              Login
            </button> */}
            <button className="items-center justify-center  px-8 py-2 ml-auto font-semibold text-white transition duration-500 ease-in-out transform bg-green-500 rounded-lg hover:bg-red-400 focus:ring focus:outline-none">
              <Link
                to="/signup"
                className="font-semibold text-black-500 hover:text-black-400"
              >
                Sign Up
              </Link>
            </button>
            <button className="items-center justify-center  px-8 py-2 ml-auto font-semibold text-white transition duration-500 ease-in-out transform bg-green-500 rounded-lg hover:bg-red-400 focus:ring focus:outline-none">
              <Link
                to="/login"
                className="font-semibold text-black-500 hover:text-black-400"
              >
                log In
              </Link>
            </button>
            {/* <button
                onClick={(e) => handleClick("/signup")}
                className="items-center  justify-center px-8 py-2 ml-2 font-semibold text-white transition duration-500 ease-in-out transform bg-red-500 rounded-lg hover:bg-red-400 focus:ring focus:outline-none"
              >
                Sign Up
            </button> */}


            {/* {!isSignedIn && (
              <button
                // onClick={(e) => handleClick("/signup")}
                className="items-center  justify-center px-8 py-2 ml-2 font-semibold text-white transition duration-500 ease-in-out transform bg-red-500 rounded-lg hover:bg-red-400 focus:ring focus:outline-none"
              >
                Sign Up
              </button>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
}
export default NavBar;