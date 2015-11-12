/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    } = React;

var TouchableItem = React.createClass({
    onStartShouldSetResponderHandler: function () {
        console.log('# onStartShouldSetResponderHandler');
        return true;
    },
    onResponderGrantHandler: function () {
        console.log('# onResponderGrantHandler');
    },
    onResponderReject: function () {
        console.log('# onResponderReject');
    },
    onResponderMoveHandler: function (evt) {
        console.log('# onResponderMoveHandler');
        console.log(evt.nativeEvent);
    },
    onResponderReleaseHandler: function () {
        console.log('# onResponderRelease');
    },
    onMoveShouldSetResponderHandler: function () {
        console.log('# onMoveShouldSetResponderHandler');
    },
    onResponderTerminationRequestHandler: function () {
        console.log('# onResponderTerminationRequestHandler');
    },
    onResponderTerminateHandler: function () {
        console.log('# onResponderTerminateHandler');
    },
    onStartShouldSetResponderCaptureHandler: function () {
        console.log('# onStartShouldSetResponderCaptureHandler');
    },
    render: function () {
        console.log('starting up!');
        return (
            <View
                onStartShouldSetResponderCapture={this.onStartShouldSetResponderCaptureHandler}
                onStartShouldSetResponder={this.onStartShouldSetResponderHandler}
                onMoveShouldSetResponder={this.onMoveShouldSetResponderHandler}
                onResponderGrant={this.onResponderGrantHandler}
                onResponderReject={this.onResponderRejectHandler}
                onResponderMove={this.onResponderMoveHandler}
                onResponderRelease={this.onResponderReleaseHandler}
                onResponderTerminationRequest={this.onResponderTerminationRequestHandler}
                onResponderTerminate={this.onResponderTerminateHandler}
            >
                <Text style={{fontSize: 100}}>
                    Hi, touch me!
                </Text>
            </View>
        );
    }
});

var ReactNativeSwipe = React.createClass({
    render: function () {
        return (
            <View style={styles.container}>
                <TouchableItem>
                </TouchableItem>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

AppRegistry.registerComponent('ReactNativeSwipe', () => ReactNativeSwipe);
