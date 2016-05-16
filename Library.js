'use strict';
var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
} = React;
var Animatable = require('react-native-animatable');

var Library = React.createClass({
  render() {
    return (
    	<View style={styles.container}>
    		<ScrollView
          automaticallyAdjustContentInsets={false}
          style={styles.scrollView}>
          <View style={styles.container}>
            <Text style={styles.blank}></Text>
            <Animatable.Image animation="bounce" iterationCount="infinite" 
            direction="alternate" source={require('./Img/b.png')} 
            style={{width: 150, height: 150}}></Animatable.Image>
            <Text style={styles.blank}>bounce</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.blank}></Text>
            <Animatable.Image animation="flash" iterationCount="infinite" 
            direction="alternate" source={require('./Img/b.png')} 
            style={{width: 150, height: 150}}></Animatable.Image>
            <Text style={styles.blank}>flash</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.blank}></Text>
            <Animatable.Image animation="jello" iterationCount="infinite" 
            direction="alternate" source={require('./Img/b.png')} 
            style={{width: 150, height: 150}}></Animatable.Image>
            <Text style={styles.blank}>jello</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.blank}></Text>
            <Animatable.Image animation="pulse" iterationCount="infinite" 
            direction="alternate" source={require('./Img/b.png')} 
            style={{width: 150, height: 150}}></Animatable.Image>
            <Text style={styles.blank}>pulse</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.blank}></Text>
            <Animatable.Image animation="rubberBand" iterationCount="infinite" 
            direction="alternate" source={require('./Img/b.png')} 
            style={{width: 150, height: 150}}></Animatable.Image>
            <Text style={styles.blank}>rubberBand</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.blank}></Text>
            <Animatable.Image animation="shake" iterationCount="infinite" 
            direction="alternate" source={require('./Img/b.png')} 
            style={{width: 150, height: 150}}></Animatable.Image>
            <Text style={styles.blank}>shake</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.blank}></Text>
            <Animatable.Image animation="swing" iterationCount="infinite" 
            direction="alternate" source={require('./Img/b.png')} 
            style={{width: 150, height: 150}}></Animatable.Image>
            <Text style={styles.blank}>swing</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.blank}></Text>
            <Animatable.Image animation="tada" iterationCount="infinite" 
            direction="alternate" source={require('./Img/b.png')} 
            style={{width: 150, height: 150}}></Animatable.Image>
            <Text style={styles.blank}>tada</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.blank}></Text>
            <Animatable.Image animation="wobble" iterationCount="infinite" 
            direction="alternate" source={require('./Img/b.png')} 
            style={{width: 150, height: 150}}></Animatable.Image>
            <Text style={styles.blank}>wobble</Text>
          </View>
          
                 
        </ScrollView>
    		
    	</View>
    );
  }
});
var styles = StyleSheet.create({
  scrollView: {
    height: 300,
    width: 400,
  },
  blank:{
    margin: 5,
    fontSize: 20
  },
 	container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  	backgroundColor: '#A9A9A9',
	},
 });
module.exports = Library;
