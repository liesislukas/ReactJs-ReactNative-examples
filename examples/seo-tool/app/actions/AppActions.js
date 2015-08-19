var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/ActionConstants');

var AppActions = {
	add_keyword: function(keyword){
		AppDispatcher.dispatch({
			actionType: AppConstants.ADD_KEYWORD,
			keyword: keyword
		});
	},
	set_domain: function(domain){
		AppDispatcher.dispatch({
			actionType: AppConstants.SET_DOMAIN,
			domain: domain
		});
	}
};

module.exports = AppActions;
