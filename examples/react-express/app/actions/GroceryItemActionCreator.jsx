var dispatcher = require('../dispatcher.js');

module.exports = {
	add: function(item){
		dispatcher.dispatch({
			payload: item,
			type: 'grocery-item:add'
		});
	},

	delete: function(item){
		dispatcher.dispatch({
			payload: item,
			type: 'grocery-item:delete'
		});
	},

	unbuy: function(item){
		dispatcher.dispatch({
			payload: item,
			type: 'grocery-item:unbuy'
		});
	},

	buy: function(item){
		dispatcher.dispatch({
			payload: item,
			type: 'grocery-item:buy'
		});
	}
};