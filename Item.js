'use strict';
var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React;
import { BarChart } from 'react-native-charts';

//var Animatable = require('react-native-animatable');
var Statusbar = require('./Statusbar');

var Item = React.createClass({
  render() {
    return (
    	<View style={styles.container}>
         <View style={{flex:1}}>
           <Statusbar></Statusbar>
         </View>
         <View style={{flex:3.5,flexDirection:'row'}}>
            <View style={{flex:1,justifyContent: 'space-around',
              alignItems: 'flex-end',
            }}>
              <Text> </Text>
              <Text style={styles.welcome}>500</Text>
              <Text> </Text>
              <Text style={styles.welcome}>100</Text>
              <Text> </Text>
              <Text style={styles.welcome}>300</Text>
              <Text> </Text>
            </View>
            <View style={{flex:10}}>
              <BarChart
              dataSets={[
                { 
                  fillColor: '#FF0000', 
                  data: [
                    { value: 500 },
                  ]
                },
                { 
                  fillColor: '#0080FF', 
                  data: [
                    { value: 100 },
                  ]
                },
                { 
                  fillColor: '#00EC00', 
                  data: [
                    { value: 300 },
                  ]
                },
              ]}
              graduation={50}
              horizontal={true}
              showGrid={true}
              barSpacing={5}
              style={{
                height: 250,
                margin: 15,
                marginLeft:5,
              }}/>
            </View>
            
         </View>
        <View style={{flex:3.5}}></View>
    		 
    	</View>
      
    );
  },
  
});
var styles = StyleSheet.create({
 	container: {
    flex: 1,
  	backgroundColor: '#A9A9A9',
    flexDirection: 'column',
	},
  welcome: {
    fontFamily: 'Avenir',
    fontSize: 12,
    color: '#ccc'
  },
 });
module.exports = Item;
