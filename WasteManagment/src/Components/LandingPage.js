import { Link, useHistory, Redirect } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import { formContext } from "../Contexts";
import  Footer from "./Footer";
import './LandingPage.css';

//landingPage component
const LandingPage = () => {
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
        <div className='hero-container'>
             <video src='/videos/video1.mp4' autoPlay loop muted />

            <h1>HEY ENTA</h1>
            <p>3ndk zbala ? e7na hnlmha</p>
            <div className='hero-btns'>
            <button className='btns btn--outline btn--large'onClick={(e) => handleLogin("/login")}>
               GET STARTED
             </button>
            </div>
        </div>
      <Footer />
        </>
    )
}
export default LandingPage;