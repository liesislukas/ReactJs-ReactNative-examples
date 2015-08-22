var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionConstants = require('../constants/ActionConstants');

var AppActions = {
	add_keyword: function(keyword){
		AppDispatcher.dispatch({
			actionType: ActionConstants.ADD_KEYWORD,
			keyword: keyword
		});
	},
	detect_google_position: function(keyword, domain){
		var request = new XMLHttpRequest();
		var url = 'http://localhost:3333/get_google_position?domain=' + domain + '&keyword=' + keyword;
		request.open('GET', url, true);
		request.onload = function() {
		  if (request.status >= 200 && request.status < 400) {
		    // Success!
		    var resp = JSON.parse(request.responseText);
		    
		    AppDispatcher.dispatch({
				actionType: ActionConstants.KEYWORD_PAGE_DETECTED,
				domain: domain,
				keyword: keyword,
				page: resp.page
			});

		  } else {
		    // We reached our target server, but it returned an error
			console.log('ERROR #f43244');
			console.log(request);
		  }
		};

		request.onerror = function() {
		  	// There was a connection error of some sort
			console.log('ERROR #f4354sg');
			console.log(request);
		};

		request.send();
	},
	set_domain: function(domain){
		AppDispatcher.dispatch({
			actionType: ActionConstants.SET_DOMAIN,
			domain: domain
		});
	}
};

module.exports = AppActions;
