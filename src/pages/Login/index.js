import React, { Component } from 'react';

import { withFirebase } from '../../firebase';

import App from '../../App';

class Login extends Component {
    render() {
        return (
            <App title="Login">
                <h1>
                    Login Page
                </h1>  
            </App>
        );
    }
}

export default withFirebase(Login);
