import Swiper from 'react-native-swiper';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';

import NewMap from './NewMap';
var {height, width} = Dimensions.get('window');

var gym_07 = React.createClass({
  getInitialState(){
    return{
      gymName: '中美堂',
      gymLeader: '艾力克斯',
      schoolIntro: '這裡是學校的體育館。承襲古羅馬城形式之建築物。據說是依據一位義大利神父依羅馬城的軌跡設計出圓形的建築藍圖而建築，象徵著古羅馬競技精神。另外，中美堂共有七十枝弧形樑柱支撐著，每枝樑柱重約四噸，樑上再加瓦片，整個中美堂上覆蓋約四百噸重的重量平均分散到圓形建築各處，為當時世界上僅有之第三、第四座無直樑支撐的建築物，造價昂貴。',
      gameIntro: '在遊戲中若要強化自身的寵物怪物便要想辦法獲得能量礦石，透過礦石內的神祕力量加以強化！那麼！要在哪裡才能取的這些能提升寵物等級的能量礦石呢？玩家可以透過 1.打敗道館館主 2.擊敗野生怪物 3.特殊的商店購買 三種方式來取得強化寵物怪物的經驗值礦石 加油！努力地去收集礦石吧！！！',

    }
  },
  onPress(){
    const { navigator } = this.props;
            if(navigator) {
                //返回NewMap
                navigator.pop();
            }
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Swiper height={height} showsButtons={true}
          loop={false} >
          <View style={[styles.slide,{backgroundColor: '#9DD6EB',}]}>
            <View style={styles.top_1}>
              <Text style={[styles.textTitle,{fontSize: 20}]}>
                {'地標道館：'+this.state.gymName+'\n\n「君子以文會友，以友輔仁」\n唯有堅毅的靈魂才能駕馭強大的力量\n因此我們不斷的鍛鍊自己.......'+'\n\n我是館主\b'+this.state.gymLeader}
              </Text>
            </View>
            <View style={styles.bottom_1}> 
              <Image
                style={styles.avatar}
                source={{uri: 'https://s32.postimg.org/evc65gmlx/avatar3.png'}} />
            </View>
          </View>
          <View style={[styles.slide,{backgroundColor: '#97CAE5',justifyContent: 'center',alignItems: 'center',}]}>
            <View style={{flex: 2,}}></View>
            <View style={{flex: 1,}}>
              <Text style={[styles.textTitle,{fontSize:35}]}>
                  {'輔大特色地標'}
              </Text>
              <Text style={styles.textTitle}>
                  {'中美堂介紹'}
              </Text> 
            </View>
            <View style={{flex: 4,}}></View>
            
          </View>
          <View style={[styles.slide,{backgroundColor: '#97CAE5',}]}>
            <View style={styles.top_2}>
              <Image
                style={styles.school}
                source={{uri: 'http://farm8.staticflickr.com/7157/6645835887_3eeea317a0_b.jpg'}} />
            </View>
            <View style={styles.middle_2}>
              <Text style={styles.textContent}>
                {'\b\b'+this.state.schoolIntro}
              </Text> 
            </View>
            <View style={styles.bottom_2}>
              <View style={{flex: 4,}}></View>
              <View style={{flex: 1,}}>
                <Image
                  style={styles.avatar_small}
                  source={{uri: 'http://s12.postimg.org/jaw6ikmqx/avatar07.png'}} />
              </View>
            </View>
          </View>
          <View style={[styles.slide,{backgroundColor: '#92BBD9',justifyContent: 'center',alignItems: 'center',}]}>
            <View style={{flex: 2,}}></View>
            <View style={{flex: 1,}}>
              <Text style={[styles.textTitle,{fontSize:35}]}>
                  {'新手教學'}
              </Text>
              <Text style={styles.textTitle}>
                  {'經驗值的取得'}
              </Text> 
            </View>
            <View style={{flex: 4,}}></View>
            
          </View>
          <View style={[styles.slide,{backgroundColor: '#92BBD9',}]}>
            <View style={styles.top_3}>
              <Image
                style={styles.game}
                source={{uri: 'https://s31.postimg.org/etkhykz0b/EXP_SCROLL.png'}} />
            </View>
            <View style={styles.bottom_3}>
              <Text style={[styles.textContent,{fontSize:20}]}>
                {'\b\b'+this.state.gameIntro}
              </Text> 
            </View>
            <View style={styles.last}>
              <View style={{flex: 1,alignItems: 'flex-start',}}>
                <Image
                  style={styles.avatar_small}
                  source={{uri: 'http://s12.postimg.org/ve1i64xt5/avatar07_reverse.png'}} />
              </View>
              <View style={{flex: 2,}}></View>
              <View style={{flex: 1,}}>
                <Text style={{fontSize: 30,fontWeight: 'bold'}}
                  onPress={this.onPress}>
                  Done
                </Text>
              </View>
            </View>
          </View>
        </Swiper>
        
      </View>
      
    )
  }
})

const  styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blank:{
    flex: 1,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  textTitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textContent: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  },
  avatar:{
    width:300,
    height:300,
    resizeMode: 'contain',

  },
  avatar_small:{
    width:80,
    height:80,
    resizeMode: 'contain',

  },
  top_1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom_1:{
    flex: 2,
    justifyContent: 'flex-start',
  },
  top_2: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle_2:{
    flex: 2,
    justifyContent: 'flex-start',
    marginLeft: 25,
    marginRight: 25,
    //backgroundColor: '#000000'
  },
  bottom_2:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  school: {
    width:250,
    height:250,
    resizeMode: 'contain',
  },
  top_3: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom_3:{
    flex: 2,
    justifyContent: 'flex-start',
    marginLeft: 25,
    marginRight: 25,
    //backgroundColor: '#000000'
  },
  last:{
    flex: 1,
    flexDirection:'row',
  },
  game: {
    width:180,
    height:180,
    resizeMode: 'contain',
  },
})


module.exports = gym_07;