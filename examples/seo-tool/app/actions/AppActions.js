var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionConstants = require('../constants/ActionConstants');

var AppActions = {
	add_keyword: function(keyword){
		AppDispatcher.dispatch({
			actionType: ActionConstants.ADD_KEYWORD,
			keyword: keyword
		});
	},
	set_domain: function(domain){
		AppDispatcher.dispatch({
			actionType: ActionConstants.SET_DOMAIN,
			domain: domain
		});
	}
};

module.exports = AppActions;
