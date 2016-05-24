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

var MapExample = React.createClass({
  mixins: [Mapbox.Mixin],
  getInitialState() {
    return {
      press: false,
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
    this.setState({ collapsed: !this.state.collapsed });
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
        
  },
  onPressIn() {
    this.setState({press_Back: true});
    this.removeAllAnnotations(mapRef);
  },
  onPressOut() {
    this.setState({press_Back: false});
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
          title: 'This is a new marker',
          id: 'foo'
        },]);
    }
  },
  render() {
    return (
      <View style={styles.container}>
       
       
        <View style={styles.status}>
          <View style={styles.status_L}>
            <Text style={styles.welcome_L}>火</Text>
          </View>
          <View style={styles.status_R}>
            <TouchableOpacity onPress={this._pressButton}>
                <Text style={styles.welcome_R}>冰櫃神速</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row',flex: 8,}}>
          <View style={{flex: 5,}}>
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
          <Collapsible collapsed={this.state.collapsed} align="center">
          <View style={{flex: 1,}}>
            
              <TouchableHighlight
                onPressIn={this.onPressIn}
                onPressOut={this.onPressOut}
                style={{borderRadius: 100}}>
                  <View style={styles.button_S}>
                    <Text style={styles.welcome_S}>
                      {this.state.press ? '探索' : '探索'}
                    </Text>
                  </View>
              </TouchableHighlight>
            
          </View>
          </Collapsible>
        </View> 
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
    flexDirection: 'row',
  },
  explore_R: {
    flex:1,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_S: {
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
