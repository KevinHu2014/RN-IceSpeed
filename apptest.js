import React, { Component } from 'react';
var Mapbox = require('react-native-mapbox-gl');
var mapRef = 'mapRef';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';

var apptest = React.createClass({
    render() {
      return (
        <View style={styles.container}>
          <View style={{flex: 3,}}></View>
          <View style={{flex: 1,}}>
            <View style={styles.button_R}
              elevation={10}>
              <Text style={styles.welcome}>
                OAQ test
              </Text>
            </View>
          </View>
          <View style={{flex: 3,}}></View>
          
        </View>
      );
    }
 
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  button_R: {
    flex: 1,
    backgroundColor: '#317AE9',
    //space-aroundborderWidth: 5,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    borderRadius:5,
    margin:10,
  },
  welcome: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
});
module.exports = apptest;
