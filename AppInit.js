
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

import VRPanorama from './VRPanorama';
import Center from './Center';
import Items from './Items';
import RNModel from './RNModel';
import testAction from './testAction';
import NicknamePage from './NicknamePage';
import tab from './tab';
import NavPet from './NavPet';
import gym_04 from './gym_04';
import Battle_PetBox from './Battle_PetBox';
import Battle_LandingPage from './Battle_LandingPage';
import NavMap from './NavMap';
import data from './src/data.json';

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

    // const { navigator } = this.props;
    //     if(navigator) {
    //         navigator.replace({
    //             name: 'NavPet',
    //             component: NavPet,
    //         })
    //     }        

    // const { navigator } = this.props;
    //     if(navigator) {
    //         navigator.replace({
    //             name: 'gym_04',
    //             component: gym_04,
    //         })
    //     }

    // const { navigator } = this.props;
    //     if(navigator) {
    //         navigator.replace({
    //             name: 'NavMap',
    //             component: NavMap,
    //         })
    //     }

    // const { navigator } = this.props;
    //     if(navigator) {
    //         navigator.replace({
    //             name: 'VRPanorama',
    //             component: VRPanorama,
    //         })
    //     }

    const { navigator } = this.props;
        if(navigator) {
            navigator.replace({
                name: 'Center',
                component: Center,
            })
        }

    // const { navigator } = this.props;
    //     if(navigator) {
    //         navigator.replace({
    //             name: 'Items',
    //             component: Items,
    //         })
    //     }

    // const { navigator } = this.props;
    //     if(navigator) {
    //         navigator.replace({
    //             name: 'RNModel',
    //             component: RNModel,
    //         })
    //     }
        

    // const { navigator } = this.props;
    //     if(navigator) {
    //         navigator.replace({
    //             name: 'Battle_PetBox',
    //             component: Battle_PetBox,
    //         })
    //     }

    // const { navigator } = this.props;
    //     if(navigator) {
    //         navigator.replace({
    //             name: 'Battle_LandingPage',
    //             component: Battle_LandingPage,
    //         })
    //     }   
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
          <View style={styles.blank}>
            <Text style={styles.welcome}>
              {
                //data.monster[0].name
              }
            </Text>
          </View>
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
