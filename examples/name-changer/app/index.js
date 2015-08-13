var React = require('react');

var YourNameIs = React.createClass({
    render: function () {
        return (
            <div>Your name is: {this.props.name}</div>
        );
    }
});

var ChangeName = React.createClass({
    handleChange: function (e) {
        this.props.onNameChange(e.target.value);
    },
    render: function () {
        return (
            <input type="text" defaultValue={this.props.name} onChange={this.handleChange}/>
        );
    }
});

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
    render: function () {
        return (
            <div>
                <h1>Name Changer</h1>

                <p>This is example app. Enter your name to input - see your name above input.</p>
                <ul>
                    <li>React elements</li>
                    <li>React props</li>
                    <li>React state</li>
                    <li>React localStorage</li>
                </ul>
                <YourNameIs name={this.state.name}/>
                <ChangeName name={this.state.name} onNameChange={this.handleNameChange}/>
            </div>
        );
    }
});

React.render(<NameChanger/>, document.getElementById('app'));