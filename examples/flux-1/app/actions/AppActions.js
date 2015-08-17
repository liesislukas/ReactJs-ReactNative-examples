var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
	create: function(text){
		AppDispatcher.dispatch({
			actionType: AppConstants.ITEM_CREATE,
			text: text
		});
	},
	destroy: function(id){
		AppDispatcher.dispatch({
			actionType: AppConstants.ITEM_DESTROY,
			id: id
		});
	}
}

module.exports = AppActions;