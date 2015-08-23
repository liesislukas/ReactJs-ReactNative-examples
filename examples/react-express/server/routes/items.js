
module.exports = function(app){
	var items = [{
		name: 'Milk'
	},
	{
		name: 'Eggs',
		purchased: true
	}, 
	{
		name: 'Bacon strips'
	}];

	app.route('/api/items')
	.get(function(req, res){
		res.send(items);
	});
}