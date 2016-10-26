
import React, { Component } from 'react';
import  {
  Slider,
  Switch,	
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  BackAndroid,
  AppState,
  ToastAndroid,
  DeviceEventEmitter,
  NativeModules,
} from 'react-native';
var mSensorManager = require('NativeModules').SensorManager;
//var {ScreenBrightness} = NativeModules;//there is some issues on ScreenBrightness package, in the meantime it will be disabled
var Sound = require('react-native-sound');
import Icon from 'react-native-vector-icons/Ionicons';
import Statusbar from './Statusbar';

var s = new Sound('demo.mp3', Sound.MAIN_BUNDLE, (e) => {
      
        s.play();
        s.setNumberOfLoops(-1);
    });
var Setting = React.createClass({
  getDefaultProps() {
    return {
      light: null,
      value: 1,
    }
  },

  getInitialState() {
    return {
      value: this.props.value,
      trueSwitchIsOn: true,
      falseSwitchIsOn: false,
      currentAppState: AppState.currentState,
    };
  },
  _onValueChange(value){
    this.setState({value: value});
    s.setVolume(this.state.value);
  },
  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
    mSensorManager.startLightSensor(100);
    DeviceEventEmitter.addListener('LightSensor', function (data) {
        //console.log(data.light);
        this.setState({
          light: data.light,
        });
        if(this.state.light >= 10000){
          //ScreenBrightness.setBrightness(1);
        }
        else if(this.state.light > 40){
          //ScreenBrightness.setBrightness(0.7);
        }
        else {
          //ScreenBrightness.setBrightness(0);
        }
    }.bind(this));
  },
  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  },
  _handleAppStateChange(currentAppState) {
    this.setState({ currentAppState, });
    ToastAndroid.show('當前狀態為:'+currentAppState,ToastAndroid.SHORT);
    if(currentAppState == 'background'){
        s.pause();
    }
    else{
      s.play();
    }
  },
  onPress_Back(){
    const { navigator } = this.props;
            if(navigator) {
                //返回Map
                navigator.pop();
            }
  },
  render() {
    return (
      <View style={{flex: 1,}}>
        <View style={{flex: 1,}}>
          <Statusbar/>
        </View>
        {/*Back Button*/}
         <View style={{flex: 1,margin: 5,position: 'absolute',left:0,top:0}}>
          <Icon.Button name="md-arrow-round-back" backgroundColor="#8E8E8E"
           onPress={this.onPress_Back} size={50}></Icon.Button>
         </View>
        <View style={{flex: 7,}}>
          <Text style={styles.text}>
            音量
            {this.state.value && +this.state.value.toFixed(2)}
          
          </Text>
          <Slider
            {...this.props}
            onValueChange={(value) => this._onValueChange(value)} />
          <View style={styles.the_switch}>
            <Text style={styles.welcome}>{this.state.light}</Text>
            <Switch
                onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                style={{marginBottom: 10,}}
                value={this.state.falseSwitchIsOn} />
            <Switch
                onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
                value={this.state.trueSwitchIsOn} />
          </View>  
        </View>
        
          
      </View>

    );
  }

  
});
// BackAndroid.addEventListener('hardwareBackPress', function() {
//      s.pause();//當按下返回鍵的時候自動暫停音樂
// });
var styles = StyleSheet.create({
  
  the_switch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    height: 10,
    margin: 10,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    fontSize: 20,
    backgroundColor: 'silver',
    padding: 5,
  },
 });
module.exports = Setting;
