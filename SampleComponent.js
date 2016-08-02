
import React, { Component } from 'react';
import {
    View,
    Navigator
} from 'react-native';
var Mapbox = require('react-native-mapbox-gl');
//import FirstPageComponent from './FirstPageComponent';
import NewMap from './NewMap';
//初始頁的Component

export default class SampleComponent extends React.Component {
    render() {
        let defaultName = 'NewMap';
        let defaultComponent = NewMap;
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

module.exports = SampleComponent;