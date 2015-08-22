var express = require('express');
var app = express();

app.get('/get_google_position', function(req, res){
	res.setHeader("Access-Control-Allow-Origin", "*");

	if(!req.query.keyword || !req.query.domain){
		res.json({
			error: 'missing params. Add keyword and domain to query'
		});
	}
	
	var random_result = Math.floor(Math.random() * 10 + 1);
	res.json({page: random_result});

	function get_google_position(keyword, domain, start){
		if(!keyword || !domain){
			return;
		}
		var request = require('request');
		var page = 0;
		var url = 'https://www.google.com/search?q='+keyword+'&start='+start;
			
		request.get(url, function (error, response, body) {
		    if (!error && response.statusCode == 200) {
		    	var index = body.indexOf(domain);
				start = start + 10;

				if(index < 0){
					if(start <= 100){
						page = get_google_position(keyword, domain, start)
					} else {
						res.json({page: -1});
					}
				} else {
					page = start / 10;
					res.json({page: page});
				}
		    }
		});

		return page;
	}	

	//get_google_position(req.query.keyword, req.query.domain, 0);
 	
});

app.listen(3333, function(){
	console.log('listening on 3333');
});
