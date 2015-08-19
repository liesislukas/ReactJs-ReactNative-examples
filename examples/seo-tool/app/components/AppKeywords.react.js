'use strict';
var React = require('react');
var mui = require('material-ui');

// mui components
var TextField = mui.TextField;
var FlatButton = mui.FlatButton;
var List = mui.List;
var ListItem = mui.ListItem;
var IconButton = mui.IconButton;

// app components
var AppKeywordsItem = require('./AppKeywordsItem.react');

var AppKeywords = React.createClass({
	getListItems: function(){
		var items = this.props.keywords.map(function(keyword){
			return <AppKeywordsItem keyword={keyword} />
		});
		return items;		
	},
	render: function() {
		return (
			<div>
				<List>
				{this.getListItems()}
				</List> 
			</div>
		);
	}
});


module.exports = AppKeywords;
