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
	handleOnEnterKeyDown: function(e){
		AppActions.set_domain(e.target.value);
	},
	render: function() {
		return (
			<div style={this.getContainerStyles()}>
				<TextField floatingLabelText="Enter your domain and click „Enter“" 
					fullWidth={true} 
					onEnterKeyDown={this.handleOnEnterKeyDown} 
					defaultValue={this.props.domain} 
					disabled={this.props.domain_locked}
					/>
			</div>
		);
	}
});

module.exports = AppDomain;