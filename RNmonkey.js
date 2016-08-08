import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import JailMonkey from 'jail-monkey';
var RNmonkey = React.createClass({  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          IS JAIL BROKEN?
        </Text>
        <Text style={styles.instructions}>
          {JailMonkey.isJailBroken().toString()}
        </Text>
        <Text style={styles.welcome}>
          CAN MOCK LOCATION?
        </Text>
        <Text style={styles.instructions}>
          {JailMonkey.canMockLocation().toString()}
        </Text>
        <Text style={styles.welcome}>
          TRUST FALL?
        </Text>
        <Text style={styles.instructions}>
          {JailMonkey.trustFall().toString()}
        </Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = RNmonkey;
