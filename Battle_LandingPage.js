
import React, { Component } from 'react';
import  {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient';


var Battle_LandingPage = React.createClass({
  onPress(){
    
  },
  render() {
    return (
    	<View style={styles.container}>
        <LinearGradient colors={['#303841','#3A4750']} style={{flex: 1,justifyContent: 'center',alignItems: 'center',}}>
          <View style={[styles.blank,{flex: 0.5,}]}></View>
          <View style={styles.Logo}>
            <Animatable.Image 
                animation="bounceInDown" iterationCount={1}
                source={{uri:'http://s33.postimg.org/em1erq3cv/image.png'}} 
                style={{width:320,height:320 }}>
            </Animatable.Image>
          </View>
          <View style={styles.blank}></View>
          <View style={styles.blank}></View>
          <View style={[styles.blank,{flexDirection: 'row'}]}>
              <View style={styles.blank}></View>
              <Animatable.View style={styles.blank}
                animation="pulse" iterationCount={1} delay={1000}>
                  <TouchableHighlight
                      style={styles.touchable}
                      onPress={this._onPress}>
                        <View style={styles.Button}>
                            <Text style={styles.welcome_Button}>
                                戰鬥
                            </Text>
                        </View>
                  </TouchableHighlight>
              </Animatable.View>
              <View style={styles.blank}></View>
          </View>
          <View style={styles.blank}></View>
        </LinearGradient>
    	</View>
    );
  }
});
var styles = StyleSheet.create({
  blank:{
    flex: 1,
  },
  start:{
    flex: 2,
  },
  Logo:{
    flex: 2,
  },
  welcome:{
    fontSize: 30,
    fontWeight: "bold",
    color:'#D72323',
  },
   Button: {
        flex: 1,
        backgroundColor: '#D72323',
        justifyContent: 'center',
        borderRadius:2,
    },
    welcome_Button: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center',
        margin: 10,
        color: '#EEEEEE'
    },
    touchable:{
        flex:1,
        margin:15,
        borderRadius:2,
        elevation: 2
    },
 	container: {
    flex: 1,
	},
 });
module.exports = Battle_LandingPage;
