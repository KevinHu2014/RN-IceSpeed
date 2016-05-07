'use strict';
var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React;

var Animatable = require('react-native-animatable');
var Statusbar = require('./Statusbar');
var Item = React.createClass({
  render() {
    return (
    	<View style={styles.container}>
         <View style={{flex:1}}>
           <Statusbar></Statusbar>
         </View>
         <View style={{flex:7,justifyContent: 'center',
          alignItems: 'center',}}>
          <Animatable.Text animation="slideInDown" iterationCount="infinite" direction="alternate" style={{fontSize: 40,}}>我是道具</Animatable.Text>
          <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ fontSize: 40,textAlign: 'center' }}>❤️</Animatable.Text>
         </View>
        
    		 
    	</View>
      
    );
  },
  
});
var styles = StyleSheet.create({
 	container: {
    flex: 1,
  	backgroundColor: '#A9A9A9',
    flexDirection: 'column',
	}
 });
module.exports = Item;
