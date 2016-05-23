
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
} from 'react-native';

var Sound = require('react-native-sound');
var s = new Sound('demo.mp3', Sound.MAIN_BUNDLE, (e) => {
      
        s.play();
        s.setNumberOfLoops(-1);
    });
var Setting = React.createClass({
  getDefaultProps() {
    return {
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
  render() {
    return (
      <View>
        <Text style={styles.text}>
          音量
          {this.state.value && +this.state.value.toFixed(2)}
          
        </Text>
        <Slider
          {...this.props}
          onValueChange={(value) => this._onValueChange(value)} />
        <View style={styles.the_switch}>
        	<Switch
          		onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
          		style={{marginBottom: 10,}}
          		value={this.state.falseSwitchIsOn} />
        	<Switch
          		onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
          		value={this.state.trueSwitchIsOn} />
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
    fontWeight: '500',
    margin: 10,
  },
  button: {
    fontSize: 20,
    backgroundColor: 'silver',
    padding: 5,
  },
 });
module.exports = Setting;
