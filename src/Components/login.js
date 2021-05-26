import React from "react";
import Button from "@material-ui/core/Button";
import Topbar from "./MainInput/TopBar";
import {withRouter} from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.grey['100'],
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundPosition: '0 400px',
        paddingBottom: 200
    },
    signoutButton: {
        paddingLeft: 10,
        backgroundColor: 'white'
    },
    paper: {
        padding: theme.spacing.unit * 3,
        textAlign: 'left',
        color: theme.palette.text.secondary
    }
})
class Login extends React.Component {
    logIn() {
        localStorage.setItem('user', 'tai')
    }
    render() {
        const {classes} = this.props;
        return <div className={[classes.root, classes.paper]}>
            <Topbar currentPath='/login'/>
            <h1>Hello Logined</h1>
            <Button className={classes.signoutButton}
                onClick={(e) => this.logIn()}>Login</Button>

        </div>
    }
}
export default withRouter(withStyles(styles)(Login));
