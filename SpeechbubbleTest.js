
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import SpeechBubble from 'react-native-speech-bubble';
import * as Progress from 'react-native-progress';

var SpeechbubbleTest = React.createClass({
  render() {
    return (
      <View> 
        <View style={{flex: 6,}}></View>
        <View style={{flex: 1,}}>
          <SpeechBubble allowSpeechReplay={true}
            speeches={[ 'String 1', 'String 2', 'String 3' ]}
          />
        </View>
      </View>
    );
  }
});
var styles = StyleSheet.create({

 });
module.exports = SpeechbubbleTest;
