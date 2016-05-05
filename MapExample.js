'use strict';

var React = require('react-native');
var Mapbox = require('react-native-mapbox-gl');
var {
  AppRegistry,
  StyleSheet,
  View,
  ListView,
  Text,
  TouchableOpacity
} = React;
var mapRef = 'map';

import battle from './battle';

var MapExample = React.createClass({
  mixins: [Mapbox.Mixin],
  getInitialState() {
    return {
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
  },
  onLongPress(location) {
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
          direction={10}
          ref={mapRef}
          onRegionChange={this.onRegionChange}
          rotateEnabled={true}
          scrollEnabled={true}
          style={styles.map}
          showsUserLocation={true}
          styleURL={this.mapStyles.streets}
          userTrackingMode={this.userTrackingMode.none}
          zoomEnabled={true}
          zoomLevel={14}
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
    flex: 8,
  }
});
module.exports = MapExample;
