import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Firebase, { FirebaseContext } from './firebase';

import Home from './pages/Home';
import Login from './pages/Login';

/** Removed due to test environment */
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <BrowserRouter>
            <React.Fragment>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
            </React.Fragment>
        </BrowserRouter>
    </FirebaseContext.Provider>
, document.getElementById('root'));

/** Removed due to test environment */
// serviceWorker.register();
