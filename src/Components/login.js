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
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }
    logIn() {
        console.log('tai121212 - Nhutai::073')
        if(this.state.username === 'tai121212' && this.state.password === 'Nhutai::073') {
            localStorage.setItem('user', 'tai')
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
            <h1>It seems you need to login</h1>
            <form className={classes.form} onSubmit={this.handleSubmit}>
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
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={(e) => this.logIn()}
                >
                    Login
                </Button>
            </form>

        </div>
    }
}
export default withRouter(withStyles(styles)(Login));
