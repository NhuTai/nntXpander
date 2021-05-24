import React from "react";
import Button from '@material-ui/core/Button';
import Topbar from "./TopBar";

class Dashboard extends React.Component {
    logOut () {
        console.log("aaa")
        localStorage.removeItem('user')
    }
    render() {
        return <div>
            <Topbar currentPath='/'/>
            <h1>This is Main Screen</h1>
            <Button
                    onClick={(e) => this.logOut()}>LogOut</Button>

        </div>
    }
}
export default Dashboard;
