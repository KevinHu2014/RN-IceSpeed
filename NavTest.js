
import React, { Component } from 'react';
import {
    View,
    Navigator
} from 'react-native';

import Battle_PetBox from './Battle_PetBox';
//初始頁的Component

export default class NavTest extends React.Component {
    render() {
        let defaultName = 'Battle_PetBox';
        let defaultComponent = Battle_PetBox;
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

module.exports = NavTest;