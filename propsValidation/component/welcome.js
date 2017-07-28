import React from 'react';

export default class Welcome extends React.Component {
    //  Rendering The React Component
    render() {
        return (
            <div>
                <h3>Array: {this.props.propArray}</h3>
                <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
                <h3>Validation Func : { this.props.propFunc(null)}</h3>
            </div>
        );
    }
}

//  propTyes is a default method to of validation
Welcome.propTypes = {
    propArray: React.PropTypes.array.isRequired,
    propBool: React.PropTypes.bool.isRequired,
    propFunc: React.PropTypes.func,
};

//  Defaultprops used given default value of props
Welcome.defaultProps = {
    propArray: [1, 2, 3, 4, 5],
    propBool: null,
    propFunc: function (x) {
        return x
    }
};