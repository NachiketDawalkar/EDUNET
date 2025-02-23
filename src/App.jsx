/* eslint-disable no-unused-vars */

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import CreateTeam from "./components/Createteam";
import React from 'react'
function App() {
  return (
    
      <Router>
      <Navbar />



      <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/createteam">
            <CreateTeam />
          </Route>
        
        </Router>
    
    
  )
}

export default App
