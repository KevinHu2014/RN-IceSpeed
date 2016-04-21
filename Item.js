'use strict';
var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React;

var Animatable = require('react-native-animatable');
//MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent);

var Item = React.createClass({
  render() {
    return (
    	<View style={styles.container}>
    		 <Animatable.Text animation="slideInDown" iterationCount="infinite" direction="alternate" style={{fontSize: 40,}}>我是道具</Animatable.Text>
			   <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ fontSize: 40,textAlign: 'center' }}>❤️</Animatable.Text>
         
    	</View>
      
    );
  },
  
});
var styles = StyleSheet.create({
 	container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  	backgroundColor: '#A9A9A9',
	}
 });
module.exports = Item;
