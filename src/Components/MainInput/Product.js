import React from "react";
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
class Product extends React.Component {


    render() {
        const {classes} = this.props;
        return <div className={[classes.root, classes.paper]}>

            <img src={this.props.imgUrl} alt={this.props.name}/>
            <h2> Giá: {this.props.price} - Mã Hàng: {this.props.MH}</h2>
        </div>
    }
}

Product.defaultProps = {
    price: '1.000.000',
    name: 'Lan Can',
    imgU: '../home/images/lancan01.jpg',
    MH: 'lc01'
};

export default withRouter(withStyles(styles)(Product));
