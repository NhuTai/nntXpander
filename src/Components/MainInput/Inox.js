import React from "react";
import Topbar from "./TopBar";
import {withRouter} from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import Product from "./Product";
import lanCan01 from '../home/images/lancan01.jpg';
import lanCan02 from '../home/images/lancan02.png';
import lanCan03 from '../home/images/lancan03.jpg';


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
            <Topbar currentPath='/inox'/>
            <p>
                Danh Sach Sản Phẩm.
            </p>
            <Product MH= '01' price = '2.000.000' imgUrl={lanCan01}></Product>
            <Product MH= '02' price = '2.500.000' imgUrl={lanCan02}></Product>
            <Product MH= '03' price = '1.500.000' imgUrl={lanCan03}></Product>
            
        </div>
    }
}

export default withRouter(withStyles(styles)(Inox));
