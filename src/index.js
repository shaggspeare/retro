import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import store from './stores/index.js';

import Home from './features/Home/components/Home';
import LoginFormContainer from './features/Login/components/LoginFormContainer';
import SayContainer from './features/StepSay/components/SayContainer';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Needed for Material-UI
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store} >
        <MuiThemeProvider>
            <Router history={hashHistory}>
                <Route path="/">
                    <IndexRoute component={Home} />
                    <Route path="sign-in" component={LoginFormContainer} />
                    <Route path="say" component={SayContainer} />
                </Route>
        </Router>
        </MuiThemeProvider>
    </Provider>, document.getElementById('root')
);