import React from 'react';
import './Nav.css'

export class Nav extends React.Component {
    render(){
        return(
              <nav>
                <div className="row">
                  <ul className="main-nav">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#timeline">Timeline</a></li>
                    <li><a href="#contact">Contact</a></li>
                  </ul>
                </div>
              </nav>
        )
    }
}

export default Nav;
