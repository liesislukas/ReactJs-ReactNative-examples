var React = require('react'),
    injectTapEventPlugin = require("react-tap-event-plugin"), // This dependency is temporary and will go away once react v1.0 is released
    mui = require('material-ui'),
    ThemeManager = new mui.Styles.ThemeManager(),
    TextField = mui.TextField;


ThemeManager.setTheme(ThemeManager.types.LIGHT);
injectTapEventPlugin();


ChangeName = React.createClass({
    handleChange: function (e) {
        this.props.onNameChange(e.target.value);
    },
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    render: function () {
        return (
            <TextField hintText="Hint Text" value={this.props.name} onChange={this.handleChange}/>
        );
    }
});

module.exports = ChangeName;