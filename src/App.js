import React from 'react';
import './App.css';
import homePage from "./homePage"

import {Switch,Route, BrowserRouter as Router} from "react-router-dom";
import {Button,Typography} from "@material-ui/core"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={homePage}/>
        
      </Switch>
    </Router>
  );
}

export default App;
