'use strict';
var React = require('react');
var injectTapEventPlugin = require('react-tap-event-plugin');
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();

ThemeManager.setTheme(ThemeManager.types.LIGHT);
injectTapEventPlugin();

// mui components
var Paper = mui.Paper;
var Table = mui.Table;
var TextField = mui.TextField;
var FlatButton = mui.FlatButton;

// App components

var AppDomain = require('./AppDomain.react');
var AppNewKeyword = require('./AppNewKeyword.react');
var AppKeywords = require('./AppKeywords.react');
var AppResults = require('./AppResults.react');
var StateStore = require('../stores/StateStore');

var App = React.createClass({
	childContextTypes: {
		muiTheme: React.PropTypes.object
	},
	getChildContext(){
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		}
	},
	getPaperStyles(){
		return {
			width: '570px',
			marginLeft: 'auto',
			marginRight: 'auto',
			padding: '15px'
		}
	},
	getInitialState: function() {
		 return StateStore.getState();
	},
	_OnChange: function(){
		this.setState(StateStore.getState());
	},
	componentDidMount: function() {
		StateStore.addChangeListener(this._OnChange);
	},
	componentWillUnmount: function() {
		StateStore.removeChangeListener(this._OnChange);
	},
	render: function() {
		return (
			<div>
				<Paper style={this.getPaperStyles()} zDepth={1}>
					<AppDomain domain={this.state.get('domain')} />
					<AppNewKeyword />
					<AppKeywords keywords={this.state.get('keywords')} />
					<AppResults keywords_results={this.state.get('keywords_results')} keywords={this.state.get('keywords')}/>
				</Paper>
			</div>
		);
	}
});


module.exports = App;
