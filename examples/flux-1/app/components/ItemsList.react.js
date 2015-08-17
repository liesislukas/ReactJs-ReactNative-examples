var React = require('react'),
    injectTapEventPlugin = require('react-tap-event-plugin'),
    AppActions = require('../actions/AppActions'),
    mui = require('material-ui'),
    List = mui.List,
    ListItem = mui.ListItem,
    Checkbox = mui.Checkbox,
    ThemeManager = new mui.Styles.ThemeManager();

ThemeManager.setTheme(ThemeManager.types.LIGHT);
injectTapEventPlugin();

var ItemsList = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        }; 
    },
    
    handleCheck: function(e){
        AppActions.destroy(e.target.id);
    },

    render: function () {

        var all_items = this.props.all_items;
        var items = [];

        for(var key in all_items){
            items.push(<ListItem key={key} primaryText={all_items[key].text} leftCheckbox={<Checkbox onCheck={this.handleCheck} id={key} value="reiksme" />} />);
       }

        return (
            <List>
                {items}
            </List>
        );
    }
});

module.exports = ItemsList;