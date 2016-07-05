
import React, { Component } from 'react';
import  {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable'
import PetBox from './PetBox';
import Statusbar from './Statusbar';


var Pet = React.createClass({
  getInitialState: function() {
    return {
      press_Back: false,
      press_Lock: false,
      press_R1: false,
      press_R2: false,
      press_L: false,
      press_R: false,
      test: null,
      id: null,
      Lv: null,
      Hp: null,
      Atk: null,
      Def: null,
      Spd: null,
      name: null,
      Img: null,
    }
  },
  componentDidMount() {
    //從這裡拿到PetBox傳過來的參數
     this.setState({
            Lv: this.props.Lv,
            Hp: this.props.Hp,
            Atk: this.props.Atk,
            Def: this.props.Def,
            Spd: this.props.Spd,
            Name: this.props.Name,
            id: this.props.id,
            Img: this.props.Img
        });
  },
  onPressIn_Back: function() {
    this.setState({press_Back: true});
  },
  onPressOut_Back: function() {
    this.setState({press_Back: false});
    const { navigator } = this.props;
            if(navigator) {
                //返回mapexample
                navigator.pop();
            }
  },
  on_PressIn_R1: function() {
    this.setState({press_R1: true});
  },
  on_PressOut_R1: function() {
    this.setState({press_R1: false});
  },
  on_PressIn_R2: function() {
    this.setState({press_R2: true});
  },
  on_PressOut_R2: function() {
    this.setState({press_R2: false});
  },
  onPressIn_Lock: function() {
    this.setState({press_Lock: true});
  },
  onPressOut_Lock: function() {
    this.setState({press_Lock: false});
  },
  onPressIn_L: function() {
    this.setState({press_L: true});
  },
  onPressOut_L: function() {
    this.setState({press_L: false});
  },
  onPressIn_R: function() {
    this.setState({press_R: true});
  },
  onPressOut_R: function() {
    this.setState({press_R: false});
  },
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.Top_status}>
            <Statusbar></Statusbar>
          </View>
          <View style={styles.status}>
            <View style={styles.No_status_L}>
              <TouchableHighlight
              onPressIn={this.onPressIn_Back}
              onPressOut={this.onPressOut_Back}
              style={{borderRadius: 100}}>
                <View style={styles.back_button_S}>
                  <Text style={styles.back_welcome_S}>
                    {this.state.press_Back ? '<' : '返'}
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.No_status_M}>
              <Text style={styles.No_welcome}>
                No.{this.state.id+' '+this.state.Name}
              </Text>
            </View>
            <View style={styles.No_status_R1}>
              <TouchableHighlight
              onPressIn={this.on_PressIn_R1}
              onPressOut={this.on_PressOut_R1}
              style={{borderRadius: 0}}>
                <View style={styles.R1_button_S}>
                  <Text style={styles.back_welcome_S}>
                    {this.state.press_R1 ? '💪' : '強化'}
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.No_status_R2}>
              <TouchableHighlight
              onPressIn={this.on_PressIn_R2}
              onPressOut={this.on_PressOut_R2}
              style={{borderRadius: 0}}>
                <View style={styles.R2_button_S}>
                  <Text style={styles.back_welcome_S}>
                    {this.state.press_R2 ? '💪' : '進化'}
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.center}>
            <View style={styles.center_L}>
              <View style={{flex:1,flexDirection: 'row'}}>
                <View style={{flex:1}}>
                  <TouchableHighlight
                  onPressIn={this.onPressIn_Lock}
                  onPressOut={this.onPressOut_Lock}
                  style={{borderRadius: 100,margin: 3}}>
                    <View style={styles.lock_button_S}>
                      <Text style={styles.back_welcome_S}>
                        {this.state.press_Lock ? '🔓' : '👑'}
                      </Text>
                    </View>
                  </TouchableHighlight>
                </View>
                <View style={{flex:3}}></View>
              </View>
              <View style={{flex:5,justifyContent:'flex-start'}}>
                <Animatable.Image 
                animation="pulse" iterationCount="infinite"
                source={{uri: this.state.Img}} 
                style={{width:180,height:180 }}>
              </Animatable.Image>
              </View>
            </View>
            <View style={styles.center_R}>
              <Text style={styles.center_welcome}>{'Lv '+this.state.Lv}</Text>
              <Text style={styles.center_welcome}>{'HP : '+this.state.Hp}</Text>
              <Text style={styles.center_welcome}>{'ATK : '+this.state.Atk}</Text>
              <Text style={styles.center_welcome}>{'Def : '+this.state.Def}</Text>
              <Text style={styles.center_welcome}>{'Spd : '+this.state.Spd}</Text>
            </View>
          </View> 
          <View style={styles.skill}>
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
            onPressIn={this.onPressIn_R}
            onPressOut={this.onPressOut_R}>
              <View style={styles.button_R}>
                  <Text style={styles.welcome}>
                    {this.state.press_R ? '回復' : 'skill 2'}
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
    backgroundColor: 'black',
	},
  Top_status: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  Top_status_L: {
    flex: 1,
    backgroundColor: '#EA0000',
    borderWidth: 5,
    borderColor: '#FFD306',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderTopRightRadius: 0,

  },
  Top_welcome_L: {
    fontSize: 30,
    color: '#FFFFFF',
  },
  Top_status_R:{
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d0d0d0',
    borderWidth: 10,
    borderColor: '#5B5B5B',
    borderLeftColor: '#8E8E8E',
    borderRightColor: '#8E8E8E',
  },
  Top_welcome_R: {
    fontSize: 30,
    color: 'black',
  },
  status: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#66B3FF',
    borderColor: '#0080FF',
    borderWidth: 3, 
  },
  back_button_S: {
    backgroundColor: '#00DB00',
    borderRadius: 100,
    height: 45,
    width: 45,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    justifyContent: 'center'
  },
  back_welcome_S: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  No_status_L: {
    flex: 1.2,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  No_status_M: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  No_welcome: {
    fontSize: 30,
    fontWeight: "bold",
    color: 'black',
  },
  No_status_R1:{
    flex: 1.5,
    margin: 3,
    marginRight: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  No_status_R2:{
    flex: 1.5,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  R1_button_S: {
    backgroundColor: '#EA0000',
    borderRadius: 0,
    height: 45,
    width: 55,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
  },
  R2_button_S: {
    backgroundColor: '#0E3DD5',
    borderRadius: 0,
    height: 45,
    width: 55,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    justifyContent: 'center'
  },
  center: {
    flex: 5,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderLeftColor: 'black',
    borderRightColor: 'black',
    borderLeftWidth: 10,
    borderRightWidth: 10,
  },
  center_L: {
    flex: 3,
    flexDirection: 'column',
  },
  lock_button_S: {
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    height: 45,
    width: 45,
    borderWidth: 3,
    borderColor: '#FFA442',
    justifyContent: 'center'
  },
  center_R: {
    flex: 2,
  },
  center_welcome: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: 'left',
    margin: 10,
    color: 'black'
  },
  welcome: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  skill: {
    flex: 1,
    flexDirection: 'row',
    
  },
  button_L: {
    flex: 1,
    backgroundColor: '#4F4F4F',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 5,
    borderColor: '#FFFFFF',
    justifyContent: 'center'
  },
  button_R: {
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#4F4F4F',
    borderWidth: 5,
    borderColor: '#FFFFFF',
    justifyContent: 'center'
  },
 });
module.exports = Pet;
