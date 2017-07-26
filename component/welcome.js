import React from 'react';

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerMessage: 'This is Parent Alert',
        }
    }

    handleClick() {
        this.setState({
            val: 'Technologies',
            val1: 'Webmob'
        })
    }

    /*render() {
     return (
     <div>
     <h1>{this.state.val}</h1>
     <h3>{this.state.val1}</h3>
     <button onClick={this.handleClick.bind(this)}>Change Input</button>
     <ul>
     {
     this.state.array.map(function (item, i) {
     return <li key={i}>{item}</li>
     })
     }
     </ul>
     </div>
     )
     }*/
    Change() {
        this.props.parentMessage(this.state.headerMessage)
    }

    render() {
        return (
            <div>
                <button onClick={this.props.message}>Show Alert</button>
                <button onClick={this.Change.bind(this)}>Parent Message</button>
            </div>
        )
    }

}