import React from 'react';
import Nav from './nav-footer/Nav';
import About from './about/About';
import Project from './project/Project';
import Timeline from './timeline/Timeline';
import Contact from './contact/Contact';
import Footer from './nav-footer/Footer';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <header>
            <Nav />
            <About />
        </header>
        <Project />
        <Timeline />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
