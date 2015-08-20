var React = require('react');
var mui = require('material-ui');

// mui components
var ListItem = mui.ListItem;
var IconButton = mui.IconButton;

var AppKeywordsItem = React.createClass({
	getIcon: function(){
		return <IconButton iconClassName="material-icons">autorenew</IconButton>; 
	},
	render: function() {
		return (
			<ListItem primaryText={this.props.keyword} leftIcon={this.getIcon()} />
		);
	}

});

module.exports = AppKeywordsItem;	 