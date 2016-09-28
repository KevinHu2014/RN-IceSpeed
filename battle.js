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
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress';


import LinearGradient from 'react-native-linear-gradient';
import SwipeableViews from 'react-swipeable-views/lib/index.native.animated';

var battle = React.createClass({
  
  getInitialState: function() {
    return {
      index_value: 0,
      Unclickable: false,
      press_Hit: false,
      press_Mp: false,
      press_skill_1: false,
      press_skill_2: false,
      you: '胡頭犬',
      enemy: '獨眼怪',
      Box: ' ',
      Now: 0,
      skill_1_name: '衝撞',
      skill_2_name: '回復',
      enemy_skill_1_name: '揮擊',
      enemy_skill_2_name: '衝撞',
      mp: '🌑🌑🌑🌑🌑',
      mp_value: 0,
      top_progress: 0.9,
      top_color: '#00DB00',
      bottom_progress: 0.6,
      bottom_color: '#00DB00',
      hit: 0.1,
      skill_1: 0.5,
      skill_2: -0.3,//如果是回復技，則數值是負的
      enemy_skill_1: 0.3,
      enemy_skill_2: 0.1,
      HP: 100,
      Monster_Img: null,
    }
  },
  componentDidMount() {
    //從這裡拿到MapExample膗過來的參數
     this.setState({
            Monster_Img: this.props.Monster_Img,
            enemy: this.props.Monster_name
        });
    let temp = '野生的' + this.state.enemy + '跳了出來！';
    this.setState({
            Box: temp
        });
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
  check_mp(){
    switch (this.state.mp_value){
          case 0:
            this.state.mp = '🌑🌑🌑🌑🌑';
            break;
          case 1:
            this.state.mp = '🌕🌑🌑🌑🌑';
            break;
          case 2:
            this.state.mp = '🌕🌕🌑🌑🌑';
            break;
          case 3:
            this.state.mp = '🌕🌕🌕🌑🌑';
            break;
          case 4:
            this.state.mp = '🌕🌕🌕🌕🌑';
            break;
          case 5:
            this.state.mp = '🌕🌕🌕🌕🌕';
            break;
          default:
            break;
        }
  },
  onPress_Next(){
    let temp1;
    let temp3;
    let temp_now = this.state.Now;
    let temp4 = 3;
    
    switch(this.state.Now){
      case 0:
        temp1 = '就決定是你了！\n' + this.state.you + '！';
        break;
      case 1:
        temp1 = '想要'+this.state.you+'做什麼？';
        break;
      case 2:
        //普攻
        temp1 = '效果一般！';
        this.refs.top.swing(2000);
        temp3 = this.state.top_progress - this.state.hit;
        if (temp3 <= 0.3) {
          this.state.top_color = '#FF0000';
        }
        this.setState({top_progress: temp3});
        if (this.state.top_progress>0) {
          temp4 = 10;//換野怪的回合
        } 
        else {
          temp4 = 11;//野怪死了
        }
        break;
      case 3:
        temp1 = this.state.you+'\n增加一個 mp';
        this.state.mp_value++;
        this.check_mp();
        temp4 = 1;
        break;  
      case 4:
        //技能一
        temp1 = '效果拔群！';
        if(this.state.skill_1 > 0){
          //如果技能一為攻擊技
          temp3 = this.state.top_progress - this.state.skill_1;
          this.refs.top.swing(2000);
          if (temp3 <= 0.3) {
            this.state.top_color = '#FF0000';
          }
          this.setState({top_progress: temp3});
        }
        else {
          //如果技能一為回血技
          temp3 = this.state.bottom_progress - this.state.skill_1;
          if (temp3 > 1){
            temp3 = 1;
          }
          if (temp3 > 0.3) {
            this.state.bottom_color = '#00DB00';
          }
          this.setState({bottom_progress: temp3});
        }
        if (this.state.top_progress>0) {
          temp4 = 10;//換野怪的回合
        } 
        else {
          temp4 = 11;//野怪死了
        }
        
        break;
      case 5:
        //技能二
        temp1 = '效果拔群！';
        if (this.state.skill_2 > 0) {
          //如果技能二為攻擊技
          temp3 = this.state.top_progress - this.state.skill_2;
          this.refs.top.swing(2000);
          if (temp3 <= 0.3) {
            this.state.top_color = '#FF0000';
          }
          this.setState({top_progress: temp3});
        } 
        else {
          //如果技能二為回血技
          temp3 = this.state.bottom_progress - this.state.skill_2;
          if (temp3 > 1){
            temp3 = 1;
          }
          if (temp3 > 0.3) {
            this.state.bottom_color = '#00DB00';
          }
          this.setState({bottom_progress: temp3});
        }
        if (this.state.top_progress>0) {
          temp4 = 10;//換野怪的回合
        } 
        else {
          temp4 = 11;//野怪死了
        }
        break;
      case 6:
        //野怪第一招
        temp1 = '野生的'+this.state.enemy+'使用\n'+this.state.enemy_skill_1_name;
        this.refs.top.wobble(2000);
        temp4 = 7;
        break;
      case 7:
        //野怪第一招
        temp1 = '效果拔群！';
        temp3 = this.state.bottom_progress - this.state.enemy_skill_1;
        this.refs.bottom.swing(2000);
        if (temp3 < 0) {
          temp3 = 0;
        }
        if (temp3 <= 0.3) {
            this.state.bottom_color = '#FF0000';
          }
        this.setState({bottom_progress: temp3});
        if (this.state.bottom_progress<=0) {
          temp4 = 14;//玩家死了
        }
        break;
      case 8:
        //野怪第二招
        temp1 = '野生的'+this.state.enemy+'使用\n'+this.state.enemy_skill_2_name;
        this.refs.top.wobble(2000);
        temp4 = 9;
        break;
      case 9:
        //野怪第二招
        temp1 = '效果拔群！';
        temp3 = this.state.bottom_progress - this.state.enemy_skill_2;
        this.refs.bottom.swing(2000);
        if (temp3 < 0) {
          temp3 = 0;
        }
        if (temp3 <= 0.3) {
            this.state.bottom_color = '#FF0000';
          }
        this.setState({bottom_progress: temp3});
        if (this.state.bottom_progress<=0) {
          temp4 = 14;//玩家死了
        }
        break;
      case 10:
        //野怪的回合
        temp1 = this.state.enemy + '的回合';
        let x = Math.floor(Math.random() * 3 );//0~1
        if (x == 0) {
          temp4 = 6;
        } 
        else {
          temp4 = 8;
        }
        break;
      case 11:
         //野怪死惹
         temp1 = '野生的'+this.state.enemy+'不行了！';
         temp4 = 12;
         break;
      case 12:
        //獲得獎勵
        temp1 = this.state.you+'\n獲得100 經驗值！';
        temp4 = 13;
        break;
      case 13:
        //跳回地圖
        const { navigator } = this.props;
        if(navigator) {
          //返回mapexample
          navigator.pop();
        }
        temp4 = 13;
        break;  
      case 14:
        //玩家死了
        temp1 = this.state.you+'不行了！';
        temp4 = 15;
        break;
      case 15:
        //玩家死了part2
        temp1 = '你已經死了～';
        temp4 = 13;
        break;
      
      default:
        break;  
    }
    this.setState({
      Box: temp1,
      Now: temp4,
      Unclickable: false,
    });
    if (temp_now==1) {this.handleChangeTabs(1);}
  },
  onPress_Run(){
    //玩家逃跑
    let temp5 = this.state.you+'\n逃走成功';
    Alert.alert(
        '警告',
        '你確定要逃走嗎？',
        [
          
          {text: 'OK', onPress: () => {
            console.log('OK Pressed!');
            const { navigator } = this.props;
            if(navigator) {
                //返回NewMap
                navigator.pop();
            }
            this.setState({
              Box: temp5,
              Now: 13,
            });
          }},
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
        ]
        )
       
    
    
  },
  onPress_Hit(){
    let temp2 = this.state.you+'使用\n普通攻擊！';
    this.setState({
      Box: temp2,
      Now: 2,
      Unclickable: true,
    });
    this.refs.bottom.wobble(2000);
    this.handleChangeTabs(0);
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
    this.refs.bottom.wobble(2000);
    this.handleChangeTabs(0);
  },
  onPress_Mp(){
    let temp2 = this.state.you+'使用\n蓄能！';
    this.setState({
      Box: temp2,
      Now: 3,
      Unclickable: true,
    });
    this.handleChangeTabs(0);
  },
  onPress_Skill(){
    this.handleChangeTabs(2);
  },
  onPress_skill_1(){
    let temp2 = this.state.you+'使用\n'+this.state.skill_1_name+'！';
    this.state.mp_value--;
    this.check_mp();
    this.setState({
      Box: temp2,
      Now: 4,
      Unclickable: true,
    });
    if (this.state.skill_1 > 0) {
      this.refs.bottom.wobble(2000);
    } 
    else {
      this.refs.bottom.pulse(2000);
    }
    this.handleChangeTabs(0);
  },
  onPressIn_skill_1(){
    let temp2 = this.state.you+'使用\n'+this.state.skill_1_name+'！';
    this.setState({
      Box: temp2,
      Now: 4,
    });
    this.setState({press_skill_1: true});
  },
  onPressOut_skill_1(){
    this.setState({press_skill_1: false});
    if (this.state.skill_1 > 0) {
      this.refs.bottom.wobble(2000);
    } 
    else {
      this.refs.bottom.pulse(2000);
    }
    this.handleChangeTabs(0);
  },
  onPress_skill_2(){
    let temp2 = this.state.you+'使用\n'+this.state.skill_2_name+'！';
    this.state.mp_value--;
    this.check_mp();
    this.setState({
      Box: temp2,
      Now: 5,
      Unclickable: true,
    });
    if (this.state.skill_2 > 0) {
      this.refs.bottom.wobble(2000);
    } 
    else {
      this.refs.bottom.flash(2000);
    }
    this.handleChangeTabs(0);
  },
  onPressIn_skill_2(){
    let temp2 = this.state.you+'使用\n'+this.state.skill_2_name+'！';
    this.setState({
      Box: temp2,
      Now: 5,
    });
    this.setState({press_skill_2: true});
  },
  onPressOut_skill_2(){
    this.setState({press_skill_2: false});
    if (this.state.skill_2 > 0) {
      this.refs.bottom.wobble(2000);
    } 
    else {
      this.refs.bottom.flash(2000);
    }
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
                <Animatable.Image ref="top" source={{uri: this.state.Monster_Img}}
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
                    <Text style={styles.welcome_4}>{this.state.enemy}</Text>
                    <Text style={styles.welcome_3}>Lv 10</Text>
                  </View>
                  <View style={{flex: 2,flexDirection:'row',alignItems:'center',
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
                  <View style={{flex: 2,flexDirection:'row',alignItems:'center',
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
                        marginRight:10}}>{Math.ceil((this.state.bottom_progress)*(this.state.HP))}/{this.state.HP}</Text>
                  </View>
                  <View style={{flex: 1,flexDirection:'row',alignItems:'center',
                    justifyContent:'center',marginBottom:10}}>
                    <Text style={{color: '#FFFFFF',fontSize:15,fontWeight: "bold",
                        }}>{this.state.mp}</Text>
                  </View>
                </View>
                <View style={{flex: 0.25,}}></View>
              </View>
              <View style={{flex: 1,}}> 
                <Animatable.Image   ref="bottom" source={require('./Img/TEST.png')}
                  style={{marginTop: 30,width:140,height:140 }}>
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
            <View style={{flex: 1,backgroundColor: '#FFFFFF',flexDirection: 'row',
              justifyContent: 'center',}}>
             <View style={{flex: 0.5,}}></View>
             <View style={{flex: 1,}}>
              <TouchableHighlight
                style={styles.touchable}
                onPressIn={this.onPress_Next}>
                  <View style={styles.button_Blue}>
                      <Text style={styles.welcome}>
                        下一步
                      </Text>
                  </View>
              </TouchableHighlight>
             </View> 
             <View style={{flex: 0.5,}}></View>
            </View>
            <View style={styles.skills}>
              <TouchableHighlight
                disabled={this.state.Unclickable}
                style={styles.touchable}
                //onPressIn={this.onPressIn_Hit}
                //onPressOut={this.onPressOut_Hit}
                onPress={this.onPress_Hit}>
                  <View style={styles.button_White}>
                      <Text style={styles.welcome_R}>
                        普攻
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
              <TouchableHighlight
                disabled={this.state.Unclickable}
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
                disabled={this.state.Unclickable}
                style={styles.touchable}
                //onPressIn={this.onPressIn_skill_1 }
                //onPressOut={this.onPressOut_skill_1 }
                onPress={this.onPress_skill_1}>
                  <View style={styles.button_Blue}>
                      <Text style={styles.welcome}>
                        {this.state.skill_1_name}
                      </Text>
                  </View>
              </TouchableHighlight>
              <TouchableHighlight
                disabled={this.state.Unclickable}
                style={styles.touchable}
                //onPressIn={this.onPressIn_skill_2}
                //onPressOut={this.onPressOut_skill_2}
                onPress={this.onPress_skill_2}>
                  <View style={styles.button_Blue}>
                      <Text style={styles.welcome}>
                        {this.state.skill_2_name}
                      </Text>
                  </View>
              </TouchableHighlight>
              <TouchableHighlight
                disabled={this.state.Unclickable}
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
    elevation:10
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
    marginTop:3,
    fontWeight: "bold",
  },
  welcome_5: {
    color: '#000000',
    fontSize:30,
    //fontWeight: "bold",
  },
 });
module.exports = battle;
