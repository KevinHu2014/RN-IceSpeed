'use strict';
/* eslint no-console: 0 */

import React, { Component } from 'react';
import Mapbox, { MapView } from 'react-native-mapbox-gl';
var mapRef = 'map';
import {
  Alert,
  StyleSheet,
  Text,
  StatusBar,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const accessToken = 'pk.eyJ1IjoiaHNpYW5neXVodSIsImEiOiJjaWxjZmRvNnYyc2JldHZrbjl4NDI2ZHJ5In0.7-8mr_MQVflOmy0GjLOpeQ';
Mapbox.setAccessToken(accessToken);

Mapbox.addOfflinePackForRegion;
Mapbox.addOfflinePack({
    name: 'test', // required
    type: 'bbox', // required, only type currently supported`
    metadata: { // optional. You can put any information in here that may be useful to you
        date: new Date(),
        foo: 'bar'
    },
    bounds: [ // required. The corners of the bounded rectangle region being saved offline
      25.032036, 121.426971, 25.041509, 121.437695
    ],
    minZoomLevel: 13, // required
    maxZoomLevel: 17, // required
    styleURL: 'mapbox://styles/hsiangyuhu/cio0zgf4s003petluquple91i' // required. Valid styleURL
}).then(() => {
  // Called after the pack has been added successfully
  console.log('success')
}).catch(err => {
  console.error(err); // Handle error
});

import battle from './battle';
import FetchTest from './FetchTest';
import Collapsible from 'react-native-collapsible';
var Statusbar = require('./Statusbar');
var {height, width} = Dimensions.get('window');

var NewMap = React.createClass({
  getInitialState() {
    return {
      center: {
        latitude: 25.03569,
        longitude: 121.43289
      },
      zoom: 17,
      userTrackingMode: Mapbox.userTrackingMode.none,
      press_explore: false,
      press_announcement: false,
      press_monster: false,
      press_mission: false,
      collapsed: true,
      test: '測試用的XDDDD',
      result: '冰櫃神速',
      i: 5,
      UserLat: 25.035770510088796,
      UserLon: 121.43201887607574,
      newLat: 25.035770510088796,
      newLon: 121.43201887607574,
      annotations: [
      {
        coordinates: [ 25.03561011686629,121.43148511648178],
        type: 'point',
        title: '寶貝中心',
        subtitle: '聖言樓',
        id: '聖言樓',
        annotationImage: {
            source: { uri: 'pc' },
            height: 25,
            width: 25
          },

      },
      {
        coordinates: [ 25.033375,121.433839],
        type: 'point',
        title: '寶貝中心',
        subtitle: '真善美聖',
        id: '真善美聖',
        annotationImage: {
            source: { uri: 'pc' },
            height: 25,
            width: 25
          },
      },
      {
        coordinates: [ 25.035108,121.433324],
        type: 'point',
        title: '寶貝中心',
        subtitle: '小夜市',
        id: '小夜市',
        annotationImage: {
            source: { uri: 'pc' },
            height: 25,
            width: 25
          },
      },
      {
        coordinates: [ 25.038195824467437,121.43146634101866],
        type: 'point',
        title: '寶貝中心',
        subtitle: '中美堂',
        id: '中美堂',
        annotationImage: {
            source: { uri: 'pc' },
            height: 25,
            width: 25
          },
      },
      {
        coordinates: [ 25.038145, 121.429724],
        type: 'point',
        title: '商店',
        subtitle: '小夜市',
        id: '小夜市',
        annotationImage: {
            source: { uri: 'shop' },
            height: 25,
            width: 25
          },
      },
      {
        coordinates: [ 25.03552505976925, 121.43098086118697],
        type: 'point',
        title: '商店',
        subtitle: '理園',
        id: '理園',
        annotationImage: {
            source: { uri: 'shop' },
            height: 25,
            width: 25
          },
      },
      {
        coordinates: [ 25.034431463268053, 121.4339929819107],
        type: 'point',
        title: '商店',
        subtitle: '輔園',
        id: '輔園',
        annotationImage: {
            source: { uri: 'shop' },
            height: 25,
            width: 25
          },
      },
      {
        coordinates: [ 25.03708038022287, 121.43301397562027],
        type: 'point',
        title: '商店',
        subtitle: '文園',
        id: '文園',
        annotationImage: {
            source: { uri: 'shop' },
            height: 25,
            width: 25
          },
      },
      {
        coordinates: [0,0],
          type: 'point',
          title: '我是怪物',
          id: 'No.0'
      },
      {
        coordinates: [0,0],
          type: 'point',
          title: '我是怪物',
          id: 'No.1'
      },
      {
        coordinates: [0,0],
          type: 'point',
          title: '我是怪物',
          id: 'No.2'
      },
      {
        coordinates: [0,0],
          type: 'point',
          title: '我是怪物',
          id: 'No.3'
      },
      {
        coordinates: [0,0],
          type: 'point',
          title: '我是怪物',
          id: 'No.4'
      },
      {
        coordinates: [0,0],
          type: 'point',
          title: '我是怪物',
          id: 'No.5'
      },
      ]
      
    }
  },
  componentWillMount() {
    this._offlineProgressSubscription = Mapbox.addOfflinePackProgressListener(progress => {
      console.log('offline pack progress', progress);
    });
    this._offlineMaxTilesSubscription = Mapbox.addOfflineMaxAllowedTilesListener(tiles => {
      console.log('offline max allowed tiles', tiles);
    });
    this._offlineErrorSubscription = Mapbox.addOfflineErrorListener(error => {
      console.log('offline error', error);
    });
  },

  componentWillUnmount() {
    this._offlineProgressSubscription.remove();
    this._offlineMaxTilesSubscription.remove();
    this._offlineErrorSubscription.remove();
  },
  onPressOut_explore() {
    this.setState({press_explore: false});

    for(this.state.i=0;this.state.i<5;this.state.i++){
      let distance = 0.00003;
      let ID = 'No.'+ this.state.i;
      let x = Math.floor(Math.random() * 20 - 10);//-10~10
      let y = Math.floor(Math.random() * 20 - 10);//-10~10
      this.state.newLat = this.state.UserLat + x*distance;
      this.state.newLon = this.state.UserLon + y*distance;
      console.log(x);
      console.log(y);
      console.log(this.state.newLat);
      console.log(this.state.newLon);
      // this.addAnnotations(mapRef, [{
      //     coordinates: [this.state.newLat,this.state.newLon],
      //     type: 'point',
      //     title: '我是怪物',
      //     id: 'foo'
      //   },]);
      this.setState({
        annotations: this.state.annotations.map(annotation => {
          if (annotation.id !== ID) { return annotation; }
          return {
            coordinates: [this.state.newLat,this.state.newLon],
            'type': 'point',
            title: '我是怪物',
            subtitle: ID,
            annotationImage: {
              source: { uri: 'https://cldup.com/7NLZklp8zS.png' },
              height: 25,
              width: 25
            },
            id: ID
          };
        })
      });

    }
    /*this.setState({
      collapsed: !this.state.collapsed
    });*/
  },
  render() {
   
    return (
        <View style={styles.container}>
       
        <View style={styles.status}>
          <View style={styles.Top_status}>
            <View style={styles.Top_status_L}>

              
                  <Text style={styles.Top_welcome_L} onPress={this._pressButton}>三</Text>
                
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
                      {this.state.press_announcement ? '玩家' : '玩家'}
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
        <MapView
          ref={mapRef}
          style={styles.map}
          initialCenterCoordinate={this.state.center}
          initialZoomLevel={this.state.zoom}
          initialDirection={0}
          rotateEnabled={true}
          scrollEnabled={true}
          zoomEnabled={true}
          showsUserLocation={true}
          styleURL={'mapbox://styles/hsiangyuhu/cio0zgf4s003petluquple91i'}
          userTrackingMode={this.state.userTrackingMode}
          annotations={this.state.annotations}
          annotationsAreImmutable={true}
          onChangeUserTrackingMode={this.onChangeUserTrackingMode}
          onRegionDidChange={this.onRegionDidChange}
          onRegionWillChange={this.onRegionWillChange}
          onOpenAnnotation={this.onOpenAnnotation}
          onRightAnnotationTapped={this.onRightAnnotationTapped}
          onUpdateUserLocation={this.onUpdateUserLocation}
          onLongPress={this.onLongPress}
          onTap={this.onTap}
        />
        <TouchableOpacity
                onPressIn={this.onPressIn_explore}
                onPressOut={this.onPressOut_explore}
                style={{borderRadius: 100,position: 'absolute',left: width-93,top: height-173}}>
                    <Image source={require('./Img/explore.png')} 
                         style={{width:83,height:83}}/>
              </TouchableOpacity>
          
      </View>
        
     
    );
  }

 
});

const styles = StyleSheet.create({
  
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
    backgroundColor: '#AFAFAF',
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
    backgroundColor: '#0DE106',
    borderRadius: 100,
    height: 60,
    width: 60,
    margin:2,
    borderWidth: 3,
    borderColor: '#C6CBD2',
    justifyContent: 'center'
  },
  button_announcement: {
    backgroundColor: '#E4B417',
    borderRadius: 100,
    height: 60,
    width: 60,
    margin:2,
    borderWidth: 3,
    borderColor: '#C6CBD2',
    justifyContent: 'center'
  },
  button_mission: {
    backgroundColor: '#13B0FF',
    borderRadius: 100,
    height: 60,
    width: 60,
    margin:2,
    borderWidth: 3,
    borderColor: '#C6CBD2',
    justifyContent: 'center'
  },
  button_explore: {
    backgroundColor: '#8600FF',
    borderRadius: 100,
    height: 60,
    width: 60,
    margin:2,
    borderWidth: 3,
    borderColor: '#C6CBD2',
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

module.exports = NewMap;