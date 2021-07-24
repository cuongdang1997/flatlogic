import App from './../App/App';
import Counter from './../Counter/Counter';
import Repos from './../Repo/Repos';
import Repo from './../Repo/Repo';
import About from './../About/About';
import Search from './../GifSearch/Search';
import Home from './../Home/Home';
import Login from './../Login/Login';
import React from 'react';
import ReactivePlayground from './../Reactive/Reactive.playground';
import NoMatch from './../Navigation/NoMatch';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';

// Material UI
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

import styles from './../../styles/styles.scss';

require('./../../img/favicon.ico');

const routes = (
    <Route path="/" component={App}>
        <IndexRedirect to="login" />
        <Route path="login" component={Login} onEnter={loggedOut} />
        <Route path="app" onEnter={loggedIn} component={Home}>
            <IndexRoute component={About} />
            <Route path="about" component={About} />
            <Route path="search" component={Search} />
            <Route path="counter" component={Counter} />
            <Route path="reactive" component={ReactivePlayground} />
            <Route path="repos" component={Repos}>
                <Route path="repos/:userName/:repoName" component={Repo} />
            </Route>
        </Route>
        <Route path="*" component={NoMatch} />
    </Route>
)

function loginStatus() {
    if (localStorage.getItem('loggedIn') === null) {
        return false;
    } else {        
        return localStorage.getItem('loggedIn') === 'true'
    }
}

function loggedOut(nextState, replace) {
    if (loginStatus()) {
        replace({
            pathname: '/app'
        })
    }
}

function loggedIn(nextState, replace) {
    if (!loginStatus()) {
        replace({
            pathname: '/login'
        })
    }
}

const Root = () => (
    <MuiThemeProvider>
        <Router history={browserHistory}>
            {routes}
        </Router>
    </MuiThemeProvider>
);

export default Root;