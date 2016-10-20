
import React, { Component } from 'react';
import {
    View,
    Navigator
} from 'react-native';
var Mapbox = require('react-native-mapbox-gl');
import NewMap from './NewMap';
import MultiMap from './MultiMap';
//初始頁的Component

export default class NavMap extends React.Component {
    render() {
        let defaultName = 'MultiMap';
        let defaultComponent = MultiMap;
        return (
        <Navigator
          initialRoute={{ name: defaultName, component: defaultComponent }}
          //啟動app時，所看到的初始頁面
          configureScene={(route) => {
            return Navigator.SceneConfigs.FadeAndroid;
            //轉場動畫效果
          }}
          renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} />
          }} />
        );
    }
} 

module.exports = NavMap;