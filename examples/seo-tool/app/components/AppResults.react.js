'use strict';
var React = require('react');
var injectTapEventPlugin = require('react-tap-event-plugin');
var mui = require('material-ui');

// mui components
var Table = mui.Table;

var AppKeywords = React.createClass({
	render: function() {
		var headersData = {
			keyword: {
				content: 'Keyword'
			},
			position: {
				content: 'Position'
			}
		};

		var rowData = [
			{keyword: {content: 'keywordas 1'}, position: {content: '1'}}
		];

		var columnOrderData = ['keyword', 'position'];

		return (
			<div>
				<Table displayRowCheckbox={false} displaySelectAll={false} selectable={false} rowData={rowData} headerColumns={headersData} columnOrder={columnOrderData} /> 
			</div>
		);
	}
});


module.exports = AppKeywords;
