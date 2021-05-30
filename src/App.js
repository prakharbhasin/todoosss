import React from 'react';
import './App.css';
import homePage from "./homePage"

import {Switch,Route, BrowserRouter as Router} from "react-router-dom";
import {Button,Typography} from "@material-ui/core"

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Switch>
        <Route path="/" exact component={homePage}/>
        
      </Switch>
    </Router>
=======
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> 1a89697ad08c89329ae15f460bd2327051ea89e5
  );
}

export default App;
