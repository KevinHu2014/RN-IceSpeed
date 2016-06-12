
import React, { Component } from 'react';
import {
    View,
    Navigator
} from 'react-native';

import PetBox from './PetBox';
//初始頁的Component

export default class NavPet extends React.Component {
    render() {
        let defaultName = 'PetBox';
        let defaultComponent = PetBox;
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

module.exports = NavPet;