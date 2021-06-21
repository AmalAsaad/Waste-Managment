import { Link, useHistory, Redirect } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import { formContext } from "../Contexts";


//landingPage component
const landingPage = () => {
    return (
        <>
            <div className="relative  w-full h-screen  lg:block md:w-1/3 lg:w-2/3">
                <img
                    src="landscape.2jpg.jpg"
                    alt=""
                    className="absolute object-cover w-full h-full"
                />
            </div>

        </>
    )


}
export default landingPage;