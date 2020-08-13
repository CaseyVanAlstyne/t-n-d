import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* router to send the correct react files to the user based on url */}
        <Router>
          <div className="App">
            <Navbar /> {/* nav bar meant for all pages */}
            <Route exact path="/" component={Landing} /> {/* Landing page to direct a user to login or register */}
            <Route exact path="/register" component={Register} /> {/* register page to add a user to the database */}
            <Route exact path="/login" component={Login} /> {/* login page for users who have registered. If already logged in will redirect to dashboard */}
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} /> {/* main user page with tasks and user stats */}
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
