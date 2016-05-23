import React, { Component } from 'react';
import {
  Slider,
  Switch,	
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

var Exp = React.createClass({
  getDefaultProps() {
    return {
      value: 0,

    }
  },

  getInitialState() {
    return {
      total: 0,
      value1: this.props.value,
      value2: this.props.value,
      value3: this.props.value,
    };
  },
  onValueChange_F(value1){
    this.setState({value1: value1});
    this.state.total = this.state.value1+this.state.value2+this.state.value3;
  },
  onValueChange_S(value2){
    this.setState({value2: value2});
    this.state.total = this.state.value1+this.state.value2+this.state.value3;
  },
  onValueChange_T(value3){
    this.setState({value3: value3});
    this.state.total = this.state.value1+this.state.value2+this.state.value3;
  },
  render() {
    return (
      <View style={styles.container}> 
        <View style={styles.top}>
          <Text style={styles.text}>
            total : 
            {this.state.total&& +this.state.total.toFixed(1)}
          </Text>
        </View>
        <View style={styles.first}>
          <Text style={styles.text}>
            火屬經驗值 : 
            {this.state.value1 && +this.state.value1.toFixed(1)}
            
          </Text>
          <Slider
            {...this.props}
            step={0.1}
            onValueChange={(value1) => this.onValueChange_F(value1)} />
        </View>
        <View style={styles.second}>
          <Text style={styles.text}>
            水屬經驗值 : 
            {this.state.value2 && +this.state.value2.toFixed(1)}
            
          </Text>
          <Slider
            {...this.props}
            step={0.1}
            onValueChange={(value2) => this.onValueChange_S(value2)} />
        </View>
        <View style={styles.third}>
          <Text style={styles.text}>
             木屬經驗值 : 
            {this.state.value3 && +this.state.value3.toFixed(1)}
            
          </Text>
          <Slider
            {...this.props}
            step={0.1}
            onValueChange={(value3) => this.onValueChange_T(value3)} />
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
  top: {
    flex: 1,
  },
  first: {
    flex: 1,
    backgroundColor: '#FF2D2D',
  },
  second: {
    flex: 1,
    backgroundColor: '#66B3FF',
  },
  third: {
    flex: 1,
    backgroundColor: '#28FF28',
  },
  the_switch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    height: 10,
    margin: 10,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
  button: {
    fontSize: 20,
    backgroundColor: 'silver',
    padding: 5,
  },
 });
module.exports = Exp;
