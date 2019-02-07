import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Firebase, { FirebaseContext } from './firebase';

import ROUTES from './pages/routes';

import Home from './pages/Home';
import Login from './pages/Login';
import './style.css';
import 'antd/dist/antd.css';

/** Removed due to test environment */
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <BrowserRouter>
            <React.Fragment>
                <Route exact path={ROUTES.HOME} component={Home} />
                <Route path={ROUTES.LOGIN} component={Login} />
            </React.Fragment>
        </BrowserRouter>
    </FirebaseContext.Provider>
, document.getElementById('root'));

/** Removed due to test environment */
// serviceWorker.register();
