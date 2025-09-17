import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render((
    <App> </App>), 
    document.getElementById("root"));

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
            </div>
        );
    }
}