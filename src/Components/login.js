import React from "react";
import Button from "@material-ui/core/Button";
import Topbar from "./MainInput/TopBar";
class Login extends React.Component {
    logIn() {
        localStorage.setItem('user', 'tai')
    }
    render() {
        return <div>
            <Topbar currentPath='/'/>
            <h1>Hello Logined</h1>
            <Button
                onClick={(e) => this.logIn()}>Login</Button>

        </div>
    }
}
export default Login;
