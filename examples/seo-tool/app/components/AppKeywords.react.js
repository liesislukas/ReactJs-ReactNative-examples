'use strict';
var React = require('react');
var injectTapEventPlugin = require('react-tap-event-plugin');
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();

ThemeManager.setTheme(ThemeManager.types.LIGHT);
injectTapEventPlugin();

// mui components
var TextField = mui.TextField;
var FlatButton = mui.FlatButton;
var List = mui.List;
var ListItem = mui.ListItem;
var IconButton = mui.IconButton;


var AppKeywords = React.createClass({
	childContextTypes: {
		muiTheme: React.PropTypes.object
	},
	getChildContext(){
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		}
	},
	getIcon: function(){
		return <IconButton iconClassName="material-icons">done</IconButton>; 
	},
	render: function() {
		return (
			<div>
				<List>
					<ListItem primaryText="keyword 1" leftIcon={this.getIcon()} />
					<ListItem primaryText="keyword 2" leftIcon={this.getIcon()} />
					<ListItem primaryText="keyword 3" leftIcon={this.getIcon()} />
				</List> 
			</div>
		);
	}
});


module.exports = AppKeywords;
