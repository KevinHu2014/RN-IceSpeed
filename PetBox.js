
import React, { Component } from 'react';
import  {
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Firebase from 'firebase';
import * as Progress from 'react-native-progress';
import LinearGradient from 'react-native-linear-gradient';

import Statusbar from './Statusbar';
import Power from './Power';

var PetBox = React.createClass({

  getInitialState: function() {
    var myFirebaseRef = new Firebase("https://icespeed-f6471.firebaseio.com/users/314282187");
    this.usersRef = myFirebaseRef.child('Pet');
    this.items = [];
    // myFirebaseRef.set({
    //   Name:'冰櫃神速',
    //   Stone: {
    //     fire: 100,
    //     wood: 5,
    //     water: 7
    //   },
    //   Pet: {
    //     1: {
    //       id: 16,
    //       name: '胡頭狼',
    //       Lv: 1,
    //       Type: 'Water',
    //       evolvable: true,
    //       current_HP: 30,
    //       Wood_level: 3,
    //       Fire_level: 1,
    //       Water_level: 1,
    //       Hp: 35,
    //       Atk: 20,
    //       Spd: 25,
    //       Rare: 'A',
    //       Img: "http://s33.postimg.org/puos6zvy7/image.png"
    //     },
    //     2: {
    //       id: 6,
    //       name: '獨眼怪',
    //       Lv: 21,
    //       Type: 'Fire',
    //       evolvable: false,
    //       current_HP: 26,
    //       Wood_level: 1,
    //       Fire_level: 1,
    //       Water_level: 1,
    //       Hp: 26,
    //       Atk: 32,
    //       Spd: 20,
    //       Rare: 'B',
    //       Img: "http://s33.postimg.org/em1erq3cv/image.png",
    //     },
    //     3: {
    //       id: 3,
    //       name:'群聚菇',
    //       Lv: 20,
    //       Type: 'Wood',
    //       evolvable: true,
    //       current_HP: 40,
    //       Wood_level: 1,
    //       Fire_level: 1,
    //       Water_level: 1,
    //       Hp: 50,
    //       Atk: 15,
    //       Spd: 20,
    //       Rare: 'C',
    //       Img: "http://s33.postimg.org/wlhmbzvy7/502.png"
    //     }
    //   },
    //   Item: {
    //     1:{
    //       quantity: 10,
    //       name: '回復藥水',
    //       description: '使用之後可以選擇一隻寵物夥伴回復滿HP',
    //       Img: "https://s31.postimg.org/bzmcux10b/red_potion.png"
    //     },
    //     2:{
    //       quantity: 12,
    //       name: '稀有卷軸',
    //       description: '使用之後1小時內將會遇到比較稀有的怪..!?',
    //       Img: "https://s31.postimg.org/e02slosa3/RARE_SCROLL.png"
    //     },
    //     3:{
    //       quantity: 4,
    //       name: '經驗卷軸',
    //       description: '使用之後1小時內經驗加倍。',
    //       Img: "https://s31.postimg.org/etkhykz0b/EXP_SCROLL.png"
    //     },
    //     4:{
    //       quantity: 1,
    //       name: '掉落卷軸',
    //       description: '使用之後1小時內擊敗的怪物將會比較容易加入你的隊伍。',
    //       Img: "https://s31.postimg.org/81v0ggxsr/DROP_SCROLL.png"
    //     },
    //     5:{
    //       quantity: 4,
    //       name: '普通的錢袋',
    //       description: '使用之後獲得1000G。',
    //       Img: "https://s31.postimg.org/j4ucshjt7/money_bag.png"
    //     },
    //     6:{
    //       quantity: 4,
    //       name: '水之寶石袋',
    //       description: '使用之後獲得500點水之力經驗值。',
    //       Img: "https://s32.postimg.org/qezeok5ed/WATER_bag.png"
    //     },
    //     7:{
    //       quantity: 4,
    //       name: '木之寶石袋',
    //       description: '使用之後獲得500點木之力經驗值。',
    //       Img: "https://s32.postimg.org/sxn5yw951/LEAF_bag.png"
    //     },
    //     8:{
    //       quantity: 4,
    //       name: '火之寶石袋',
    //       description: '使用之後獲得500點火之力經驗值。',
    //       Img: "https://s31.postimg.org/y1im4z2ln/FIRE_bag.png"
    //     }
    //   }
    // });
    
    return {
      key_id: null,
      id: null,
      Lv: null,
      Hp: null,
      Atk: null,
      Spd: null,
      name: null,
      Img: null,
      Type: null,
      evolvable: null,
      current_HP: null,
      Wood_level: null,
      Fire_level: null,
      Water_level: null,
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
    };
  },

  

  componentWillMount: function() {
    this.usersRef.on('child_added', (dataSnapshot) => {
      this.items.push({id: dataSnapshot.key(), text: dataSnapshot.val()});
      //id是指第幾個,text是指文字
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.items)
      });
    });
  },
  
  render: function() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={[  '#353536','#0F0F10']} style={{flex: 1,}}>
          <View style={{flex:1}}>
            <Statusbar></Statusbar>
          </View>
          <View style={{flex: 7,}}>
            <ListView contentContainerStyle={styles.list}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow}
            />
          </View>
        </LinearGradient>
      </View>
    );
  },

  _renderRow: function(rowData: string,rowID:number) {
    return (
      <TouchableHighlight onPress={() => this._pressRow(rowData.id,
        rowData.text.Lv,rowData.text.Hp,rowData.text.Atk,
        rowData.text.Spd,rowData.text.name,rowData.text.id,
        rowData.text.Img,rowData.text.Type,rowData.text.evolvable,
        rowData.text.current_HP,rowData.text.Wood_level,rowData.text.Fire_level,
        rowData.text.Water_level)} underlayColor='rgba(0,0,0,0)'>
        <View>
          <View style={styles.row}>
            <Image style={styles.thumb}  source={{uri:rowData.text.Img}} />
            <View style={styles.row_data}>
              <View style={{flex: 1,}}>
                <Text style={styles.text}>
                  {'Lv '+rowData.text.Lv}
                </Text>
              </View>
              <View style={{flex: 2,justifyContent: 'center',alignItems:'center'}}>
                <Progress.Bar progress={rowData.text.current_HP/rowData.text.Hp} 
                         width={70} height={5}
                         color={'#7EBA19'}
                         style={{marginTop: 8}} 
                         unfilledColor={'#FFFFFF'} borderWidth={2}
                         borderColor={'#7B7B7B'} />
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  },

  _pressRow: function(key_id: number,Lv: number,Hp: number,Atk: number,
    Spd: number,Name: string,id: number,Img: string,
    Type: string,evolvable: bool,current_HP: number,
    Wood_level: number,Fire_level: number,Water_level: number) {
    this.state.key_id = key_id;
    this.state.Lv = Lv;
    this.state.Hp = Hp;
    this.state.Atk = Atk;
    this.state.Spd = Spd;
    this.state.Name = Name;
    this.state.id = id;
    this.state.Img = Img;
    this.state.Type = Type;
    this.state.evolvable = evolvable;
    this.state.current_HP = current_HP;
    this.state.Wood_level = Wood_level;
    this.state.Fire_level = Fire_level;
    this.state.Water_level = Water_level;
    
    const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Power',
                component: Power,
                params: {
                    key_id: this.state.key_id,
                    Lv: this.state.Lv,
                    Hp: this.state.Hp,
                    Atk: this.state.Atk,
                    Spd: this.state.Spd,
                    Name: this.state.Name,
                    id: this.state.id,
                    Img: this.state.Img,
                    Type: this.state.Type,
                    evolvable: this.state.evolvable,
                    current_HP: this.state.current_HP,
                    Wood_level: this.state.Wood_level,
                    Fire_level: this.state.Fire_level,
                    Water_level: this.state.Water_level,
                 }   
            })
        }
  },
});





var styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
  },
  list: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row: {
    
    padding: 10,
    margin: 10,
    width: 140,
    height: 140,
    backgroundColor: '#F6F6F6',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC'
  },
  row_data: {
    flex: 1,
    flexDirection: 'row',
    
  },
  thumb: {
    width: 96,
    height: 96,
  },
  text: {
    flex: 1,
    marginTop: 5,
    fontWeight: 'bold'
  },
  welcome: {
    color: '#FFFFFF'
  },
});

module.exports = PetBox;