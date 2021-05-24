import React from "react";
import Topbar from "./MainInput/TopBar";

class Hello extends React.Component {

    render() {
        return <div>
            <Topbar currentPath='/'/>
            <h1>Hello {this.props.name}</h1>
        </div>
    }
}

Hello.defaultProps = {
    name: "world",
};
export default Hello;
