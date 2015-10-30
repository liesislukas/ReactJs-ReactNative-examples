'use strict';
var React = require('react');
var Link = require('react-router').Link;


var Layout = React.createClass({
    render: function () {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Homepage</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Layout;