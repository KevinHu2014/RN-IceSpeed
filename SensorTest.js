import React, { Component } from 'react';
import {
  StyleSheet,
  Slider,
  View,
  Text,
  TouchableHighlight,
  DeviceEventEmitter,
  NativeModules,
} from 'react-native';
var mSensorManager = require('NativeModules').SensorManager;
var {ScreenBrightness} = NativeModules;

var SensorTest = React.createClass({
  
  getInitialState: function() {
    return {
      light: null,
      value: 0,
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
  _onValueChange(value){
    this.setState({value: value});
    ScreenBrightness.setBrightness(this.state.value);
  },
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.state.light}</Text>
        <Text style={styles.welcome}>
          亮度
          {this.state.value && +this.state.value.toFixed(2)}
          
        </Text>
        <Slider
          {...this.props}
          onValueChange={(value) => this._onValueChange(value)} /> 
      </View>
    );
   }
});
var styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
  },
  welcome:{
    fontSize: 40,
    alignSelf: 'center',
  }
});
module.exports = SensorTest;