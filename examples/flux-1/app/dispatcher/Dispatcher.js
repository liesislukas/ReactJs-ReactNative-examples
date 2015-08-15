var Promise = require('es6-promise').Promise;
var assign = require('object-assign');

var _callbacks = [];
var _promises = [];

var Dispatcher = function(){};

Dispatcher.prototype = assign({}, Dispatcher.prototype, {

	/**
   	* Register a Store's callback so that it may be invoked by an action.
   	* @param {function} callback The callback to be registered.
   	* @return {number} The index of the callback within the _callbacks array.
   	*/

	register: function(callback){
		_callbacks.push(callback);
		return _callbacks.length - 1;
	},

	/**
	* dispatch
	* @param  {object} payload The data from the action.
	*/

	dispatch: function(payload){
		var resolves = [];
		var rejects = [];
		_promises = _callbacks.map(function(_, i){
			return new Promise(function(resolve, reject){
				resolves[i] = resolve;
				rejects[i] = reject;
			});
		});

		_callbacks.forEach(function(callback, i){
			Promise.resolve(callback(payload)).then(function(){
				resolves[i](payload);
			}, function(){
				rejects[i](new Error('#2gf243 Dispatcher callback unsuccessful'));
			});
		});
		_promises = [];
	}
});

module.exports = Dispatcher;