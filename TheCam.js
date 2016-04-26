'use strict';
import React, {
  AppRegistry,
  Component,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';

class TheCam extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          flashMode={Camera.constants.FlashMode.on}
          aspect={Camera.constants.Aspect.fill}>
        </Camera>
        <TouchableHighlight
        onPress={this.takePicture.bind(this)}
        style={styles.touchable}>
          <View style={styles.button_M}>
              <Text style={styles.welcome_M}>
              [CAPTURE]
          </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  touchable: {
    borderRadius: 100
  },
  welcome_M: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  button_M: {
    flex : 1,
    backgroundColor: '#4F4F4F',
    borderRadius: 100,
    height: 100,
    width: 100,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    justifyContent: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});
module.exports = TheCam;
