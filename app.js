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
        alert("This is Own Alert")
    };

    parentFunction(req) {
        this.setState({
            headerTitle: req
        })
    };

    //  Component Rendering
    render() {
        return <div>
            <Header message={this.state.headerTitle}/>
            <br/>
            <Welcome message={this.alert} parentMessage={this.parentFunction.bind(this)}/>
        </div>
    }
}
ReactDom.render(
    <App/>,
    document.getElementById("app")
);