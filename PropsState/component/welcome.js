import React from 'react';

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 'Initial',
        }
    }

    handleClick() {
        this.setState({
            val: 'Updated',
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.val}</h1>
                <button onClick={this.handleClick.bind(this)}>Change Input</button>
            </div>
        )
    }
}