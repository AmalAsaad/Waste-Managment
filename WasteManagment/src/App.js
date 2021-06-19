import {Route,BrowserRouter as Router,Switch,withRouter} from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import NavBar from "./Components/NavBar";
import UserDashboard from "./Components/UserDashboard";
import { formContext } from "./Contexts";
import { useContext, useEffect } from "react";
import axios from "axios";
const App = () => {

  return (
    <>
      <Router forceRefresh>
        <NavBar />
        <Switch>
          {/* <Route exact path="/" component={withRouter(LandingPage)} /> */}
          <Route exact path="/login" component={withRouter(Login)} />
          <Route exact path="/signup" component={withRouter(SignUp)} />
          <Route exact path="/home" component={UserDashboard} />
        </Switch>
      </Router>
    </>
  );
};
export default App;