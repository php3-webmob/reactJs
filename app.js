import React from 'react';
import ReactDom from 'react-dom';
import Welcome from './component/welcome';
import Header from './component/header';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerTitle: "Welcome to React"
        }
    }

    //  Welcome Component Alert usign Props
    alert = () => {
        alert("Welcome to react")
    };

    //  Component Rendering
    render() {
        return <Welcome message={this.alert}/>;
    }
}
ReactDom.render(
    <App/>,
    document.getElementById("app")
);