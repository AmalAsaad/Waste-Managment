import { Link, useHistory } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useContext } from "react";
import { formContext } from "../Contexts/index";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import './Navbar.css';
//import { Button } from './Button'

//NavBar component
const NavBar = () => {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

//////////////////////////////////////////////////////////////
  const history = useHistory();
  const { isSignedIn, setIsSignedIn } = useContext(formContext);
  
  const handleLogin = async (url) => {
    if (!isSignedIn) {
      console.log(url);
      history.push(url);
    } else {
      try {
        const response = await axios({
          method: "GET",
          url: "http://localhost:5000/logout",
        });
        console.log(response);
        history.push("/login");
        setIsSignedIn(false);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
    <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              Waste Mangment
              <i class='fab fa-typo3' />
            </Link>

            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/LandingPage' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/contact'className='nav-links'onClick={closeMobileMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>
          
            <button className='btn--outline btn--medium' onClick={(e) => handleLogin("/login")}>
            {isSignedIn ? "Logout" : "Login"}
            </button>
          </div>
        </nav>


{/*     
      <div className="text-gray-700 bg-white ">
        <div className="flex flex-col flex-wrap p-5 mx-auto border-b md:items-center md:flex-row">
          <Link to="/" className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
            <div className="inline-flex items-center">
              <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-cyan-400 to-lightBlue-500"></div>
              <h2 className="font-semibold tracking-tighter hover:text-yellow-500 text-red-500 transition duration-1000 ease-in-out transform text-bold lg:mr-8">
                Smart Wasting System
              </h2>
            </div>
          </Link>
          <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
            <HashLink
              to="/contact"
              smooth
              className="mr-5 text-sm font-bold text-black-600 hover:text-yellow-500 invisible md:visible"
            >
              Contact Us
            </HashLink>

          </nav>
          <div className="flex m-auto">
            <button
              onClick={(e) => handleClick("/login")}
              className="items-center justify-center  px-8 py-2 ml-auto font-semibold text-white transition duration-500 ease-in-out transform bg-red-500 rounded-lg hover:bg-yellow-400 focus:ring focus:outline-none"
            >
              {isSignedIn ? "Logout" : "Login"}

            </button>
            {!isSignedIn && (
              <button
                onClick={(e) => handleClick("/signup")}
                className="items-center  justify-center px-8 py-2 ml-2 font-semibold text-white transition duration-500 ease-in-out transform bg-red-500 rounded-lg hover:bg-yellow-400 focus:ring focus:outline-none"
              >
                Sign Up
              </button>
            )}
          </div>
        </div>
      </div> */}
    </>
  );
}
export default NavBar;