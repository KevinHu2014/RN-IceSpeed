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
      }, {
        coordinates: [[40.76572150042782,-73.99429321289062],[40.743485405490695, -74.00218963623047],[40.728266950429735,-74.00218963623047],[40.728266950429735,-73.99154663085938],[40.73633186448861,-73.98983001708984],[40.74465591168391,-73.98914337158203],[40.749337730454826,-73.9870834350586]],
        type: 'polyline',
        strokeColor: '#00FB00',
        strokeWidth: 3,
        alpha: 0.5,
        id: 'foobar'
      }, {
        coordinates: [[40.749857912194386, -73.96820068359375], [40.741924698522055,-73.9735221862793], [40.735681504432264,-73.97523880004883], [40.7315190495212,-73.97438049316406], [40.729177554196376,-73.97180557250975], [40.72345355209305,-73.97438049316406], [40.719290332250544,-73.97455215454102], [40.71369559554873,-73.97729873657227], [40.71200407096382,-73.97850036621094], [40.71031250340588,-73.98691177368163], [40.71031250340588,-73.99154663085938]],
        type: 'polygon',
        alpha:1,
        fillColor: '#FFFFFF',
        strokeColor: '#FFFFFF',
        strokeWidth: 1,
        id: 'zap'
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
  },
  _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'battle',
                component: battle,
            })
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
