import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Dashboard from "./Components/MainInput/Dashboard";
import {PrivateRoute} from "./Components/MainInput/PrivateRoute";
import ScrollToTop from "./Components/MainInput/ScrollToTop";
import Hello from "./Components/Hello";
import Login from "./Components/login";
export default () => (
    <BrowserRouter>
        <ScrollToTop>
            <Switch>
                <PrivateRoute exact path='/' component={ Dashboard } />
                <Route exact path='/hello' component= {Hello} />
                <Route exact path='/login' component= {Login} />
            </Switch>
        </ScrollToTop>
    </BrowserRouter>
)
