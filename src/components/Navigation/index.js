import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../pages/routes';
import './style.css';

class Navigation extends Component {
    render() {
        return (
            <nav className="navigation main-nav">
              <ul>
                <li>
                  <Link to={ROUTES.HOME}>Home</Link>
                </li>
                <li>
                  <Link to={ROUTES.LOGIN}>Login</Link>                
                </li>
              </ul>
            </nav>
        );
    }
}

export default Navigation;
