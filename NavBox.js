
import React, { Component } from 'react';
import  {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator,
} from 'react-native';
import Box from './Box';
var NavBox = React.createClass({
  renderScene: function(route, navigator) {
    var Component = route.component;

    return (
      <Component navigator={navigator} route={route} {...route.passProps} />
    );
  },

  render: function() {
    return (
      <Navigator
        ref="navigator"
        style={{ flex: 1 }}
        renderScene={this.renderScene}
        initialRoute={{
          component: Box,
        }}
      />
    );
  }
});

module.exports =  NavBox;