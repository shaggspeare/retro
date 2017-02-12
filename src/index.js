import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import store from './stores/index.js';

import HomeContainer from './containers/HomeContainer';
import LoginFormContainer from './containers/LoginFormContainer';
import ForgotPassword from './components/ForgotPasswordComponent'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Needed for Material-UI
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store} >
        <MuiThemeProvider>
            <Router history={hashHistory}>
                <Route path="/">
                    <IndexRoute component={HomeContainer} />
                    <Route path="sign-in" component={LoginFormContainer} />
                    <Route path="forgot-password" component={ForgotPassword} />
                </Route>
        </Router>
        </MuiThemeProvider>
    </Provider>, document.getElementById('root')
);