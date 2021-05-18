import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import "./App.css";
import PrivateRoute from "./Components/HOC/PrivateRoute";

//import Layout from './Components/Layout';

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
