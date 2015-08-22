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
var StateStore = require('../stores/StateStore');

function getAppState(){
    return {
    	app_state: StateStore.getState()
    };
}

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
		 return getAppState();
	},
	_OnChange: function(){
		this.setState(getAppState());
	},
	componentDidMount: function() {
		StateStore.addChangeListener(this._OnChange);
	},
	componentWillUnmount: function() {
		StateStore.removeChangeListener(this._OnChange);
	},
	getAppAfterDomain: function(){
		var state = this.state.app_state;
		if(state.get('domain') !== ''){
			return(
				<div>
					<AppNewKeyword />
					<AppKeywords domain={state.get('domain')} keywords={state.get('keywords')} positions={state.get('positions')} />
				</div>
			);
		}
	},
	render: function() {
		var state = this.state.app_state;
		return (
			<div>
				<Paper style={this.getPaperStyles()} zDepth={1}>
					<AppDomain domain={state.get('domain')} domain_locked={state.get('domain_locked')} />
					{this.getAppAfterDomain()}
				</Paper>
			</div>
		);
	}
});


module.exports = App;
