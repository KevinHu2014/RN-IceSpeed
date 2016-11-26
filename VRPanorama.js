import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import GoogleVRPanorama, { PanoramaView } from 'react-native-google-vr-panorama'
var {height, width} = Dimensions.get('window');
class VRPanorama extends Component {
  render() {

    const imageUrl = 'https://s13.postimg.org/9k7g7m9ev/image.jpg'
    //const inputType = GoogleVRPanorama.inputType.stereo
    const inputType = GoogleVRPanorama.inputType.momo
    
    return (
        <View style={styles.container}>
          <PanoramaView style={{borderWidth:1,height:height}} imageUrl={imageUrl} inputType={inputType} onImageLoaded={console.log('success')} 
          onImageLoadingFailed={console.log('failed')} />
        </View>
        
    )
}
}

const styles = StyleSheet.create({
  container: {
    borderWidth:1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = VRPanorama;