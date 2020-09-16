import React from 'react';
import './App.css';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Home from "../src/components/Home";
import Task from "../src/components/Task";
import User from "../src/components/User";
import Login from "../src/components/Login";

function App() {
  return (
    <div>
      <Router>
      <Route exact path="/" component={Login}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/task" component={Task}/>
      <Route exact path="/user" component={User}/>
      </Router>
    </div>
  );
}

export default App;
