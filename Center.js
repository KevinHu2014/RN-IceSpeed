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
          	<View style={{ flex: 1,flexDirection: 'column',justifyContent: 'center',backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
	          <View style={{flex: 1,}}></View>
	          <View style={styles.middle}>
	            <View style={{flex: 2,justifyContent: 'center',}}>
	            	<Text style={styles.welcome_1}>{"讓您久等了！！\n您的寵物精靈們都已回復完成囉～"}</Text>
	            </View>
	            <View style={{flex: 1,justifyContent: 'center',}}>
		            <Text style={styles.welcome_2} onPress={() => {
		              this.setModalVisible(!this.state.modalVisible)
		            }}>
		              確定
		            </Text>
	            </View>
	            

	          </View>
	          <View style={{flex: 1,}}></View>
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
	welcome_1:{
	    fontSize: 20,
	    textAlign: 'center',
	    color:'#000000'
	  },
	welcome_2:{
	    fontSize: 25,
	    fontWeight: "bold",
	    color:'#238FF5'
	  },
	middle:{
		flex: 1,
		backgroundColor: '#FFFFFF',
		marginLeft: 20,
		marginRight: 20,
	    borderRadius: 15,
	    justifyContent: 'center',
	    alignItems: 'center',
	}
});


export default Center;