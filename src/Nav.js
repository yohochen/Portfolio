import React from 'react';

export class Nav extends React.Component {
    render(){
        return(
            <header>
              <nav>
                <div className="row">
                  <ul className="main-nav">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Experience</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </nav>
            </header>
        )
    }
}

export default Nav;
