
import React, { useState } from 'react';
import LoginForm from './components/LoginForm'
import SensorData from './components/SeneorsData'
import axios from 'axios'
function App() {
 
  // const user ={
  //   name:"Aya",
  //   password:"1234"
  // }

  const [users, setUsers] = useState({ name: "" });
  const [error, setError] = useState('');
  const Login =async details => {


    // const userName = async function getUserName() {
      try {
  
        const response = await axios.post("https://beta.masterofthings.com/GetAppReadingValueList", {
          AppId: 30,
          Auth: {
            "Key": "CCY5Xbab7jU3FMJe1623667639892waste_users_form"
          },
          ConditionList: [{
            "Reading": "Name",
            "Condition": "e",
             "Value": `${details.name}`
           
          }]
        })
       const user =response.data.Result[0];
       console.log(user);
       if(user === undefined){
        setError("Details don't match ...plz try again")
      }
      else if (details.Password === user.Password){
        setUsers({
          name: details.name,
          password: details.password
        })
      
    }
    
      
      }
      catch (error) {
        console.error(error);
      }
    }

   
  
   
   
  const Logout = () => {
    console.log("Logout")
    setUsers({ name: "", password: "" })
  }
  return (
    <>
      <div className="App">
        {(users.name !== "") ? (
          <div className="welcome">

            <SensorData />

            {/* <h2>Welcome,<span>{users.name}</span></h2> */}
            <button onClick={Logout}>Logout</button>
          </div>
        ) : (
          <LoginForm Login={Login} error={error} />
        )}
      </div>

    </>
  );
}
// }
export default App;
