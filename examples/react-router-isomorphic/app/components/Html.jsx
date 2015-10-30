"use strict";
var React = require("react");
var HeadParams = require("../libs/HeadParams.jsx");

// Configure these
var GA_ACCOUNT = "UA-XXXXXXXX-Y";
var GA_OPTIONS = {
    cookieDomain: "auto"
};

// From: https://developers.google.com/analytics/devguides/collection/analyticsjs/advanced
var gaSnippet = "window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;"
    + "ga('create', '" + GA_ACCOUNT + "', " + JSON.stringify(GA_OPTIONS) + ");"
    + "ga('send', 'pageview');";

var Html = React.createClass({
    propTypes: {
        headParams: React.PropTypes.instanceOf(HeadParams)
    },
    render: function() {
        return (
            <html>
            <head>
                <title>{this.props.headParams.title}</title>

                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <meta name="description" content={this.props.headParams.description} />
                <meta name="robots" />
                <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0, width=device-width" />

                <link rel="shortcut icon" type="image/png" href="/favicon.png" sizes="16x16 32x32 64x64" />

                <script src="./client.js" async></script>
            </head>
            <body>
                <div id="app">{this.props.html}</div>
            </body>
            </html>
        );
    }
});

module.exports = Html;