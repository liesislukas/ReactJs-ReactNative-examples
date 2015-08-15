var React = require('react'),
    injectTapEventPlugin = require('react-tap-event-plugin'),
    mui = require('material-ui'),
    ThemeManager = new mui.Styles.ThemeManager(),
    AppBar = mui.AppBar,
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    AppLeftNav = require('./AppLeftNav.react');

ThemeManager.setTheme(ThemeManager.types.LIGHT);
injectTapEventPlugin();


App = React.createClass({

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },
    handleLeftIconButtonTouchTap: function () {
        this.refs.AppLeftNav.toggle();
    },
    render: function () {
        return (
            <div>
                <AppBar onLeftIconButtonTouchTap={this.handleLeftIconButtonTouchTap} title="Company name"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                <AppLeftNav ref="AppLeftNav"/>

                <div style={{width: 500+'px', margin: '0 auto'}}>
                    <RouteHandler />
                </div>
            </div>
        );
    }
});

module.exports = App;