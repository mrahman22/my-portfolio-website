import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Showcase from './components/Showcase';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
     <Nav />
     <Showcase />
     <AboutMe />
    </div>
  );
}

export default App;
