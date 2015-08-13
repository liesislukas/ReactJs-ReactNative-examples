var React = require('react'),
    YourNameIs = require("./YourNameIs.react"),
    ChangeName = require("./ChangeName.react"),
    injectTapEventPlugin = require("react-tap-event-plugin"), // This dependency is temporary and will go away once react v1.0 is released
    mui = require('material-ui'),
    ThemeManager = new mui.Styles.ThemeManager(),
    Card = mui.Card,
    CardHeader = mui.CardHeader,
    Checkbox = mui.Checkbox,
    CardText = mui.CardText,
    Avatar = mui.Avatar,
    TextField = mui.TextField;

ThemeManager.setTheme(ThemeManager.types.LIGHT);
injectTapEventPlugin();

var NameChanger = React.createClass({
    getInitialState: function () {
        return {
            name: localStorage.getItem('name') || 'John Smith'
        };
    },
    handleNameChange: function (name) {
        this.setState({
            name: name
        });
        localStorage.setItem('name', name);
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
            <Card>
                <CardHeader
                    title="Name Changer with material UI"
                    subtitle="This is example app. Enter your name to input - see your name above input."
                    avatar={<Avatar>M</Avatar>}/>
                <CardText>
                    <Checkbox
                        name="checkboxName2"
                        value="checkboxValue2"
                        label="React elements"
                        defaultChecked={true}/>
                    <Checkbox
                        name="checkboxName2"
                        value="checkboxValue2"
                        label="React props"
                        defaultChecked={true}/>
                    <Checkbox
                        name="checkboxName2"
                        value="checkboxValue2"
                        label="React state"
                        defaultChecked={true}/>
                    <Checkbox
                        name="checkboxName2"
                        value="checkboxValue2"
                        label="localStorage"
                        defaultChecked={true}/>
                    <Checkbox
                        name="checkboxName2"
                        value="checkboxValue2"
                        label="Material UI"
                        defaultChecked={true}/>
                    <YourNameIs name={this.state.name}/>
                    <ChangeName name={this.state.name} onNameChange={this.handleNameChange}/>
                </CardText>
            </Card>
        );
    }
});

module.exports = NameChanger;