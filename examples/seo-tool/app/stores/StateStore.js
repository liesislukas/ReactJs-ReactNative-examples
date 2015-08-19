var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ActionConstants = require('../constants/ActionConstants');
var assign = require('object-assign');
var Immutable = require('immutable');

var CHANGE_EVENT = 'change';

var _state = Immutable.Map({
	domain: 'example.com',
	keywords: Immutable.OrderedMap({
		0: 'foo', 
		1: 'bar' 
	}),
	positions: Immutable.Map({
		0: Immutable.Map(),
		1: Immutable.Map(),
	})
});

var _history = [];

function add_keyword(keyword){
	_history.push(_state);
	var id = Date.now();
	_state = _state.keywords.set(id, keyword);
}

function set_domain(domain){
	_history.push(_state);
	_state.set('domain', domain);
}

/*
site - Google.com | Google.lt | Google.de or any other Google local site
*/
function set_keyword_position(keyword, site, position){

}

var StateStore = assign({}, EventEmitter.prototype, {
	getState: function(){
		return _state;
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
		case ActionConstants.SET_DOMAIN:
			set_domain(action.domain);
			StateStore.emitChange();
			break;
		case ActionConstants.ADD_KEYWORD:
			add_keyword(action.keyword);
			StateStore.emitChange();
			break;
	}
});

module.exports = StateStore;
