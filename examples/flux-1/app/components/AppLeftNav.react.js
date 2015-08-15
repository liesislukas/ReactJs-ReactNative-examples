'use strict'
var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');

var MenuItem = mui.MenuItem;
var LeftNav = mui.LeftNav;
var Styles = mui.Styles;

var Colors = Styles.Colors;
var Spacing = Styles.Spacing;
var Typography = Styles.Typography;

var menuItems = [
    {route: 'page-one', text: 'Page one'},
    {route: 'page-two', text: 'Page two'},
    {route: 'page-three', text: 'Page three'}
];


class AppLeftNav extends React.Component {

    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this._getSelectedIndex = this._getSelectedIndex.bind(this);
        this._onLeftNavChange = this._onLeftNavChange.bind(this);
        this._onHeaderClick = this._onHeaderClick.bind(this);
    }

    getStyles() {
        return {
            cursor: 'pointer',
            //.mui-font-style-headline
            fontSize: '24px',
            color: Typography.textFullWhite,
            lineHeight: Spacing.desktopKeylineIncrement + 'px',
            fontWeight: Typography.fontWeightLight,
            backgroundColor: Colors.cyan500,
            paddingLeft: Spacing.desktopGutter,
            paddingTop: '0px',
            marginBottom: '8px'
        };
    }

    render() {
        var header = (
            <div style={this.getStyles()} onTouchTap={this._onHeaderClick}>
                Homepage
            </div>
        );

        return (
            <LeftNav
                ref="leftNav"
                docked={false}
                isInitiallyOpen={false}
                header={header}
                menuItems={menuItems}
                selectedIndex={this._getSelectedIndex()}
                onChange={this._onLeftNavChange}/>
        );
    }

    toggle() {
        this.refs.leftNav.toggle();
    }

    _getSelectedIndex() {
        var currentItem;

        for (var i = menuItems.length - 1; i >= 0; i--) {
            currentItem = menuItems[i];
            if (currentItem.route && this.context.router.isActive(currentItem.route)) return i;
        }
    }

    _onLeftNavChange(e, key, payload) {
        this.context.router.transitionTo(payload.route);
    }

    _onHeaderClick() {
        this.context.router.transitionTo('/');
        this.refs.leftNav.close();
    }

}

AppLeftNav.contextTypes = {
    router: React.PropTypes.func
};

module.exports = AppLeftNav;