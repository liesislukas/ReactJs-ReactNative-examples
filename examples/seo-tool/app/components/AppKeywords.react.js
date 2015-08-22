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
		var positions = this.props.positions;
		var domain = this.props.domain;
		var items = this.props.keywords.map(function(keyword){
			var position = undefined;
			if(positions[keyword]){
				position = positions[keyword];
			}
			return <AppKeywordsItem domain={domain} keyword={keyword} key={keyword} position={position} />
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
