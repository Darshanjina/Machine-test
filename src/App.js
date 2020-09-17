import React from 'react';
import './App.css';
import { BrowserRouter as Router , Route,Switch } from 'react-router-dom';
import PrivateRoute from "../src/components/PrivateRoute";
import Home from "../src/components/Home";
import Task from "../src/components/Task";
import User from "../src/components/User";
import Login from "../src/components/Login";

function App() {
  return (
    <div>
      <Router>
        <Switch>
      <Route exact path="/" component={Login}/>
      <PrivateRoute exact path="/home" component={Home}/>
      <PrivateRoute exact path="/task" component={Task}/>
      <PrivateRoute exact path="/user" component={User}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
