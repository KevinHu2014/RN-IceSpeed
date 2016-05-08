'use strict';

var React = require('react-native');
var Mapbox = require('react-native-mapbox-gl');
var {
  AppRegistry,
  StyleSheet,
  View,
  ListView,
  Text,
  TouchableOpacity,
  TouchableHighlight
} = React;
var mapRef = 'map';

import battle from './battle';

var MapExample = React.createClass({
  mixins: [Mapbox.Mixin],
  getInitialState() {
    return {
      press: false,
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
        coordinates: [ 25.035770510088796,121.43201887607574],
        type: 'point',
        title: 'Important!',
        subtitle: 'Neat, this is a custom annotation image'
      }]
      
    }
  },
  onUserLocationChange(location) {
    console.log(location);
    this.state.UserLat = location.src.latitude; 
    this.state.UserLon = location.src.longitude;
    /*this.addAnnotations(mapRef, [{
          coordinates: [this.state.newLat,this.state.newLon],
          type: 'point',
          title: 'This is a new marker',
          id: 'foo'
        },]);*/

    this.setCenterCoordinateZoomLevelAnimated(mapRef, this.state.UserLat, this.state.UserLon,17);
  },
  onLongPress(location) {
    console.log(location);
    this.addAnnotations(mapRef, [{
          coordinates: [this.state.newLat,this.state.newLon],
          type: 'point',
          title: 'This is a new marker',
          id: 'foo'
        },]);
  },
  onRegionChange(location) {
    console.log(location);
   
  },
  onOpenAnnotation(annotation) {
    console.log(annotation);
    const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'battle',
                component: battle,
            })
        }
  },
  _pressButton() {
        
  },
  onPressIn() {
    this.setState({press_Back: true});
    //this.removeAllAnnotations(mapRef);
  },
  onPressOut() {
    this.setState({press_Back: false});
    for(this.state.i=0;this.state.i<5;this.state.i++){
      let distance = 0.0001;
      let x = Math.floor(Math.random() * 9 + 1);//1~10
      let y = Math.floor(Math.random() * 9 + 1);//1~10
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
          styleURL={this.mapStyles.streets}
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
        <View style={styles.explore}>
          <View style={{flex: 4,}}></View>
          <View style={styles.explore_R}>
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
    borderWidth: 3,
    borderColor: '#FFFFFF',
    justifyContent: 'center'
  },
  welcome_S: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },

});
module.exports = MapExample;
