var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ActionConstants = require('../constants/ActionConstants');
var assign = require('object-assign');
var Immutable = require('immutable');
var AppActions = require('../actions/AppActions');

var CHANGE_EVENT = 'change';

var _state = Immutable.Map({
		domain: '',
		domain_locked: false,
		keywords: [],
		positions: []
	});

function add_keyword(keyword){
	var id = Date.now();
	var _keywords = _state.get('keywords');
	keyword = keyword.trim();
	if(keyword != '' && _keywords.indexOf(keyword) < 0){
		_keywords.push(keyword);
		_state = _state.set('keywords',_keywords);
		AppActions.detect_google_position(keyword, _state.get('domain'));
		return true;
	}
	return false;
}

function set_keyword_position(keyword, position){
	var id = Date.now();
	var _keywords = _state.get('keywords');
	
	if(_keywords.indexOf(keyword) > -1){
		var _positions = _state.get('positions');
		_positions[keyword] = position;	
		_state = _state.set('positions', _positions);
		return true;
	}

	return false;
} 

function set_domain(domain){
	_state = _state.set('domain', domain);
	_state = _state.set('domain_locked', true);
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
			if(add_keyword(action.keyword)){
				StateStore.emitChange();				
			}
			break;
		case ActionConstants.KEYWORD_PAGE_DETECTED:
				set_keyword_position(action.keyword, action.page);
				StateStore.emitChange();				
			break;
	}
});

module.exports = StateStore;
