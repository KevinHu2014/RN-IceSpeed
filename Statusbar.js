
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


var Statusbar = React.createClass({
  render() {
    return (
    	<View style={styles.container}>
    		 <View style={styles.Top_status}>
            <View style={styles.Top_status_L}>
              <Text style={styles.Top_welcome_L}>火</Text>
            </View>
            <View style={styles.Top_status_R}>
              <Text style={styles.Top_welcome_R}>冰櫃神速</Text>
            </View>
          </View>
    	</View>
      
    );
  },
  
});
var styles = StyleSheet.create({
 	container: {
    flex: 1,
    
	},
  Top_status: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#8E8E8E',
  },
  Top_status_L: {
    flex: 1,
    backgroundColor: '#8E8E8E',
    justifyContent: 'center',
    alignItems: 'center',

  },
  Top_welcome_L: {
    fontSize: 30,
    color: '#FFFFFF',
  },
  Top_status_R:{
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d0d0d0',
    borderWidth: 10,
    borderColor: '#5B5B5B',
    borderTopColor: '#A0A0A0',
    borderLeftColor: '#8E8E8E',
    borderRightColor: '#858585',
  },
  Top_welcome_R: {
    fontSize: 30,
    color: 'black',
  },
 });
module.exports = Statusbar;
