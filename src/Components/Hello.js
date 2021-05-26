import React from "react";
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
class Hello extends React.Component {


    render() {
        const {classes} = this.props;
        return <div className={[classes.root, classes.paper]}>
            <Topbar currentPath='/welcome'/>
            <h1>Hello {this.props.name}!</h1>
            <p>
                Nice to meet you here. Hope you well have nice time here.
            </p>
        </div>
    }
}

Hello.defaultProps = {
    name: "There",
};
export default withRouter(withStyles(styles)(Hello));
