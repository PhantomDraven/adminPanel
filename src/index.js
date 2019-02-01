import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';

/** Removed due to test environment */
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <Route exact path="/" component={Home} />
            <Route path="/Login" component={Login} />
        </React.Fragment>
    </BrowserRouter>
, document.getElementById('root'));

/** Removed due to test environment */
// serviceWorker.register();
