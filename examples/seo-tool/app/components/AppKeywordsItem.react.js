var React = require('react');
var mui = require('material-ui');
var AppActions = require('../actions/AppActions');

// mui components
var ListItem = mui.ListItem;
var IconButton = mui.IconButton;

var AppKeywordsItem = React.createClass({
	getIcon: function(){
		return <IconButton iconClassName="material-icons">autorenew</IconButton>; 
	},
	getText: function(){
		var text = this.props.keyword + ' (Google results page: ' + this.props.position + ')';
		return text;
	},
	getIsDisabled: function(){
		if(this.props.position != undefined){
			return true;
		}
		return false;
	},
	handleClick: function(){
		console.log('click!');
		//AppActions.detect_google_position(this.props.keyword, this.props.domain);
	},
	render: function() {
		return (
			<ListItem disabled={this.getIsDisabled()} primaryText={this.getText()} leftIcon={this.getIcon()} />
		);
	}

});

module.exports = AppKeywordsItem;	 