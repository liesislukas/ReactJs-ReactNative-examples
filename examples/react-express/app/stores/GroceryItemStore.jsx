var dispatcher = require('./../dispatcher.js');



function GroceryItemStore(){
	var items = [
					{
						name: 'Milk'
					},
					{
						name: 'Eggs',
						purchased: true
					}, 
					{
						name: 'Bacon strips'
					}
				];
	var listeners = [];

	function getItems(){
		return items;
	}

	function addGroceryItem(item){
		items.push(item);
		triggerListeners();
	}

	function onChange(listener){
		listeners.push(listener);
	}

	function triggerListeners(){
		listeners.forEach(function(listener){
			listener(items);
		});
	}

	dispatcher.register(function(event){
		var split = event.type.split(':');
		if(split[0] === 'grocery-item'){
			switch(split[1]){
				case 'add':
					addGroceryItem(event.payload);
				break;
			}
		}
	});

	return {
		getItems: getItems,
		onChange: onChange
	}
}

module.exports = new GroceryItemStore();