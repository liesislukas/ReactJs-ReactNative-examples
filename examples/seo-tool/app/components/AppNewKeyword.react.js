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

var AppNewKeyword = React.createClass({

	getContainerStyles(){
		return {
			width: '450px',
			marginLeft: 'auto',
			marginRight: 'auto',
		}
	},
	handleSubmit: function(e){
		AppActions.add_keyword(this.refs.new_keyword_input.getValue());
		this.refs.new_keyword_input.clearValue();
	},
	render: function() {
		return (
			<div style={this.getContainerStyles()}>
				<TextField ref="new_keyword_input" floatingLabelText="Enter new keyword and click „Enter“ to start position scanner" onKeyDown={this.handleKeyDown} fullWidth={true} onEnterKeyDown={this.handleSubmit} />
			</div>
		);
	}
});

module.exports = AppNewKeyword;