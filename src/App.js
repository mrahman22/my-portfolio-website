import React from 'react';
import './App.css';
import Nav from './components/Nav';
import {Router} from "@reach/router";
import Projects from './components/Projects';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     <Nav />
     <Router>
      <Home path="/"/>
     <Projects path="/projects"/>
     </Router>
    </div>
  );
}

export default App;
