var React = require('react'),
    injectTapEventPlugin = require('react-tap-event-plugin'),
    mui = require('material-ui'),
    Card = mui.Card,
    CardText = mui.CardText,
    ThemeManager = new mui.Styles.ThemeManager();

ThemeManager.setTheme(ThemeManager.types.LIGHT);
injectTapEventPlugin();


PageOne = React.createClass({
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
            <div>
                <h2>
                    Page One.
                </h2>
                <Card>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque non metus in
                        malesuada. Phasellus porta nunc enim, ac faucibus quam congue ut. Etiam malesuada diam
                        vulputate, elementum tellus ac, imperdiet diam. Sed molestie massa nisl, in facilisis purus
                        blandit in. Duis accumsan porta sagittis. Duis id ipsum suscipit, mollis urna sit amet, accumsan
                        purus. Proin nec massa malesuada, dapibus enim a, elementum leo.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque non metus in
                        malesuada. Phasellus porta nunc enim, ac faucibus quam congue ut. Etiam malesuada diam
                        vulputate, elementum tellus ac, imperdiet diam. Sed molestie massa nisl, in facilisis purus
                        blandit in. Duis accumsan porta sagittis. Duis id ipsum suscipit, mollis urna sit amet, accumsan
                        purus. Proin nec massa malesuada, dapibus enim a, elementum leo.
                    </CardText>
                </Card>
            </div>
        );
    }
});

module.exports = PageOne;