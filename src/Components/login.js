import React from "react";
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import Topbar from "./MainInput/TopBar";
import {withRouter} from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import ReactLoading from 'react-loading';
import '../App.css';

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
    },
    button: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.grey[100]
    }
})

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            show: true,
            fail: true,
            name: '',
            logined: true
        }

        this.handleChange = this.handleChange.bind(this);
    }

    logIn() {

        const {username, password} = this.state;
        console.log("--------", username, '---', password);

        var axios = require('axios');
        var data = JSON.stringify({
            "name": username,
            "pass": password
        });

        var config = {
            method: 'post',
            url: 'https://vercel-mu-seven.vercel.app/users/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        this.setState({
            show: false,
            fail: true
        });
        axios(config)
            .then(
                response => {
                    console.log(response.data);
                    if (response.data === 1) {
                        localStorage.setItem('user', username);
                        this.setState({logined: true});
                    } else {
                        this.setState({fail: false})
                    }
                    this.setState({
                        show: true
                    });
                })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidMount() {
        const user = localStorage.getItem("user");
        console.log(typeof user, '-----');
        if(user === null){
            console.log("nullll");
            this.setState({logined: false});
        }

    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
        console.log(this.state);
    }

    render() {
        const {classes} = this.props;
        return <div className={[classes.root, classes.paper]}>
            <Topbar currentPath='/login'/>

            <div className="loadingCenter" hidden={this.state.show}>
                <ReactLoading type="spin" color="#fff" height={167} width={175}/>
            </div>
            <div hidden={this.state.logined}>
                <h1>You need to login</h1>
                <form className={classes.form} onSubmit={this.logIn}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Input id="username" name="username" autoComplete="username" autoFocus
                               onChange={this.handleChange}/>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input name="password" type="password" id="password" autoComplete="current-password"
                               onChange={this.handleChange}/>
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Remember me"
                    />
                </form>

                <h4 hidden={this.state.fail}>User name or Pass word not correct!</h4>
                <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={(e) => this.logIn()}
                >
                    Login
                </Button>
            </div>
        </div>
    }
}

export default withRouter(withStyles(styles)(Login));
