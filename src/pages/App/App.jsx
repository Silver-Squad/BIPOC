import React, { useState } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";

import HomePage from "../HomePage/HomePage";
import HowItWorks from "../HowItWorks/HowItWorks";
import authService from "../../services/authService";
import Profile from "../../pages/Profile/Profile"

import Resources from "../Resources/Resources";
import Articles from "../Resources/Articles";

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
    setUser(authService.getUser())
  }

    return (
      <>
        <NavBar user={user} handleLogout={handleLogout}/>

        <Route
          exact
          path="/"
          render={() => (
            <h1>hello</h1>
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
          path="/resources/articles"
          render={({ history }) => (
            <Articles
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

      </>
    );
  }

export default App;
