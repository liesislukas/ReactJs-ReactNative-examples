var React = require('react');
var YourNameIs = React.createClass({
    render: function () {
        return (
            <h2>Your name is: {this.props.name}</h2>
        );
    }
});

module.exports = YourNameIs;