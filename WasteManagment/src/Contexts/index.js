import React, { useState, createContext } from "react";

export const formContext = createContext();
const { Provider } = formContext;

export const FormProvider = ({ children }) => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userFloor, setIsUserFloor] = useState("");
  const [userName, setIsUserName] = useState("");
  return (
    <Provider value={
      {isSignedUp,
      isSignedIn,
      setIsSignedIn,
      setIsSignedUp,
      userFloor,
      setIsUserFloor,
      userName,
      setIsUserName
      }}>
      {children}
    </Provider>
  );
};
