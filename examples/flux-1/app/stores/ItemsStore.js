var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _items = {};


function create(text){
	var id = Date.now();
	_items[id] = {
		id: id,
		text: text
	}
}

function destroy(id){
	delete _items[id];
}

var ItemsStore = assign({}, EventEmitter.prototype, {
	getAll: function(){
		return _items;
	},

	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback){
		this.removeChangeListener(CHANGE_EVENT, callback);
	},

	dispatcherIndex: AppDispatcher.register(function(payload){
		var action = payload.action;
		var text;

		switch(action.actionType){
			case AppConstants.ITEM_CREATE:
				text = action.text.trim();
				if(text !== ''){
					create(text);
					ItemsStore.emitChange();
				}
				break;
			case AppConstants.ITEM_DESTROY:
				destroy(action.id);
				ItemsStore.emitChange();
				break;
		}

		return true; // No errors. Needed by Promise in Dispatcher.
	});
});

module.exports = ItemsStore;