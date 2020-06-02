import React from 'react';
import './Nav.css'

export class Nav extends React.Component {
    render(){
        return(
              <nav>
                <div className="row">
                  <ul className="main-nav">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Timeline</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </nav>
        )
    }
}

export default Nav;
