import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { withFirebase } from './firebase';

import Logo from './components/Logo';
import Navigation from './components/Navigation';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuth: false,
        }
    }

    componentWillMount() {
        document.title = this.props.title;
    }

    componentDidMount() {
        console.log(this.props.firebase.database);
        this.props.firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? this.setState({ isAuth: authUser }, this.redirectToSecure(true))
                : this.setState({ isAuth: null },     this.redirectToSecure(false));
        });
    }

    redirectToSecure = (active) => {
        /**
         * 1)   secure page and   secured user
         * 2)   secure page and UNsecured user --> to Login
         * 3) UNsecure page and   secured user --> to Admin Homepage
         */
        if (this.props.secure && active) {
            // We are in a secure page
            // Doing nothing
        } else if (this.props.secure && !active) {
            // TODO: Redirect to Login page
        } else if (!this.props.secure && active) {
            // TODO: Redirect to Home page
        }
    }

    render() {
        return (
            <React.Fragment>
                <header className="header">
                    <Logo />
                    <Navigation />
                </header>
                <main className="main">
                    { this.props.children }
                </main>
                <footer className="footer">
                </footer>
            </React.Fragment>
        );
    }
}

const AppRender = withFirebase(App);

export default withRouter(AppRender);
