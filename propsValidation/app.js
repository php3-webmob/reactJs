import React from 'react';
import ReactDom from 'react-dom';
import Welcome from './component/welcome';

class App extends React.Component {
    //  Component Rendering
    render() {
        return <div>
            <Welcome />
        </div>
    }
}

ReactDom.render(
    <App/>,
    document.getElementById("app")
);