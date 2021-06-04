import React from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import Dashboard from "./Components/MainInput/Dashboard";
import {PrivateRoute} from "./Components/MainInput/PrivateRoute";
import ScrollToTop from "./Components/MainInput/ScrollToTop";
import Hello from "./Components/Hello";
import Login from "./Components/login";
import Inox from "./Components/MainInput/Inox";
import {render} from "@testing-library/react";

const Rounter = () => {
    render()
    return <BrowserRouter>
        <ScrollToTop>
            <Switch>
                <PrivateRoute exact path='/' component={Dashboard}/>
                <Route exact path='/welcome' component={Hello}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/inox' component={Inox}/>
            </Switch>
        </ScrollToTop>
    </BrowserRouter>

}
export default Rounter;
