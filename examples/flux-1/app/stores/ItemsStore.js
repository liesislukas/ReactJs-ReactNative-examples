var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _items = [
	{
		id: 1,
		text: 'Example Item'
	}
];	

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
	addChangeListener: function(cb){
		this.on(CHANGE_EVENT, cb);
	},
	removeChangeListener: function(cb){
		this.removeListener(CHANGE_EVENT, cb);
	}

});

AppDispatcher.register(function(action){
	switch(action.actionType){
		case AppConstants.ITEM_CREATE:
			create(action.text);
			ItemsStore.emitChange();
		break;
		case AppConstants.ITEM_DESTROY: 
			destroy(action.id);
			ItemsStore.emitChange();
		break;
	}
});

module.exports = ItemsStore;