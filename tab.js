'use strict';
var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React;
var ScrollableTabView = require('react-native-scrollable-tab-view');
var  Item = require('./Item');
var  Pet = require('./Pet');
var  Library = require('./Library');
var  Setting = require('./Setting');
var  MapExample = require('./MapExample');

var tab = React.createClass({
  render() {
    return (

      <ScrollableTabView tabBarPosition="bottom"
      tabBarTextStyle={{fontFamily: 'AvenirNext-Medium', fontSize: 25}}
      tabBarBackgroundColor="#FFD306"
      tabBarActiveTextColor="white"
      tabBarUnderlineColor="red"
      >
        
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
