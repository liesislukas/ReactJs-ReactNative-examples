var React = require('react');

module.exports = React.createClass({
	render: function(){
		return (
			<div className="grocery-AddItem">
				<form>
					<input type="text"/>
					<button>Add Item</button>
				</form>
			</div>
		);
	}
});