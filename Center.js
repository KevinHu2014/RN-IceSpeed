'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Modal,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import LoopAnimation from 'react-native-LoopAnimation';
import * as Animatable from 'react-native-animatable';
var {height, width} = Dimensions.get('window');

class Center extends Component {
   constructor(props) {
    super(props);
    this.state = {modalVisible: false};
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
	     <View style={{flex:1}}>
	      <Modal
	          animationType={"fade"}
	          transparent={true}
	          visible={this.state.modalVisible}
	          onRequestClose={() => {alert("Modal has been closed.")}}
          >
          	<View style={{ flex: 1,backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
	          <View>
	            <Text>Hello World!</Text>

	            <TouchableHighlight onPress={() => {
	              this.setModalVisible(!this.state.modalVisible)
	            }}>
	              <Text>Hide Modal</Text>
	            </TouchableHighlight>

	          </View>
	         </View>
          </Modal>
	      {/*this is the background animation */}
	      <LoopAnimation source={require('./Img/heart.png')} duration={10000} />
	      <View style={{
	        flex: 1,
	        flexDirection: 'column',
	        justifyContent: 'center',
	        alignItems: 'center',
	      }}>
	        {/*Content goes here*/}
	        <View style={{flex: 1,}}>
	        	<Animatable.Text style={styles.welcome} animation="pulse" iterationCount="infinite" 
	        		onPress={()=>{this.setModalVisible(true)}}>
	        	  回復中
	        	</Animatable.Text>
	        </View>
	      </View>
	    </View>
    );
  }
}

const styles = StyleSheet.create({
	welcome:{
	    fontSize: 30,
	    fontWeight: "bold",
	    color:'#000000'
	  },
});


export default Center;