'use strict';
var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableWithoutFeedback
} = React;
var Animatable = require('react-native-animatable');




var Pet = React.createClass({
  render() {
    return (
      
      <View style={styles.container}>
      	<TouchableWithoutFeedback>
      		<Animatable.View animation="bounceIn" 
    			iterationCount="infinite" style={{backgroundColor: '#65b237',padding: 20,margin: 10,}}>
    		<Text style={styles.welcome}>
    			我是寵物
    		</Text>
    		</Animatable.View>
    	</TouchableWithoutFeedback>	
    	<TouchableWithoutFeedback>
      		<Animatable.View animation="bounceInDown" 
    			iterationCount="infinite" style={{backgroundColor: '#346ca5',padding: 20,margin: 10,}}>
    		<Text style={styles.welcome}>
    			我是寵物
    		</Text>
    		</Animatable.View>
    	</TouchableWithoutFeedback>
    	<TouchableWithoutFeedback>
      		<Animatable.View animation="bounceInUp" 
    			iterationCount="infinite" style={{backgroundColor: '#a0a0a0',padding: 20,margin: 10,}}>
    		<Text style={styles.welcome}>
    			我是寵物
    		</Text>
    		</Animatable.View>
    	</TouchableWithoutFeedback>	
    	<TouchableWithoutFeedback>
      		<Animatable.View animation="bounceInLeft" 
    			iterationCount="infinite" style={{backgroundColor: '#ffc508',padding: 20,margin: 10,}}>
    		<Text style={styles.welcome}>
    			我是寵物
    		</Text>
    		</Animatable.View>
    	</TouchableWithoutFeedback>	
    	<TouchableWithoutFeedback>
      		<Animatable.View animation="bounceInRight" 
    			iterationCount="infinite" style={{backgroundColor: '#217983',padding: 20,margin: 10,}}>
    		<Text style={styles.welcome}>
    			我是寵物
    		</Text>
    		</Animatable.View>
    	</TouchableWithoutFeedback>		
       </View>
    );
  }
});
var styles = StyleSheet.create({
 	container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  	//backgroundColor: '#A9A9A9',
	},
	welcome: {
		fontSize: 20
	}
 });
module.exports = Pet;
