import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';
var Animatable = require('react-native-animatable');
var Progress = require('react-native-progress');

import MapExample from './MapExample';
import LinearGradient from 'react-native-linear-gradient';

var battle = React.createClass({
  getInitialState: function() {
    return {
      press_L: false,
      press_M: false,
      press_R: false,
      top_progress: 0.9,
      top_color: '#00DB00',
      bottom_progress: 0.6,
      skill_1: 0.1,
      skill_2: 0.1,

    }
  },
  onPressIn_L: function() {
    this.setState({press_L: true});
    this.state.top_progress = this.state.top_progress - this.state.skill_1;
    if(this.state.top_progress <= 0.3){
      this.state.top_color = '#FF0000';
    }
  },
  onPressOut_L: function() {
    this.setState({press_L: false});
    this.refs.bottom.wobble(1000);
    this.refs.top.swing(1000);
  },
  onPressIn_M: function() {
    this.setState({press_M: true});
    this.state.bottom_progress = this.state.bottom_progress + this.state.skill_2;
  },
  onPressOut_M: function() {
    this.setState({press_M: false});
    this.refs.bottom.jello(1000);

  },
  onPressIn_R: function() {
    this.setState({press_R: true});
  },
  onPressOut_R: function() {
    this.setState({press_R: false});
    //this.state.top_progress=0.9;
    //this.state.bottom_progress=0.6;
    //this.state.top_color='#00DB00';
    const { navigator } = this.props;
        if(navigator) {
            //返回mapexample
            navigator.pop();
        }
  },
  render() {
    return (
    	<View style={styles.container}>
    		<View style={styles.status_Top}>
            <View style={styles.status_img_Top}>
                <Image source={require('./Img/d.png')}
                  style={{width:65,height:65}}/>
            </View>
            <Animatable.View animation="pulse" iterationCount="infinite"
              style={styles.status_bar}>
                <Text style={styles.welcome_3}>HP </Text>
                <Progress.Bar progress={this.state.top_progress} width={200} height={10}
                   color={this.state.top_color} unfilledColor={'#FFFFFF'} borderWidth={5}
                   borderColor={'#7B7B7B'} />
            </Animatable.View>
        </View>
        <View style={styles.main}>
          <LinearGradient colors={[  '#84C1FF','#C4E1FF','#ECF5FF','#FFFF6F','#93FF93','#79FF79','#02C874','#02C874','#02C874']} style={{flex: 1,}}>

            <View style={styles.main_top}>
            <Animatable.Image ref="top" source={require('./Img/d.png')}
              style={{marginLeft: 10,width:140,height:140 }}>
              <Text style={styles.welcome_2}>
                    {this.state.press_L ? '👊' : ''}
              </Text>
            </Animatable.Image>
          </View>
          <View style={styles.main_bottom}>
            <Animatable.Image   ref="bottom" source={require('./Img/e.png')}
              style={{marginRight: 10,width:140,height:140 }}>
              <Text style={styles.welcome_2}>
                    {this.state.press_M ? '✨' : ''}
              </Text>
             </Animatable.Image>
          </View>

          </LinearGradient>
        </View>
        <View style={styles.status_Bottom}>
          <View style={styles.status_img_Bottom}>
            <Image source={require('./Img/e.png')}
              style={{width:65,height:65 }}/>
          </View>
          <Animatable.View animation="pulse" iterationCount="infinite"
            style={styles.status_bar}>
            <Text style={styles.welcome_3}>HP </Text>
            <Progress.Bar progress={this.state.bottom_progress} width={200} height={10}
               color={'#00DB00'} unfilledColor={'#FFFFFF'} borderWidth={5}
               borderColor={'#7B7B7B'} />
          </Animatable.View>
        </View>
        <View style={styles.skills}>
          <TouchableHighlight
            style={{flex:1 }}
            onPressIn={this.onPressIn_L}
            onPressOut={this.onPressOut_L}>
              <View style={styles.button_L}>
                  <Text style={styles.welcome}>
                    {this.state.press_L ? '衝撞' : 'skill 1'}
                  </Text>
              </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={{flex:1 }}
            onPressIn={this.onPressIn_M}
            onPressOut={this.onPressOut_M}>
              <View style={styles.button_M}>
                  <Text style={styles.welcome}>
                    {this.state.press_M ? '回復' : 'skill 2'}
                  </Text>
              </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={{flex:1 }}
            onPressIn={this.onPressIn_R}
            onPressOut={this.onPressOut_R}>
              <View style={styles.button_R}>
                  <Text style={styles.welcome}>
                    {this.state.press_R ? '一' : 'back'}
                  </Text>
              </View>
          </TouchableHighlight>
        </View>
    	</View>
    );
  }
});
var styles = StyleSheet.create({
 	container: {
    flex: 1,
    flexDirection: 'column',
	},
  status_Top: {
    flex: 1,
    backgroundColor: '#FF8000',
    flexDirection: 'row',
  },
  status_Bottom: {
    flex: 1,
    backgroundColor: '#2894FF',
    flexDirection: 'row',
  },
  status_img_Top: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FFDC35',
    borderRadius: 15,
    borderWidth: 10,
  },
  status_img_Bottom: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FFDC35',
    borderRadius: 15,
    borderWidth: 10,
  },
  status_bar: {
    flex: 4.5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  main: {
    flex: 4,
    flexDirection: 'column',
    borderColor: '#000000',
    borderWidth: 5,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  main_top: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: '#d0d0d0',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  main_bottom: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: '#8E8E8E',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  skills: {
    flex: 1,
    backgroundColor: '#A9A9A9',
    borderColor: '#A9A9A9',
    borderWidth: 10,
    flexDirection: 'row',
  },
  button_L: {
    flex: 1,
    backgroundColor: '#4F4F4F',
    borderWidth: 5,
    borderColor: '#FFFFFF',
    justifyContent: 'center'
  },
  button_M: {
    flex: 1,
    backgroundColor: '#4F4F4F',
    borderWidth: 5,
    borderColor: '#FFFFFF',
    justifyContent: 'center'
  },
  button_R: {
    flex: 1,
    backgroundColor: '#4F4F4F',
    borderWidth: 5,
    borderColor: '#FFFFFF',
    justifyContent: 'center'
  },
  welcome: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  welcome_2: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 40,
    color: '#000000',
  },
  welcome_3: {
    color: '#FFFFFF',
    fontSize:15,
    fontWeight: "bold",
  },
 });
module.exports = battle;
