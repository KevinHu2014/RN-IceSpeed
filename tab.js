
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
var ScrollableTabView = require('react-native-scrollable-tab-view');
//var  Item = require('./Item');
var  Item = require('./object');
var  Pet = require('./NavPet');
//var  Library = require('./Library');
var  Library = require('./NavBox');
var  Setting = require('./Setting');
var  SampleComponent = require('./SampleComponent');

var tab = React.createClass({
  render() {
    return (

      <ScrollableTabView tabBarPosition="bottom"
      tabBarTextStyle={{fontFamily: 'AvenirNext-Medium', fontSize: 25}}
      tabBarBackgroundColor="white"
      tabBarActiveTextColor="#146EFF"
      tabBarUnderlineColor="#146EFF"
      locked={true}
      >
        <SampleComponent tabLabel="地圖" />
      	<Item tabLabel="道具" />
        <Pet tabLabel="寵物" />
        <Library tabLabel="圖鑑" />
        <Setting tabLabel="設定" />
      </ScrollableTabView>
    );
  }
});
var styles = StyleSheet.create({

 });
module.exports = tab;
