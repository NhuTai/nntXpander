import React from "react";
import Topbar from "./TopBar";
import {withRouter} from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import YoutubeEmbed from "./YoutubeEmbed";


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

class Inox extends React.Component {


    render() {
        const {classes} = this.props;
        return <div className={[classes.root, classes.paper]}>
            <Topbar currentPath='/duocsu'/>
            <p>
                Chú Dược Sư.
            </p>
            <YoutubeEmbed embedId="Q4WS1GHAXnk" />
        </div>
    }
}

export default withRouter(withStyles(styles)(Inox));
