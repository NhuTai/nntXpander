import React from "react";
import Button from '@material-ui/core/Button';

class Dashboard extends React.Component {
    logOut () {
        console.log("aaa")
        localStorage.removeItem('user')
    }
    render() {
        return <div><h1>This is Main Screen test</h1>
            <Button
                    onClick={(e) => this.logOut()}>Confirm</Button>

        </div>
    }
}
export default Dashboard;
