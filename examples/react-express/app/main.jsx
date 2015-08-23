var React = require('react/addons');
var GroceryItemList = require('./components/GroceryItemList.jsx');

var initial = [
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

React.render(<GroceryItemList items={initial} />, app);
