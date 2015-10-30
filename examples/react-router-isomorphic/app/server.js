"use strict";

var express = require('express');
var app = express();
var parser = require('body-parser');

var React = require('react');
var Router = require('react-router');
var HeadParams = require("./libs/HeadParams.jsx");
var headParams = new HeadParams();
var renderToString = require('react-dom/server').renderToString;

var ReactRouterMatch = require('react-router').match;
var ReactRouterRoutingContext = require('react-router').RoutingContext;

var routes = require("./components/Routes.jsx");
var Html = require("./components/Html.jsx");
//var htmlComponent = React.createFactory();

app.use(express.static(__dirname + '/../tmp'));
app.use((req, res) => {

    ReactRouterMatch({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {


            let html = renderToString(<Html headParams={headParams} clientRead={true} html={<ReactRouterRoutingContext {...renderProps} />}></Html>);

            res.status(200).send(html);
        } else {
            res.status(404).send('Not found');
        }
    });


});

app.set('port', process.env.PORT || 3000);

var server = app.listen(function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});