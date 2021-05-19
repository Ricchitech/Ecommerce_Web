import React, {useEffect} from "react";
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import "./App.css";
import PrivateRoute from "./Components/HOC/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./actions";
//import Layout from './Components/Layout';

function App() {

const dispatch = useDispatch();
const auth = useSelector(state => state.auth)
 useEffect(() => {
   if (!auth.authenticate) {
     dispatch(isUserLoggedIn());
   }
 }, []);

  return (
    
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
   
  );
}

export default App;
