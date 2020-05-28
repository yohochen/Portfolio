import React from 'react';
import Nav from './Nav';
import About from './about/About';
import Project from './project/Project';
import Timeline from './timeline/Timeline';
import Footer from './Footer';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Project />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;
