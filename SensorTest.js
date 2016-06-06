import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  DeviceEventEmitter,
} from 'react-native';
var mSensorManager = require('NativeModules').SensorManager;

var SensorTest = React.createClass({
  
  getInitialState: function() {
    return {
      light: null,
    }
  },
  componentDidMount() {
    mSensorManager.startLightSensor(100);
    DeviceEventEmitter.addListener('LightSensor', function (data) {
        //console.log(data.light);
        this.setState({
          light: data.light,
        });
    }.bind(this));
    
  },
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.state.light}</Text>
      </View>
    );
   }
});
var styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome:{
    fontSize: 40,
  }
});
module.exports = SensorTest;