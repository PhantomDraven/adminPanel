import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <nav className="navigation">
                <Link to="/">Home</Link>
            </nav>
        );
    }
}

export default Navigation;
