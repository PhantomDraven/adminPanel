import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { withFirebase } from './firebase';

import Logo from './components/Logo';
import Navigation from './components/Navigation';

const APPState = {
    secure: false,
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {...APPState}
    }

    componentWillMount() {
        document.title = this.props.title;
    }

    componentDidMount() {
        console.log(this.props.firebase.auth.user);
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
