import React from 'react';

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 'Webmob',
            val1: 'Technologies',
            array: [
                5,
                4,
                3,
                2,
                1
            ]
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

    render() {
        return (
            <div>
                <button onClick={this.props.message}>Show Alert</button>
            </div>
        )
    }

}