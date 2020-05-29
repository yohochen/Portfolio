import React from 'react';
import './Footer.css'

export class Footer extends React.Component {
    render(){
        return(
            <footer>
              <div class="row">
                <div class="col span-1-of-2">
                {
                  // <ul class="footer-nav">
                  //   <li><a href="#">About</a></li>
                  //   <li><a href="#">Blog</a></li>
                  // </ul>
                }
                </div>
                <div class="col span-1-of-2">
                  <ul class="social-links">
                    <li><a href="https://www.linkedin.com/in/yiyang-chen-4540b5107/"><i class="fab fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/yohochen"><i class="fab fa-github-square"></i></a></li>

                  </ul>
                </div>
              </div>

              <div class="row">
                <p>
                  Copyright &copy; 2020 Yohoc. All rights reserved.
                </p>

              </div>
            </footer>
        )
    }
}

export default Footer;
