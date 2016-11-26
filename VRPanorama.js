import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Modal,
  TouchableOpacity,
  Image
} from 'react-native';
import GoogleVRPanorama, { PanoramaView } from 'react-native-google-vr-panorama'
import * as Progress from 'react-native-progress';
var {height, width} = Dimensions.get('window');



var VRPanorama = React.createClass({
  getInitialState(){
    return{
      progress: 100,
      indeterminate: true,
      modalVisible: true,
    }
  },
  onImageLoaded() {
    this.setState({
      indeterminate: false,
      modalVisible: false, 
    });
  },
  onPressIn(){

  },
  render() {

    const imageUrl = 'https://s13.postimg.org/9k7g7m9ev/image.jpg'
    //const inputType = GoogleVRPanorama.inputType.stereo
    const inputType = GoogleVRPanorama.inputType.momo
    return (
        <View style={styles.container}>
          <Modal
            animationType={"none"}
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {alert("Modal has been closed.")}}>
            <View style={{ flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: '#FFFFFF'}}>
              <Progress.CircleSnail
                colors={['red', 'green', 'blue']} 
                progress={this.state.progress}
                indeterminate={this.state.indeterminate}
                direction="counter-clockwise"
              />
           </View>
          </Modal>
          <PanoramaView style={{borderWidth:1,height:height}} imageUrl={imageUrl} inputType={inputType} 
          onImageLoaded={this.onImageLoaded}/>
          <TouchableOpacity
                onPressIn={this.onPressIn_explore}
                onPressOut={this.onPressOut_explore}
                style={{borderRadius: 100,position: 'absolute',left: (width-130)/2,top: height-170}}>
                    <Image source={require('./Img/explore.png')} 
                         style={{width:130,height:130}}/>
          </TouchableOpacity>
        </View>
    );

    
    

  }
});

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