"use strict";
var Router = require("react-router");

var Layout = require("./Layout.jsx");
var Home = require("./Home.jsx");
var Contact = require("./Contact.jsx");
var Login = require("./Login.jsx");
var NotFound = require("./NotFound.jsx");

var React = require("react");
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

var routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={Home}/>

        <Route path="contact" component={Contact}/>
        <Route path="login" component={Login}/>

        <Route path="*" component={NotFound}/>
    </Route>
);

module.exports = routes;