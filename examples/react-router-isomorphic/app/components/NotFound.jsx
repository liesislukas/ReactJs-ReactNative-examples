"use strict";
var React = require("react");

var NotFound = React.createClass({
    render: function () {
        return (
            <div>
                <h1 className="title-page">Not Found</h1>

                <p className="description-page">Yikes! The content you were looking for cannot be found.</p>
                <a className="btn-secondary caps" href="/">Return Home</a>
            </div>
        );
    }
});

module.exports = NotFound;