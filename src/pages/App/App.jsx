import React, { Component, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import HomePage from "../HomePage/HomePage";
import HowItWorks from "../HowItWorks/HowItWorks";
import authService from "../../services/authService";
import * as profileService from "../../services/profileService";
import Profile from "../../pages/Profile/Profile";
import Account from "../../pages/Account/Account";
import AccountEdit from "../../pages/AccountEdit/AccountEdit";
import Resources from "../Resources/Resources";
import Research from "../Resources/Research";
import Acceleration from "../Resources/Acceleration";
import Community from "../Resources/Community";
import Education from "../Resources/Education";
import Events from "../Resources/Events";
import GetHired from "../Resources/GetHired";
import Test from "../Quiz/Test";
import "./App.css";
import SearchResults from "../SearchResults/SearchResults";
import About from "../About/About";

class App extends Component {
  state = {
    profiles: [],
    user: authService.getUser(),
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };


  render() {
    const { user } = this.state;

    return (
      <>
        <NavBar user={user} handleLogout={this.handleLogout} />

        <Route
          exact
          path="/"
          render={({ history }) => (
            <HomePage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />

        <Route
          exact
          path="/about"
          render={({ history }) => (
            <About
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />

        {/* route for company profiles */}
        <Route
          exact
          path="/profile/:id"
          render={() => (
            <Profile currentUser={user} />
          )}
        />

        <Route
          exact
          path="/account"
          render={() =>
            authService.getUser() ? (
              <Account handleAddProfiles={this.handleAddProfiles} user={user} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />

        <Route
          exact
          path="/account/edit/"
          render={({ match, location }) =>
            authService.getUser() ? (
              <AccountEdit
                handleUpdateProfile={this.handleUpdateProfile}
                user={user}
                location={location}
                match={match}
              />
            ) : (
              <Redirect to="/login" />
            )
          }
        />

        <Route
         exact
         path="/search"
         render={() =>
          <SearchResults
          user={user}
          />
        }
        />

        <Route
          exact
          path="/howitworks"
          render={({ history }) => <HowItWorks history={history} />}
        />

        <Route
          exact
          path="/resources"
          render={({ history }) => (
            <Resources
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />

        <Route
          exact
          path="/resources/research"
          render={({ history }) => (
            <Research
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />

        <Route
          exact
          path="/resources/acceleration"
          render={({ history }) => (
            <Acceleration
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />

        <Route
          exact
          path="/resources/community"
          render={({ history }) => (
            <Community
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />

        <Route
          exact
          path="/resources/education"
          render={({ history }) => (
            <Education
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />

        <Route
          exact
          path="/resources/events"
          render={({ history }) => (
            <Events
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />

        <Route
          exact
          path="/resources/gethired"
          render={({ history }) => (
            <GetHired
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />

        <Route
          exact
          path="/test"
          render={({ counter }) => (
            <Test handleSignupOrLogin={this.handleSignupOrLogin} />
          )}
        />

        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />

        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Footer />
      </>
    );
  }
}

export default App;
