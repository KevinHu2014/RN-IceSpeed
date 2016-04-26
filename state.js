'use strict';
var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AppState,
  ToastAndroid,
} = React;


var state = React.createClass({
  getInitialState() {
    return {
      currentAppState: AppState.currentState,
    };
  },
  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  },
  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  },
  _handleAppStateChange(currentAppState) {
    this.setState({ currentAppState, });
    ToastAndroid.show('当前状态为:'+currentAppState,ToastAndroid.SHORT);
  },
  render(){
    return (
      <Text>Current state is: {this.state.currentAppState}</Text>
    );
  },
});
var styles = StyleSheet.create({

 });
module.exports = state;
