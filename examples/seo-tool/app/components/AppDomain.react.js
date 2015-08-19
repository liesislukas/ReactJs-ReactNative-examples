'use strict';
var React = require('react');
var injectTapEventPlugin = require('react-tap-event-plugin');
var mui = require('material-ui');

// mui components
var Paper = mui.Paper;
var Table = mui.Table;
var TextField = mui.TextField;
var FlatButton = mui.FlatButton;

// app components
var AppActions = require('../actions/AppActions');

var AppDomain = React.createClass({

	getContainerStyles(){
		return {
			width: '450px',
			marginLeft: 'auto',
			marginRight: 'auto',
		}
	},
	handleChange: function(e){
		AppActions.set_domain(e.target.getValue());
	},
	render: function() {
		return (
			<div style={this.getContainerStyles()}>
				<TextField floatingLabelText="Enter your domain" fullWidth={true} onChange={this.handleChange} value={this.props.domain} />
			</div>
		);
	}
});

module.exports = AppDomain;