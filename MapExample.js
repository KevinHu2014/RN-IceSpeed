'use strict';

import React, { Component } from 'react';
var Mapbox = require('react-native-mapbox-gl');
var mapRef = 'map';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';


import battle from './battle';
import Collapsible from 'react-native-collapsible';
var Statusbar = require('./Statusbar');

var MapExample = React.createClass({
  mixins: [Mapbox.Mixin],
  getInitialState() {
    return {
      press_explore: false,
      press_announcement: false,
      press_monster: false,
      press_mission: false,
      collapsed: true,
      i: 5,
      UserLat: 25.035770510088796,
      UserLon: 121.43201887607574,
      newLat: 25.035770510088796,
      newLon: 121.43201887607574,
      center: {
        latitude: 25.03569,
        longitude: 121.43289
      },
      annotations: [
      {
        coordinates: [ 25.03561011686629,121.43148511648178],
        type: 'point',
        title: '寶貝中心',
        subtitle: '聖言樓',

      },
      {
        coordinates: [ 25.033375,121.433839],
        type: 'point',
        title: '寶貝中心',
        subtitle: '真善美聖',
      },
      {
        coordinates: [ 25.035108,121.433324],
        type: 'point',
        title: '寶貝中心',
        subtitle: '小夜市',
      },
      {
        coordinates: [ 25.038195824467437,121.43146634101866],
        type: 'point',
        title: '寶貝中心',
        subtitle: '中美堂',
      },
      {
        coordinates: [ 25.038145, 121.429724],
        type: 'point',
        title: '商店',
        subtitle: '小夜市',
      },
      {
        coordinates: [ 25.03552505976925, 121.43098086118697],
        type: 'point',
        title: '商店',
        subtitle: '理園',
      },
      {
        coordinates: [ 25.034431463268053, 121.4339929819107],
        type: 'point',
        title: '商店',
        subtitle: '輔園',
      },
      {
        coordinates: [ 25.03708038022287, 121.43301397562027],
        type: 'point',
        title: '商店',
        subtitle: '文園',
      },
      ]
      
    }
  },
  _toggleExpanded() {
    this.setState({ collapsed: !this.state.collapsed });
  },
  onUserLocationChange(location) {
    //console.log(location);
    this.state.UserLat = location.src.latitude; 
    this.state.UserLon = location.src.longitude;
    /*this.addAnnotations(mapRef, [{
          coordinates: [this.state.UserLat,this.state.UserLon],
          type: 'point',
          title: 'This is a new marker',
          id: 'foo'
        },]);*/

    this.setCenterCoordinateZoomLevelAnimated(mapRef, this.state.UserLat, this.state.UserLon,17);
  },
  onLongPress(location) {
    //console.log(location);
    //this.setState({ collapsed: !this.state.collapsed });
  },
  onRegionChange(location) {
    //console.log(location);
   
  },
  onOpenAnnotation(annotation) {
    console.log(annotation.src.title);
    if(annotation.src.title=='寶貝中心'){
      Alert.alert(
        '歡迎來到寵物中心',
        '你的寵物都已回復～',
        [
          
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]
      )
    }
    else{
      const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'battle',
                component: battle,
            })
        }
    }
    
  },
  _pressButton() {
    this.setState({ collapsed: !this.state.collapsed });
  },
  onPressIn_monster() {
    this.setState({press_: true});
  },
  onPressOut_monster() {
    this.setState({press_: true});
  },
  onPressIn_announcement() {
    this.setState({press_: true});
  },
  onPressOut_announcement() {
    this.setState({press_: true});
  },
  onPressIn_mission() {
    this.setState({press_: true});
  },
  onPressOut_mission() {
    this.setState({press_: true});
  },
  onPressIn_explore() {
    this.setState({press_explore: true});
    this.removeAllAnnotations(mapRef);
  },
  onPressOut_explore() {
    this.setState({press_explore: false});
    this.addAnnotations(mapRef,[
      {
        coordinates: [ 25.03561011686629,121.43148511648178],
        type: 'point',
        title: '寶貝中心',
        subtitle: '聖言樓',

      },
      {
        coordinates: [ 25.033375,121.433839],
        type: 'point',
        title: '寶貝中心',
        subtitle: '真善美聖',
      },
      {
        coordinates: [ 25.035108,121.433324],
        type: 'point',
        title: '寶貝中心',
        subtitle: '小夜市',
      },
      {
        coordinates: [ 25.038195824467437,121.43146634101866],
        type: 'point',
        title: '寶貝中心',
        subtitle: '中美堂',
      },
      {
        coordinates: [ 25.038145, 121.429724],
        type: 'point',
        title: '商店',
        subtitle: '小夜市',
      },
      {
        coordinates: [ 25.03552505976925, 121.43098086118697],
        type: 'point',
        title: '商店',
        subtitle: '理園',
      },
      {
        coordinates: [ 25.034431463268053, 121.4339929819107],
        type: 'point',
        title: '商店',
        subtitle: '輔園',
      },
      {
        coordinates: [ 25.03708038022287, 121.43301397562027],
        type: 'point',
        title: '商店',
        subtitle: '文園',
      },
      ]);
    for(this.state.i=0;this.state.i<10;this.state.i++){
      let distance = 0.00003;
      let x = Math.floor(Math.random() * 20 - 10);//-10~10
      let y = Math.floor(Math.random() * 20 - 10);//-10~10
      this.state.newLat = this.state.UserLat + x*distance;
      this.state.newLon = this.state.UserLon + y*distance;
      console.log(x);
      console.log(y);
      console.log(this.state.newLat);
      console.log(this.state.newLon);
      this.addAnnotations(mapRef, [{
          coordinates: [this.state.newLat,this.state.newLon],
          type: 'point',
          title: '我是怪物',
          id: 'foo'
        },]);
    }
  },
  render() {
    return (
      <View style={styles.container}>
       
       
        <View style={styles.status}>
          <View style={styles.Top_status}>
            <View style={styles.Top_status_L}>
              <TouchableOpacity onPress={this._pressButton}>
                <View style={styles.Top_status_Button_L}>
                  <Text style={styles.Top_welcome_L}>三</Text>
                </View> 
              </TouchableOpacity>
            </View>
            <View style={styles.Top_status_R}>
                
                  <Text style={styles.Top_welcome_R}>冰櫃神速</Text>
                
            </View>
          </View>
        </View>
        <Collapsible collapsed={this.state.collapsed} align="center">
          <View style={styles.explore}>
            <View style={styles.explore_child}>
              <TouchableHighlight
                onPressIn={this.onPressIn_monster}
                onPressOut={this.onPressOut_monster}
                style={{borderRadius: 100}}>
                  <View style={styles.button_monster}>
                    <Text style={styles.welcome_S}>
                      {this.state.press_monster ? '怪物' : '怪物'}
                    </Text>
                  </View>
              </TouchableHighlight>
            </View>
            <View style={styles.explore_child}>
              <TouchableHighlight
                onPressIn={this.onPressIn_announcement}
                onPressOut={this.onPressOut_announcement}
                style={{borderRadius: 100}}>
                  <View style={styles.button_announcement}>
                    <Text style={styles.welcome_S}>
                      {this.state.press_announcement ? '公告' : '公告'}
                    </Text>
                  </View>
              </TouchableHighlight>
            </View>
            <View style={styles.explore_child}>
              <TouchableHighlight
                onPressIn={this.onPressIn_mission}
                onPressOut={this.onPressOut_mission}
                style={{borderRadius: 100}}>
                  <View style={styles.button_mission}>
                    <Text style={styles.welcome_S}>
                      {this.state.press_mission ? '任務' : '任務'}
                    </Text>
                  </View>
              </TouchableHighlight>
            </View>
            <View style={styles.explore_child}>
              <TouchableHighlight
                onPressIn={this.onPressIn_explore}
                onPressOut={this.onPressOut_explore}
                style={{borderRadius: 100}}>
                  <View style={styles.button_explore}>
                    <Text style={styles.welcome_S}>
                      {this.state.press_explore ? '探索' : '探索'}
                    </Text>
                  </View>
              </TouchableHighlight>
            </View>
          </View>
        </Collapsible>
        <Mapbox
          annotations={this.state.annotations}
          accessToken={'pk.eyJ1IjoiaHNpYW5neXVodSIsImEiOiJjaWxjZmRvNnYyc2JldHZrbjl4NDI2ZHJ5In0.7-8mr_MQVflOmy0GjLOpeQ'}
          centerCoordinate={this.state.center}
          debugActive={false}
          direction={60}
          ref={mapRef}
          onRegionChange={this.onRegionChange}
          rotateEnabled={true}
          scrollEnabled={true}
          style={styles.map}
          showsUserLocation={true}
          styleURL={'mapbox://styles/hsiangyuhu/cio0zgf4s003petluquple91i'}
          //styleURL={this.mapStyles.streets}
          userTrackingMode={this.userTrackingMode.none}
          zoomEnabled={true}
          zoomLevel={17}
          compassIsHidden={true}
          onUserLocationChange={this.onUserLocationChange}
          onLongPress={this.onLongPress}
          logoIsHidden={true}
          attributionButtonIsHidden={true}
          onOpenAnnotation={this.onOpenAnnotation}
        />
          
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  Top_status: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#8E8E8E',
  },
  Top_status_L: {
    flex: 1,
    //backgroundColor: '#EA0000',
    //borderWidth: 5,
    //borderColor: '#FFD306',
    justifyContent: 'center',
    alignItems: 'center',
    //borderRadius: 100,
    //borderTopRightRadius: 0,

  },
  Top_welcome_L: {
    fontSize: 30,
    color: '#FFFFFF',
  },
  Top_status_R:{
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d0d0d0',
    borderWidth: 10,
    borderColor: '#5B5B5B',
    borderTopColor: '#A0A0A0',
    borderLeftColor: '#8E8E8E',
    borderRightColor: '#858585',
  },
  Top_welcome_R: {
    fontSize: 30,
    color: 'black',
  },
  Top_status_Button_L:{
    backgroundColor: '#2881F0',
    borderRadius: 10,
    height: 50,
    width: 50,
    margin:2,
    //borderWidth: 3,
    //borderColor: '#6F7469',
    justifyContent: 'center',
    alignItems: 'center',

  },
  status: {
    flex: 1,
    flexDirection: 'row',
  },
  status_L: {
    flex: 1,
    backgroundColor: '#EA0000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome_L: {
    fontSize: 30,
    color: '#000000',
  },
  status_R:{
    flex: 4,
    backgroundColor: '#8E8E8E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome_R: {
    fontSize: 30,
    color: '#FFFFFF',
  },
  map: {
    flex: 7,
  },
  explore: {
    flex: 1,
    backgroundColor: '#5B5B5B',
    flexDirection:'row'
  },
  explore_child: {
    flex:1,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_monster: {
    backgroundColor: '#7FFF28',
    borderRadius: 100,
    height: 60,
    width: 60,
    margin:2,
    borderWidth: 3,
    borderColor: '#36BB14',
    justifyContent: 'center'
  },
  button_announcement: {
    backgroundColor: '#FFC919',
    borderRadius: 100,
    height: 60,
    width: 60,
    margin:2,
    borderWidth: 3,
    borderColor: '#C0740C',
    justifyContent: 'center'
  },
  button_mission: {
    backgroundColor: '#13B0FF',
    borderRadius: 100,
    height: 60,
    width: 60,
    margin:2,
    borderWidth: 3,
    borderColor: '#177DDB',
    justifyContent: 'center'
  },
  button_explore: {
    backgroundColor: '#8600FF',
    borderRadius: 100,
    height: 60,
    width: 60,
    margin:2,
    borderWidth: 3,
    borderColor: '#5B00AE',
    justifyContent: 'center'
  },
  welcome_S: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
   slideContainer: {
    height: 100,
  },
  slide: {
    padding: 15,
    height: 100,
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});
module.exports = MapExample;
