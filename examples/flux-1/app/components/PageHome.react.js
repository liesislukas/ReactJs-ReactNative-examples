var React = require('react'),
    injectTapEventPlugin = require('react-tap-event-plugin'),
    ItemsList = require('./ItemsList.react'),
    mui = require('material-ui'),
    Card = mui.Card,
    CardText = mui.CardText,
    List = mui.List,
    ListItem = mui.ListItem,
    Checkbox = mui.Checkbox,
    TextField = mui.TextField,
    FlatButton  = mui.FlatButton ,
    ThemeManager = new mui.Styles.ThemeManager(),
    ItemsStore = require('../stores/ItemsStore'),
    AppActions = require('../actions/AppActions');

ThemeManager.setTheme(ThemeManager.types.LIGHT);
injectTapEventPlugin();

function getItemsState(){
    return {
        all_items: ItemsStore.getAll()
    };
}

var PageHome = React.createClass({

    getInitialState: function() {
        return getItemsState();
    },

    componentDidMount: function() {
        ItemsStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
      ItemsStore.removeChangeListener(this._onChange);
    },

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        }; 
    },
    
    handleLinkSubmit: function(){
        var input = this.refs.newItemInput;
        AppActions.create(input.getValue());
        input.clearValue();
    },

    render: function () {
        return (
            <div>
                <h2>
                    Items list at homepage!
                </h2>
                <Card>
                    <CardText>
                        <TextField ref="newItemInput" floatingLabelText="New item title" />
                        <FlatButton onClick={this.handleLinkSubmit} label="Add to list" primary={true} />
                        <ItemsList all_items={this.state.all_items} />
                    </CardText>
                </Card>
            </div>
        );
    },
    _onChange: function(){
        this.setState(getItemsState());
    }
});

module.exports = PageHome;