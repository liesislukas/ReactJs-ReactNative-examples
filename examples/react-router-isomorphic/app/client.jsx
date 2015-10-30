import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

//for dev tools
window.React = React;

var routes = require("./components/Routes.jsx");
var HeadParams = require("./libs/HeadParams.jsx");
import createBrowserHistory from 'history/lib/createBrowserHistory'

render(<Router history={createBrowserHistory()}>{routes}</Router>, document.getElementById('app'))
