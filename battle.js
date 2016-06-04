import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';
var Animatable = require('react-native-animatable');
var Progress = require('react-native-progress');

import MapExample from './MapExample';
import LinearGradient from 'react-native-linear-gradient';
import TimerMixin from 'react-timer-mixin';
import SwipeableViews from 'react-swipeable-views/lib/index.native.animated';

var battle = React.createClass({
  mixins: [TimerMixin],
  
  getInitialState: function() {
    return {
      index_value: 0,
      press_Hit: false,
      press_Mp: false,
      press_skill_1: false,
      press_skill_2: false,
      you: '胡頭犬',
      text: '就決定是你了！\n',
      Box: ' ',
      Now: 1,
      skill_1_name: '衝撞',
      skill_2_name: '回復',
      top_progress: 0.9,
      top_color: '#00DB00',
      bottom_progress: 0.6,
      bottom_color: '#00DB00',
      skill_1: 0.1,
      skill_2: 0.3,
      enemy_skill: 0.1,
      HP: 100,
      test: null,
    }
  },
  componentDidMount() {
    //從這裡拿到MapExample膗過來的參數
     this.setState({
            test: this.props.test
        });
    let temp = this.state.text + this.state.you + '！';
    this.setState({
            Box: temp
        });
  },
  check_Hp_color: function(){
    if(this.state.top_progress > 0.3){
      this.state.top_color = '#00DB00';
    }
    else{
      this.state.top_color = '#FF0000';
    }
    if(this.state.bottom_progress > 0.3){
      this.state.bottom_color = '#00DB00';
    }
    else{
      this.state.bottom_color = '#FF0000';
    }
  },
  onPressIn_L: function() {
    console.log(this.state.test);
    this.setState({press_L: true});
    this.state.top_progress = this.state.top_progress - this.state.skill_1;
    this.check_Hp_color();
    if(this.state.top_progress <= 0.1){
        Alert.alert(
        '勝利～',
        '獲得經驗值：100\n獲得道具＊1',
        [
          
          {text: 'OK', onPress: () => {
            console.log('OK Pressed!');
            const { navigator } = this.props;
            if(navigator) {
                //返回mapexample
                navigator.pop();
            }
          }},
        ]
        )
    }
  },
  onPressOut_L: function() {
    this.setState({press_L: false});
    this.refs.bottom.wobble(1000);
    this.setTimeout(
      () => {this.refs.top.swing(1000);
        this.setTimeout(
          () => {this.fight_back();},
          500
        );
      },
      1500
    );
    
    
  },
  fight_back: function(){
    //怪物反擊
    /*Alert.alert(
        '測試',
        '測試',
        [
          
          {text: 'OK', onPress: () => console.log('OK Pressed!')},
        ]
        )
    */
    
    this.refs.top.wobble(1000);
    
    this.setTimeout(
      () => {this.refs.bottom.swing(1000);},
      1500
    ); 
    this.state.bottom_progress = this.state.bottom_progress - this.state.enemy_skill;
    this.check_Hp_color();
    if(this.state.bottom_progress <= 0){
        Alert.alert(
        '你已經死了～',
        '靠北阿你玩得一塌糊塗\n跟你做任何事一樣\n...而且沒人愛你',
        [
          
          {text: 'OK', onPress: () => {
            console.log('OK Pressed!');
            const { navigator } = this.props;
            if(this.props.getResult) {
                let result = '成功回傳參數';
                this.props.getResult(result);
            }
            if(navigator) {
                //返回mapexample
                navigator.pop();
            }
          }},
        ]
        )
    }

  },
  onPressIn_M: function() {
    this.setState({press_M: true});
    this.state.bottom_progress = this.state.bottom_progress + this.state.skill_2;
    this.check_Hp_color();
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
    this.check_Hp_color();
    
  },
  handleChangeTabs(value){
    this.setState({
      index_value: value,
    });
  },
  handleChangeIndex(index){
    this.setState({
      index_value: index,
    });
  },
  onPress_Next(){
    let temp1;
    let temp_now = this.state.Now;
    switch(this.state.Now){
      case 1:
        temp1 = '想要'+this.state.you+'做什麼？';
        break;
      case 2:
        temp1 = '效果群拔！';
        break;
      case 3:
        temp1 = this.state.you + '\nmp增加！';
        break;

      default:
        break;  
    }
    this.setState({
      Box: temp1,
      Now: 1,
    });
    if (temp_now==1) {this.handleChangeTabs(1);}
  },
  onPress_Run(){

  },
  onPressIn_Hit(){
    let temp2 = this.state.you+'使用\n普通攻擊！';
    this.setState({
      Box: temp2,
      Now: 2,
    });
    this.setState({press_Hit: true});
  },
  onPressOut_Hit(){
    this.setState({press_Hit: false});
    this.handleChangeTabs(0);
  },
  onPressIn_Mp(){
    let temp2 = this.state.you+'使用\n蓄能！';
    this.setState({
      Box: temp2,
      Now: 3,
    });
    this.setState({press_Mp: true});
  },
  onPressOut_Mp(){
    this.setState({press_Mp: false});
    this.handleChangeTabs(0);
  },
  onPress_Skill(){
    this.handleChangeTabs(2);
  },
  onPressIn_skill_1(){
    let temp2 = this.state.you+'使用\n'+this.state.skill_1_name+'！';
    this.setState({
      Box: temp2,
      Now: 2,
    });
    this.setState({press_skill_1: true});
  },
  onPressOut_skill_1(){
    this.setState({press_skill_1: false});
    this.handleChangeTabs(0);
  },
  onPressIn_skill_2(){
    let temp2 = this.state.you+'使用\n'+this.state.skill_2_name+'！';
    this.setState({
      Box: temp2,
      Now: 2,
    });
    this.setState({press_skill_2: true});
  },
  onPressOut_skill_2(){
    this.setState({press_skill_2: false});
    this.handleChangeTabs(0);
  },
  onPress_Back(){
    this.handleChangeTabs(1);
  },
  render() {
    return (
    	<View style={styles.container}>
        <View style={styles.main}>
          <LinearGradient colors={[  '#84C1FF','#C4E1FF','#ECF5FF','#FFFF6F','#93FF93','#79FF79','#02C874','#02C874','#02C874']} style={{flex: 1,}}>

            <View style={styles.main_top}>
              <View style={{flex: 1,}}>
                <Animatable.Image ref="top" source={require('./Img/f.png')}
                  style={{marginTop:50,width:140,height:140 }}>
                  <Text style={styles.welcome_2}>
                        {this.state.press_L ? '👊' : ''}
                  </Text>
                </Animatable.Image>
              </View>
              <View style={{flexDirection:'column',flex: 1.5,justifyContent: 'flex-start'}}>
                <View style={{flex: 2,backgroundColor:'#9D9FAB',marginTop:10,
                    borderTopLeftRadius: 10,borderBottomLeftRadius: 10,}}>
                  <View style={{flex: 2,flexDirection: 'row',alignItems:'center',
                    justifyContent:'space-around'}}>
                    <Text style={styles.welcome_4}>獨眼獸</Text>
                    <Text style={styles.welcome_3}>Lv 10</Text>
                  </View>
                  <View style={{flex: 1,flexDirection:'row',alignItems:'center',
                    justifyContent:'center',marginBottom:10,marginTop:10,}}>
                    <Text style={styles.welcome_3}>HP </Text>
                    <Progress.Bar progress={this.state.top_progress} 
                       width={150} height={10}
                       color={this.state.top_color} 
                       unfilledColor={'#FFFFFF'} borderWidth={5}
                       borderColor={'#7B7B7B'} />
                  </View>
                  
                </View>
                <View style={{flex: 3,}}></View>
              </View>
            </View>
            <View style={{flex: 0.75,}}></View>
            <View style={styles.main_bottom}>
              <View style={{flexDirection:'column',flex: 1.5,justifyContent: 'flex-start'}}>
                <View style={{flex: 0.75,}}></View>
                <View style={{flex: 2,backgroundColor:'#9D9FAB',marginTop:10,
                    borderTopRightRadius: 10,borderBottomRightRadius: 10,}}>
                  <View style={{flex: 2,flexDirection: 'row',alignItems:'center',
                    justifyContent:'space-around'}}>
                    <Text style={styles.welcome_4}>{this.state.you}</Text>
                    <Text style={styles.welcome_3}>Lv 10</Text>
                  </View>
                  <View style={{flex: 1,flexDirection:'row',alignItems:'center',
                    justifyContent:'center',marginTop:10,}}>
                    <Text style={styles.welcome_3}>HP </Text>
                    <Progress.Bar progress={this.state.bottom_progress} 
                       width={150} height={10}
                       color={this.state.bottom_color} 
                       unfilledColor={'#FFFFFF'} borderWidth={5}
                       borderColor={'#7B7B7B'} />
                  </View>
                  <View style={{flex: 1,flexDirection:'row',alignItems:'center',
                    justifyContent:'flex-end'}}>
                    <Text style={{color: '#FFFFFF',fontSize:15,fontWeight: "bold",
                        marginRight:10}}>{Math.floor((this.state.bottom_progress)*(this.state.HP))}/{this.state.HP}</Text>
                  </View>
                  <View style={{flex: 1,flexDirection:'row',alignItems:'center',
                    justifyContent:'center',marginBottom:10}}>
                    <Text style={{color: '#FFFFFF',fontSize:15,fontWeight: "bold",
                        }}>🌕🌕🌕🌑🌑</Text>
                  </View>
                </View>
                <View style={{flex: 0.25,}}></View>
              </View>
              <View style={{flex: 1,}}> 
                <Animatable.Image   ref="bottom" source={require('./Img/h.png')}
                  style={{marginBottom: 10,width:140,height:140 }}>
                  <Text style={styles.welcome_2}>
                        {this.state.press_M ? '✨' : ''}
                  </Text>
                 </Animatable.Image>
               </View>
               
            </View>

          </LinearGradient>
        </View>
        <View style={{flex: 1,borderWidth:5,borderColor:'#000000'}}>
          <Text style={styles.welcome_5}>{this.state.Box}</Text>
        </View>
        <View style={{flex: 1,}}>
          <SwipeableViews index={this.state.index_value} 
            onChangeIndex={this.handleChangeIndex}
            disabled={true}>
            <View style={styles.skills}>
              <TouchableHighlight
                style={styles.touchable}
                onPress={this.onPress_Next}>
                  <View style={styles.button_Blue}>
                      <Text style={styles.welcome}>
                        下一步
                      </Text>
                  </View>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.touchable}
                onPress={this.onPress_Run}>
                  <View style={styles.button_White}>
                      <Text style={styles.welcome_R}>
                        逃走
                      </Text>
                  </View>
              </TouchableHighlight>
            </View>
            <View style={styles.skills}>
              <TouchableHighlight
                style={styles.touchable}
                onPressIn={this.onPressIn_Hit}
                onPressOut={this.onPressOut_Hit}>
                  <View style={styles.button_White}>
                      <Text style={styles.welcome_R}>
                        {this.state.press_Hit ? '發動' : '普攻'}
                      </Text>
                  </View>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.touchable}
                onPressIn={this.onPressIn_Mp}
                onPressOut={this.onPressOut_Mp}>
                  <View style={styles.button_White}>
                      <Text style={styles.welcome_R}>
                        {this.state.press_Mp ? '發動' : '蓄能'}
                      </Text>
                  </View>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.touchable}
                onPress={this.onPress_Skill}>
                  <View style={styles.button_Blue}>
                      <Text style={styles.welcome} >
                        技能
                      </Text>
                  </View>
              </TouchableHighlight>
            </View>
            <View style={styles.skills}>
              <TouchableHighlight
                style={styles.touchable}
                onPressIn={this.onPressIn_skill_1 }
                onPressOut={this.onPressOut_skill_1 }>
                  <View style={styles.button_Blue}>
                      <Text style={styles.welcome}>
                        {this.state.press_skill_1 ? '發動' : this.state.skill_1_name}
                      </Text>
                  </View>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.touchable}
                onPressIn={this.onPressIn_skill_2}
                onPressOut={this.onPressOut_skill_2}>
                  <View style={styles.button_Blue}>
                      <Text style={styles.welcome}>
                        {this.state.press_skill_2 ? '發動' : this.state.skill_2_name}
                      </Text>
                  </View>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.touchable}
                onPress={this.onPress_Back}>
                  <View style={styles.button_White}>
                      <Text style={styles.welcome_R}>
                        back
                      </Text>
                  </View>
              </TouchableHighlight>
            </View>
          </SwipeableViews>
          
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
  status_img_Top: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FFDC35',
    borderRadius: 15,
    borderWidth: 10,
  },
  status_img_Bottom: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FFDC35',
    borderRadius: 15,
    borderWidth: 10,
  },
  status_bar: {
    flex: 4.5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  main: {
    flex: 4,
    flexDirection: 'column',
    //borderColor: '#000000',
    //borderWidth: 5,
    //borderLeftWidth: 0,
    //borderRightWidth: 0,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  main_top: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: '#d0d0d0',
    justifyContent: 'flex-start',
  },
  main_bottom: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: '#8E8E8E',
    justifyContent: 'flex-end',
  },
  skills: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
  },
  touchable:{
    flex:1,
    margin:15,
    borderRadius:2,
    elevation:20 
  },
  button_White: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    borderRadius:2,
  },
  button_Blue: {
    flex: 1,
    backgroundColor: '#2881F0',
    justifyContent: 'center',
    borderRadius:2,
  },
  welcome: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: 'center',
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
    color: '#FFFFFF'
  },
  welcome_R: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: 'center',
    margin: 10,
    color: '#000000'
  },
  welcome_2: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 40,
    color: '#343434',
  },
  welcome_3: {
    color: '#FFFFFF',
    fontSize:15,
    fontWeight: "bold",
  },
  welcome_4: {
    color: '#FFFFFF',
    fontSize:30,
    fontWeight: "bold",
  },
  welcome_5: {
    color: '#000000',
    fontSize:30,
    fontWeight: "bold",
  },
 });
module.exports = battle;
