
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

import Battle_PetBox from './Battle_PetBox';

var Battle_LandingPage = React.createClass({
  getInitialState: function() {
    return {
      effect: "lightSpeedIn",
      Monster_Img: 'http://s33.postimg.org/em1erq3cv/image.png',
      enemy: '獨眼怪',
    }
  },
  componentWillMount(){
    //產生亂數1~10
    let x = Math.floor(Math.random() * 10);//Math.random()值範圍0 ~ 0.99999
    let y = "";

    switch(x){
      case 1: 
        y = "bounceIn";
        break;
      case 2:
        y = "bounceInDown";
        break;  
      case 3:
        y = "bounceInUp";
        break;
      case 4:
        y = "bounceInLeft";
        break;
      case 5:
        y = "bounceInRight";
        break;
      case 6:
        y = "zoomIn";
        break;
      case 7:
        y = "zoomInDown";
        break;
      case 8:
        y = "zoomInUp";
        break;
      case 9:
        y = "zoomInLeft";
        break;
      case 10:
        y = "zoomInRight";
        break;
      default:
        y = "lightSpeedIn";
        break;
    }
    this.setState({
      effect: y, 
    });

  },
  componentDidMount() {
    //從這裡拿到NewMap拿過來的參數
     this.setState({
            Monster_Img: this.props.Monster_Img,
            enemy: this.props.Monster_name
        });


  },
  onPress(){
    const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Battle_PetBox',
                component: Battle_PetBox,
                params: {
                    Monster_Img: this.state.Monster_Img,
                    enemy: this.state.enemy
                 }   
            })
        }
  },
  render() {
    return (
    	<View style={styles.container}>
        <LinearGradient colors={['#303841','#3A4750']} style={{flex: 1,justifyContent: 'center',alignItems: 'center',}}>
          <View style={[styles.blank,{flex: 0.5,}]}></View>
          <View style={styles.Logo}>
            <Animatable.Image 
                animation={this.state.effect} iterationCount={1}
                source={{uri: this.state.Monster_Img}} 
                style={{width:320,height:320 }}>
            </Animatable.Image>
          </View>
          <View style={styles.blank}></View>
          <View style={styles.blank}></View>
          <View style={[styles.blank,{flexDirection: 'row'}]}>
              <View style={styles.blank}></View>
              <Animatable.View style={styles.blank}
                animation="pulse" iterationCount={3} delay={1000}>
                  <TouchableHighlight
                      style={styles.touchable}
                      onPress={this.onPress}>
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
