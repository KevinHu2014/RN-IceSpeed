'use strict';
var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  TouchableNativeFeedback,
} = React;
var Animatable = require('react-native-animatable');
var Progress = require('react-native-progress');

var battle = React.createClass({
  getInitialState: function() {
    return {
      press_L: false,
      press_M: false,
      press_R: false,
      top_progress: 0.9,
      top_color: '#00DB00',
      bottom_progress: 0.6,
      skill_1: 0.1,
      skill_2: 0.1,

    }
  },
  onPressIn_L: function() {
    this.setState({press_L: true});
    this.state.top_progress = this.state.top_progress - this.state.skill_1;
    if(this.state.top_progress <= 0.3){
      this.state.top_color = '#FF0000';
    }
  },
  onPressOut_L: function() {
    this.setState({press_L: false});
    this.refs.bottom.wobble(1000);
    this.refs.top.swing(1000);
  },
  onPressIn_M: function() {
    this.setState({press_M: true});
    this.state.bottom_progress = this.state.bottom_progress + this.state.skill_2;
  },
  onPressOut_M: function() {
    this.setState({press_M: false});
    this.refs.bottom.jello(1000);
    
  },
  onPressIn_R: function() {
    this.setState({press_R: true});
  },
  onPressOut_R: function() {
    this.setState({press_R: false});
    this.state.top_progress=0.9;
    this.state.bottom_progress=0.6;
    this.state.top_color='#00DB00';
  },
  render() {
    return (
    	<View style={styles.container}>
    		<View style={styles.status}>
          <View style={styles.status_img}>
            <Image source={require('./c.png')} 
              style={{width:50,height:50 }}/>
          </View>
          <Animatable.View animation="pulse" iterationCount="infinite"
            style={styles.status_bar}>
            <Text>HP </Text>
            <Progress.Bar progress={this.state.top_progress} width={200} height={10}
               color={this.state.top_color} borderColor={'#3C3C3C'}/>
          </Animatable.View>
        </View>
        <View style={styles.main}>
          <View style={styles.main_top}>
            <Animatable.Image ref="top" source={require('./c.png')} 
              style={{marginLeft: 10,width:140,height:140 }}/>
          </View>
          <View style={styles.main_bottom}>
            <Animatable.Image   ref="bottom" source={require('./b.png')} 
              style={{marginRight: 10,width:140,height:140 }}
              animated={true}/>
          </View>
        </View>
        <View style={styles.status}>
          <View style={styles.status_img}>
            <Image source={require('./b.png')} 
              style={{width:50,height:50 }}/>
          </View>
          <Animatable.View animation="pulse" iterationCount="infinite"
            style={styles.status_bar}>
            <Text>HP </Text>
            <Progress.Bar progress={this.state.bottom_progress} width={200} height={10}
               color={'#00DB00'} borderColor={'#3C3C3C'} 
               animated={true}/>
          </Animatable.View>
        </View>
        <View style={styles.skills}>
          <TouchableHighlight
            style={{flex:1 }}
            onPressIn={this.onPressIn_L}
            onPressOut={this.onPressOut_L}>
              <View style={styles.button_L}>
                  <Text style={styles.welcome}>
                    {this.state.press_L ? '衝撞' : 'skill 1'}
                  </Text>
              </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={{flex:1 }}
            onPressIn={this.onPressIn_M}
            onPressOut={this.onPressOut_M}>
              <View style={styles.button_M}>
                  <Text style={styles.welcome}>
                    {this.state.press_M ? '回復' : 'skill 2'}
                  </Text>
              </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={{flex:1 }}
            onPressIn={this.onPressIn_R}
            onPressOut={this.onPressOut_R}>
              <View style={styles.button_R}>
                  <Text style={styles.welcome}>
                    {this.state.press_R ? '一' : 'back'}
                  </Text>
              </View>
          </TouchableHighlight>
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
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
  },
  status_img: {
    flex: 1,
    backgroundColor: '#0080FF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  status_bar: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },  
  main: {
    flex: 4,
    flexDirection: 'column',
    borderColor: '#000000',
    borderWidth: 5,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  main_top: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#EAC100',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  main_bottom: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#AE8F00',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  skills: {
    flex: 1,
    backgroundColor: '#A9A9A9',
    borderColor: '#A9A9A9',
    borderWidth: 10,
    flexDirection: 'row',
  },
  button_L: {
    flex: 1,
    backgroundColor: '#4F4F4F',
    borderWidth: 5,
    borderColor: '#FFFFFF',
    justifyContent: 'center'
  },
  button_M: {
    flex: 1,
    backgroundColor: '#4F4F4F',
    borderWidth: 5,
    borderColor: '#FFFFFF',
    justifyContent: 'center'
  },
  button_R: {
    flex: 1,
    backgroundColor: '#4F4F4F',
    borderWidth: 5,
    borderColor: '#FFFFFF',
    justifyContent: 'center'
  },
  welcome: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
 });
module.exports = battle;
