var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			input: ""
		};
	},
	handleInputName: function(e){
		this.setState({
			input: e.target.value
		});
	},
	addItem: function(e){
		e.preventDefault();
		console.log('addItem ',this.state.input);
	},
	render: function(){
		return (
			<div className="grocery-AddItem">
				<form onSubmit={this.addItem}>
					<input type="text" value={this.state.input} onChange={this.handleInputName}/>
					<button>Add Item</button>
				</form>
			</div>
		);
	}
});