import React from "react";
class Login extends React.Component {
    componentDidMount() {
        localStorage.setItem('user', 'tai')
    }
    render() {
        return <h1>Hello Logined</h1>
    }
}
export default Login;
