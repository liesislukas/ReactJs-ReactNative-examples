'use strict';
var React = require('react');
var injectTapEventPlugin = require('react-tap-event-plugin');
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();

// mui components
var Paper = mui.Paper;
var Table = mui.Table;
var TextField = mui.TextField;
var FlatButton = mui.FlatButton;


var AppDomain = React.createClass({

	getContainerStyles(){
		return {
			width: '450px',
			marginLeft: 'auto',
			marginRight: 'auto',
		}
	},
	render: function() {
		return (
			<div style={this.getContainerStyles()}>
				<TextField floatingLabelText="Enter your domain" fullWidth={true} />
			</div>
		);
	}
});

module.exports = AppDomain;