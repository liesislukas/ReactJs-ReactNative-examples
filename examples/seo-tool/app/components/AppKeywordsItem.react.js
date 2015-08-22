var React = require('react');
var mui = require('material-ui');
var AppActions = require('../actions/AppActions');

// mui components
var ListItem = mui.ListItem;
var IconButton = mui.IconButton;

var AppKeywordsItem = React.createClass({
	getIcon: function(){
		if(this.props.position != undefined){
			return <IconButton iconClassName="material-icons">done</IconButton>; 
		} else {
			return <IconButton iconClassName="material-icons">autorenew</IconButton>; 
		}
	},
	getText: function(){
		var text = this.props.keyword + ' (Google results page: ' + this.props.position + ')';
		return text;
	},
	render: function() {
		return (
			<ListItem disabled={true} primaryText={this.getText()} leftIcon={this.getIcon()} />
		);
	}

});

module.exports = AppKeywordsItem;	 