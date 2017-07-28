import React from 'react';
import ReactDom from 'react-dom';
import Welcome from './component/welcome';

class App extends React.Component {
    render() {
        return <Welcome/>;
    }
}
ReactDom.render(
    <App/>,
    document.getElementById("app")
);