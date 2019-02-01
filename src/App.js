import React, { Component } from 'react';

import Logo from './components/Logo';
import Navigation from './components/Navigation';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        document.title = this.props.title;
    }

    render() {
        return (
            <div className="App">
                <Logo />
                <Navigation />
            </div>
        );
    }
}

export default App;
