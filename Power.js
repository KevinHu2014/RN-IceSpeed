
import React, { Component } from 'react';
import  {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator,
  ScrollView,
  Image

} from 'react-native';
import * as Progress from 'react-native-progress';
import * as Animatable from 'react-native-animatable'
var Type_Image ;
var Power = React.createClass({
  getInitialState: function() {
    return {
      press_Back: false,
      Img: 'http://s33.postimg.org/ie9umxvun/501.png',
      HP_progress: null,
      id: 2,
      name: '肥菇',
      current_HP: 30,
      HP: 40,
      ATK: 18,
      SPD: 20,
      Type: 'Wood',
      LV: 10,
      evolvable: true,
     
      Wood_level: 1,
      Fire_level: 1,
      Water_level: 1,

      Wood_stone: 5,
      Fire_stone: 7,
      Water_stone: 10,

      Wood_Powerable: true,
      Fire_Powerable: false,
      Water_Powerable: true,
    }
  },
  componentWillMount(){
    //從這裡拿到PetBox傳過來的參數
     this.setState({
            LV: this.props.Lv,
            HP: this.props.Hp,
            ATK: this.props.Atk,
            SPD: this.props.Spd,
            name: this.props.Name,
            id: this.props.id,
            Img: this.props.Img,
            Type: this.props.Type,
            evolvable: this.props.evolvable,
            current_HP: this.props.current_HP,
            Wood_level: this.props.Wood_level,
            Fire_level: this.props.Fire_level,
            Water_level: this.props.Water_level,
        });

    
  },
  componentDidMount(){
    this.Check_Hp();

    switch(this.state.Type){
      case "Wood":
        Type_Image = 'https://s10.postimg.org/3nf56l03t/Attributes_Leaf.png';
        break;
      case "Fire":
        Type_Image = 'https://s10.postimg.org/9v5yvaf7d/Attributes_Fire.png';
        break;
      case "Water":
        Type_Image = 'https://s10.postimg.org/i2wsjzisp/Attributes_Water.png';
        break;

    }
    
    this.Check_Stone();
  },
  Check_Hp(){
    let temp = this.state.current_HP / this.state.HP;
    this.setState({
      HP_progress: temp, 
    });
  },
  Check_Stone(){
    //檢查是否有足夠的石頭可以升級
    if(this.state.Wood_stone >= this.Stone_Calulator(this.state.Wood_level)) {
      this.setState({
        Wood_Powerable: true 
      });
    }
    else{
      this.setState({
        Wood_Powerable: false 
      });
    }

    if(this.state.Fire_stone >= this.Stone_Calulator(this.state.Fire_level)) {
      this.setState({
        Fire_Powerable: true
      });
    }
    else{
      this.setState({
        Fire_Powerable: false
      });
    }

    if (this.state.Water_stone >= this.Stone_Calulator(this.state.Water_level)) {
      this.setState({
        Water_Powerable: true 
      });
    }
    else{
      this.setState({
        Water_Powerable: false 
      });
    }
  },
  Stone_Calulator(stone_level: number){
    //等比級數， 2的倍數成長
    //return Math.pow(2, stone_level);

    //等差成長 a_n = a_1 + (n-1)*d
    //a_1 = 1 , d = 3
    return (1 + (stone_level - 1)*3);
  },
  Level_Up(){
    /*
    每次升級三圍都增加1
    然後依怪物的屬性再加成
    木屬怪HP再加1
    火屬怪ATK再加1
    水屬怪SPD再加1
    */
    this.state.LV++;
    this.state.HP++;
    this.state.ATK++;
    this.state.SPD++;
    switch(this.state.Type){
      case "Wood":
        this.state.HP++;
        break;
      case "Fire":
        this.state.ATK++;
        break;
      case "Water":
        this.state.SPD++;
        break;
    }
    //升級後順便做檢查
    this.Check_Hp();
    this.Check_Stone();
  },
  onPress_Wood(){
    if(this.state.Wood_Powerable){
      Alert.alert(
          '確定要升級嗎',
          ' ',
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () =>  {
              //升級動作
              this.state.Wood_stone = this.state.Wood_stone - this.Stone_Calulator(this.state.Wood_level);
              this.state.Wood_level++;
              this.Level_Up();
              
              //升級成功
              Alert.alert(
                '升級成功',
                ' ',
                [
                  {text: 'OK', onPress: () =>  console.log('OK')},
                ]
              );
            }},
          ]
        );
    }
    else{
      Alert.alert(
          '無法升級',
          '木屬之石不足',
          [
            {text: 'OK', onPress: () =>  console.log('OK')},
          ]
        );
    }
    
  },
  onPress_Fire(){
    if(this.state.Fire_Powerable){
      Alert.alert(
          '確定要升級嗎',
          ' ',
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () =>  {
              //升級動作
              this.state.Fire_stone = this.state.Fire_stone - this.Stone_Calulator(this.state.Fire_level);
              this.state.Fire_level++;
              this.Level_Up();
              //升級成功
              Alert.alert(
                '升級成功',
                ' ',
                [
                  {text: 'OK', onPress: () =>  console.log('OK')},
                ]
              );
            }},
          ]
        );
    }
    else{
      Alert.alert(
          '無法升級',
          '火屬之石不足',
          [
            {text: 'OK', onPress: () =>  console.log('OK')},
          ]
        );
    }
  },
  onPress_Water(){
    if(this.state.Water_Powerable){
      Alert.alert(
          '確定要升級嗎',
          ' ',
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () =>  {
              //升級動作
              this.state.Water_stone = this.state.Water_stone - this.Stone_Calulator(this.state.Water_level);
              this.state.Water_level++;
              this.Level_Up();
              //升級成功
              Alert.alert(
                '升級成功',
                ' ',
                [
                  {text: 'OK', onPress: () =>  console.log('OK')},
                ]
              );
            }},
          ]
        );
    }
    else{
      Alert.alert(
          '無法升級',
          '水屬之石不足',
          [
            {text: 'OK', onPress: () =>  console.log('OK')},
          ]
        );
    }
  },
  onPress_Back(){
    const { navigator } = this.props;
            if(navigator) {
                //返回PetBox
                navigator.pop();
            }
  },
  render(){
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.top}>
            <View style={styles.top_L}>
              <TouchableHighlight
              onPress={this.onPress_Back}
              style={{borderRadius: 100}}>
                <View style={styles.back_button_S}>
                  <Text style={styles.back_welcome_S}>
                    {this.state.press_Back ? '<' : '返'}
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.top_R}>
              <Text style={[styles.welcome,{fontSize:30,fontWeight:'bold'}]}>
                {"No. "+this.state.id+"\b\b"+this.state.name}
              </Text>
            </View>
          </View>
          <View style={styles.avatar}>
            <Animatable.Image 
                animation="pulse" iterationCount="infinite"
                source={{uri: this.state.Img}} 
                style={{width:180,height:180 }}>
            </Animatable.Image>
          </View>
          <View style={[styles.status,{marginTop:20}]}>
            <Image
              style={{width:30,height:30}}
              source={{uri: Type_Image}} />
            
            <Text style={[styles.welcome,{fontWeight: "bold",fontSize:30,textAlign: 'center'}]}>
              {'\b\bLV\b'+this.state.LV} 
            </Text>
          </View>
          
          <View style={styles.status}>
            <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'left'}]}>
              {'HP\b\b'} 
            </Text>
            <Progress.Bar progress={this.state.HP_progress} 
                         width={250} height={10}
                         color={'#51B137'} 
                         unfilledColor={'#FFFFFF'} borderWidth={2}
                         borderColor={'#7B7B7B'} />
          </View>
          <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'center'}]}>
              {"Status\n"}
          </Text>
          <View style={{flex: 3,flexDirection:'row'}}>
            <View style={{flex: 0.7,}}></View>
            <View style={{flex: 1,}}>
              <View style={[styles.status,{justifyContent:'flex-start'}]}>
                <Text style={[styles.welcome,{fontWeight: "bold",}]}>
                  {'HP:\b\b\b\b'} 
                </Text>
                <Text style={[styles.status_welcome,{color:'red'}]}>
                  {this.state.current_HP}
                </Text>
                <Text style={styles.status_welcome}>
                  {"\b/\b"+ this.state.HP}
                </Text>
              </View>
              <View style={[styles.status,{justifyContent:'flex-start'}]}>
                <Text style={[styles.welcome,{fontWeight: "bold",}]}>
                  {'ATK:\b\b\b'} 
                </Text>
                <Text style={styles.status_welcome}>
                  {this.state.ATK}
                </Text>
              </View>
              <View style={[styles.status,{justifyContent:'flex-start'}]}>
                <Text style={[styles.welcome,{fontWeight: "bold",}]}>
                  {'SPD:\b\b\b'} 
                </Text>
                <Text style={styles.status_welcome}>
                  {this.state.SPD}
                </Text>
              </View>
            </View>
            <View style={{flex: 1,}}></View>  
          </View>
          <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'center'}]}>
              {"\nSkill\n\n"}
          </Text>
          <View style={styles.skill}>
            <View style={styles.skill_top}>
              <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'center',fontSize: 40}]}>
              {'👊'+'拳擊'}
            </Text>
            </View>
            <View style={styles.skill_bottom}>
              <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'center',fontSize: 20}]}>
              {'威力：20'+'\b\b\b\b'+'mp：2'}
              </Text>
            </View>
          </View>
          <View style={styles.skill}>
            <View style={styles.skill_top}>
              <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'center',fontSize: 40}]}>
              {'🍃'+'落葉'}
            </Text>
            </View>
            <View style={styles.skill_bottom}>
              <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'center',fontSize: 20}]}>
              {'威力：25'+'\b\b\b\b'+'mp：3'}
              </Text>
            </View>
          </View>
          <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'center'}]}>
              {"\nExp\n\n"}
          </Text>
          <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'center'}]}>
              {'離下一階進化還有'+ 6 +'等'}
          </Text>
          <View style={[styles.status,{flex: 2,}]}>
            <Image
              style={{width:30,height:30}}
              source={{uri: 'https://s10.postimg.org/3nf56l03t/Attributes_Leaf.png'}} />
            <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'left'}]}>
              {'\bLv\b'+this.state.Wood_level+'\b'} 
            </Text>
            <Progress.Bar progress={this.state.Wood_Powerable? 1 : 0} 
                         width={100} height={10}
                         color={'#7EBA19'} 
                         unfilledColor={'#FFFFFF'} borderWidth={2}
                         borderColor={'#7B7B7B'} />
            <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'left'}]}>
              {'\b'+this.Stone_Calulator(this.state.Wood_level)+'/'+
                this.state.Wood_stone+'\b'} 
            </Text>
            <TouchableHighlight
              onPress={this.onPress_Wood}
              style={{borderRadius: 100}}>
                <View style={[styles.back_button_S,{backgroundColor: '#8F8F8F'}]}>
                  <Text style={[styles.back_welcome_S,{color: '#7EBA19',fontSize: 30,}]}>
                    {this.state.Wood_Powerable ? '+' : 'X'}
                  </Text>
                </View>
              </TouchableHighlight>
          </View>
          <View style={[styles.status,{flex: 2,}]}>
            <Image
              style={{width:30,height:30}}
              source={{uri: 'https://s10.postimg.org/9v5yvaf7d/Attributes_Fire.png'}} />
            <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'left'}]}>
              {'\bLv\b'+this.state.Fire_level+'\b'} 
            </Text>
            <Progress.Bar progress={this.state.Fire_Powerable? 1 : 0} 
                         width={100} height={10}
                         color={'#AD3629'} 
                         unfilledColor={'#FFFFFF'} borderWidth={2}
                         borderColor={'#7B7B7B'} />
            <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'left'}]}>
              {'\b'+this.Stone_Calulator(this.state.Fire_level)+'/'+
                this.state.Fire_stone+'\b'} 
            </Text>
            <TouchableHighlight
              onPress={this.onPress_Fire}
              style={{borderRadius: 100}}>
                <View style={[styles.back_button_S,{backgroundColor: '#8F8F8F'}]}>
                  <Text style={[styles.back_welcome_S,{color: '#C62323',fontSize: 30,}]}>
                    {this.state.Fire_Powerable ? '+' : 'X'}
                  </Text>
                </View>
              </TouchableHighlight>
          </View>
          <View style={[styles.status,{flex: 2,}]}>
            <Image
              style={{width:30,height:30}}
              source={{uri: 'https://s10.postimg.org/i2wsjzisp/Attributes_Water.png'}} />
            <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'left'}]}>
              {'\bLv\b'+this.state.Water_level+'\b'} 
            </Text>
            <Progress.Bar progress={this.state.Water_Powerable? 1 : 0} 
                         width={100} height={10}
                         color={'#3376A5'} 
                         unfilledColor={'#FFFFFF'} borderWidth={2}
                         borderColor={'#7B7B7B'} />
            <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'left'}]}>
              {'\b'+this.Stone_Calulator(this.state.Water_level)+'/'+
                this.state.Water_stone+'\b'} 
            </Text>
            <TouchableHighlight
              onPress={this.onPress_Water}
              style={{borderRadius: 100}}>
                <View style={[styles.back_button_S,{backgroundColor: '#8F8F8F'}]}>
                  <Text style={[styles.back_welcome_S,{color: '#132DA5',fontSize: 30,}]}>
                    {this.state.Water_Powerable ? '＋' : 'X'}
                  </Text>
                </View>
              </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    );
  }
});
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer:{

  },
  top:{
    flex: 2,
    flexDirection: 'row',
  },
  top_L:{
    flex: 1,
    alignItems: 'flex-start',
  },
  back_button_S: {
    backgroundColor: '#00DB00',
    borderRadius: 100,
    height: 50,
    width: 50,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    justifyContent: 'center'
  },
  back_welcome_S: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  top_R:{
    flex: 4,
    alignItems: 'flex-start',
    marginTop:10
  },
  avatar:{
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15
  },
  welcome:{
    fontSize: 20,
  },
  status:{
    flex: 1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  status_welcome:{
    fontSize: 30,
  },
  skill:{
    flex: 2,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  },
  skill_top:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  skill_bottom:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  }
 });
module.exports =  Power;