var React = require('react'),
    Router = require('react-router'),
    DefaultRoute = Router.DefaultRoute,
    Route = Router.Route,
    PageHome = require('./components/PageHome.react'),
    PageOne = require('./components/PageOne.react'),
    PageTwo = require('./components/PageTwo.react'),
    PageThree = require('./components/PageThree.react'),
    App = require('./components/App.react');

var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="home" path="/" handler={PageHome} />
        <Route name="page-one" handler={PageOne}/>
        <Route name="page-two" handler={PageTwo}/>
        <Route name="page-three" handler={PageThree}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler />, document.body);
});
