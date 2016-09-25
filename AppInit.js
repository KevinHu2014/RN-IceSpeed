
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

import NicknamePage from './NicknamePage';
import tab from './tab';
import NavPet from './NavPet';

var AppInit = React.createClass({
  onPress(){
    // const { navigator } = this.props;
    //     if(navigator) {
    //         navigator.push({
    //             name: 'NicknamePage',
    //             component: NicknamePage,
    //         })
    //     }

    // const { navigator } = this.props;
    //     if(navigator) {
    //         navigator.replace({
    //             name: 'tab',
    //             component: tab,
    //         })
    //     }

    const { navigator } = this.props;
        if(navigator) {
            navigator.replace({
                name: 'NavPet',
                component: NavPet,
            })
        }        
  },
  render() {
    return (
    	<View style={styles.container}>
        <LinearGradient colors={['#EB8128','#E76128','#E34228']} style={{flex: 1,justifyContent: 'center',alignItems: 'center',}}>
          <View style={styles.blank}></View>
          <View style={styles.Logo}>
            <Animatable.Image 
                animation="lightSpeedIn" iterationCount={1}
                source={require('./Img/Icon.png')} 
                style={{width:180,height:180 }}>
            </Animatable.Image>
          </View>
          <View style={styles.blank}></View>
          <View style={styles.start}>
            <Animatable.Text style={styles.welcome} delay={1000}
                animation="tada" iterationCount="infinite"
                onPress={this.onPress}>
              {"START"}
            </Animatable.Text>
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
    flex: 3,
  },
  welcome:{
    fontSize: 30,
    fontWeight: "bold",
    color:'#FFFFFF'
  },
 	container: {
    flex: 1,
    
    
	},
 });
module.exports = AppInit;
