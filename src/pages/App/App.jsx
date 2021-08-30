import React, { useState } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import HomePage from "../HomePage/HomePage";
import HowItWorks from "../HowItWorks/HowItWorks";
import authService from "../../services/authService";
import Profile from "../../pages/Profile/Profile"
import Account from "../../pages/Account/Account"
import Resources from "../Resources/Resources";
import Research from "../Resources/Research";
import Acceleration from "../Resources/Acceleration";
import Community from "../Resources/Community";
import Education from "../Resources/Education";
import Events from "../Resources/Events";
import GetHired from "../Resources/GetHired";
import Test from "../Quiz/Test"

import "./App.css";

function App (props) {
  const [user, setUser] = useState(authService.getUser())
  const history = useHistory();

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    history.push("/");
  };

  const handleSignupOrLogin = () => {
    setUser(authService.getUser());
  }

    return (
      <>
        <NavBar user={user} handleLogout={handleLogout}/>

        <Route
          exact
          path="/"
          render={() => (
            <HomePage
              history={history}
            />
          )}
        />

        {/* route for company profiles */}
        <Route
          exact
          path='/profile'
          render={({history}) => (
            <Profile
            history={history}
            currentUser={user}
            />
          )}
        />

        <Route 
          exact
          path='/account' 
          render={({history}) => (
            <Account
            history={history}
            currentUser={user} 
            />
          )}
        />

        <Route
          exact
          path="/homepage"
          render={({ history }) => (
            <HomePage
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          )}
        />

        <Route
          exact
          path="/howitworks"
          render={({ history }) => (
            <HowItWorks
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          )}
        />

        <Route
          exact
          path="/resources"
          render={({ history }) => (
            <Resources
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          )}
        />

        <Route
          exact
          path="/resources/research"
          render={({ history }) => (
            <Research
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          )}
        />

        <Route
          exact
          path="/resources/acceleration"
          render={({ history }) => (
            <Acceleration
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          )}
        />

        <Route
          exact
          path="/resources/community"
          render={({ history }) => (
            <Community
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          )}
        />

        <Route
          exact
          path="/resources/education"
          render={({ history }) => (
            <Education
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          )}
        />

        <Route
          exact
          path="/resources/events"
          render={({ history }) => (
            <Events
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          )}
        />

        <Route
          exact
          path="/resources/gethired"
          render={({ history }) => (
            <GetHired
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          )}
        />

        <Route
          exact
          path="/test"
          render={({ counter }) => (
            <Test
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          )}
        />

        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          )}
        />

        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          )}
        />
        <Footer />
      </>
    );
  }

export default App;
