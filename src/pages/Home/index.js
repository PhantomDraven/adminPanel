import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { withFirebase } from '../../firebase';

import App from '../../App';

import ROUTES from '../routes';

class Home extends Component {
    componentDidMount() {
        this.props.firebase.auth.onAuthStateChanged(authUser => {
            if (!authUser) { 
                this.props.history.push(ROUTES.LOGIN);
            }
        });
    }

    render() {
        return (
            <App title="Home">
                <h1>
                    Home Page
                </h1>  
            </App>
        );
    }
}

const HomeRender = withFirebase(Home);

export default withRouter(HomeRender);
