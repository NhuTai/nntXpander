import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import {Link, withRouter} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Menu from './Menu';

const styles = theme => ({
    appBar: {
        position: 'relative',
        boxShadow: 'none',
        borderBottom: `1px solid ${theme.palette.grey['100']}`,
        backgroundColor: theme.palette.primary.main,
        color: 'white'

    },
    inline: {
        display: 'inline'
    },
    flex: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            // justifyContent: 'space-evenly',
            alignItems: 'center'
        }
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    },
    productLogo: {
        display: 'inline-block',
        borderLeft: `1px solid ${theme.palette.grey['A100']}`,
        marginLeft: 32,
        paddingLeft: 24,
        [theme.breakpoints.up('md')]: {
            paddingTop: '1.5em'
        }
    },
    tagline: {
        display: 'inline-block',
        marginLeft: 10,
        [theme.breakpoints.up('md')]: {
            paddingTop: '0.8em'
        }
    },
    iconContainer: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    iconButton: {
        float: 'right'
    },
    tabContainer: {
        marginLeft: 32,
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    tabItem: {
        paddingTop: 20,
        paddingBottom: 20,
        minWidth: 'auto'
    },
    signout: {
        position: 'absolute',
        right: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
    signoutButton: {
        backgroundColor: 'white'
    }
})

class Topbar extends Component {

    state = {
        value: 0,
        menuDrawer: false
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    mobileMenuOpen = (event) => {
        this.setState({menuDrawer: true});
    }

    mobileMenuClose = (event) => {
        this.setState({menuDrawer: false});
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    current = () => {
        if (this.props.currentPath === '/') {
            return 0
        }
        if (this.props.currentPath.startsWith('/hello')) {
            return 1
        }
        if (this.props.currentPath.startsWith('/login')) {
            return 2
        }

    }

    signout() {
        window.location.reload();
    }

    render() {

        const {classes} = this.props;

        let content;
        content = <div className={classes.tabContainer}>
            <SwipeableDrawer anchor="left" open={this.state.menuDrawer}
                             onClose={this.mobileMenuClose} onOpen={this.mobileMenuOpen}>
                <AppBar title="Menu"/>
                <List>
                    {Menu.map((item, index) => (
                        <ListItem component={Link} to={{
                            pathname: item.pathname,
                            search: this.props.location.search
                        }} button key={item.label}>
                            <ListItemText primary={item.label}/>
                        </ListItem>
                    ))}
                </List>
            </SwipeableDrawer>
            <Tabs
                value={this.current() || this.state.value}
                onChange={this.handleChange}
            >

                {
                    Menu.map((item, index) => (
                        <Tab key={index} component={Link}
                             to={{
                                 pathname: item.pathname,
                                 search: this.props.location.search
                             }}
                             classes={{root: classes.tabItem}} label={item.label}/>
                    ))
                }

            </Tabs>
        </div>
        return (
            <AppBar position="absolute" color="default" className={classes.appBar}>
                <Toolbar>
                    <Grid container spacing={24} alignItems="baseline">
                        <Grid item xs={12} className={classes.flex}>
                            <div className={classes.iconContainer}>
                                <IconButton onClick={this.mobileMenuOpen} className={classes.iconButton} color="inherit"
                                            aria-label="Menu">
                                    <MenuIcon/>
                                </IconButton>
                            </div>
                            <div className={classes.inline}>
                                <Typography variant="h6" color="inherit" noWrap>
                                    <Link to='/' className={classes.link}>
                                        <span className={classes.tagline}>NNT Expander</span>
                                    </Link>
                                </Typography>
                            </div>
                            {!this.props.noTabs && (
                                <React.Fragment>
                                    <div className={classes.productLogo}>
                                    </div>

                                    {content}
                                    <div className={classes.signout}>
                                        <Button className={classes.signoutButton} onClick={this.signout}>Sign
                                            Out</Button>
                                    </div>
                                </React.Fragment>
                            )}

                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withRouter(withStyles(styles)(Topbar))
