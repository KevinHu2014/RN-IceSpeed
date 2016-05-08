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
         <View style={{flex:7,}}>
            <BarChart
              dataSets={[
                { 
                  fillColor: '#46b3f7', 
                  data: [
                    { value: 15 },
                    { value: 10 },
                    { value: 12 },
                    { value: 11 },
                  ]
                },
                { 
                  fillColor: '#3386b9', 
                  data: [
                    { value: 14 },
                    { value: 11 },
                    { value: 14 },
                    { value: 13 },
                  ]
                },
              ]}
              graduation={1}
              horizontal={true}
              showGrid={true}
              barSpacing={5}
              style={{
                height: 300,
                margin: 15,
              }}/>
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
