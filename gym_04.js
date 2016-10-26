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

var gym_04 = React.createClass({
  getInitialState(){
    return{
      gymName: '聖言樓',
      gymLeader: '艾芙拉',
      schoolIntro: '仔細看~聖言樓是由林柏年建築師統籌設計，承襲理外學院各建築物既有之石板外牆特色，計樓高將近四十米、九米寬的石板牆；大樓內部分教室、辦公室、會議室掛有由知名公教畫家劉河北設計，育仁啟智中心兒童陶捏而成的首批由國人自行設計及製作的十字架，個個造型殊異，更顯意義不凡呢！1999年3月聖言國際會議展演中心––百鍊聽落成，專供戲劇表演、國際會議和學術研討會使用，是很棒的場地喔！！！',
      gameIntro: '還不太熟悉遊戲環境嗎？沒關係讓我們一起來了解一下吧~初始介面下方五個功能分別是\n地圖：顯示目前所在位置以及地標 \n道具：顯示身上所擁有之道具\n寵物：檢視寵物精靈之狀況\n圖鑑：目前為止所收集的寵物資訊\n設定：螢幕亮度、音效等調節設定\n只要了解這些基本功能就能輕鬆上手喔！開開心心的去冒險吧~有空要回來跟艾芙拉聊天喔！',

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
              <Text style={[styles.textTitle,{fontSize: 25}]}>
                {'地標道館：'+this.state.gymName+'\n\n啦啦啦~'+this.state.gymLeader+'跟小熊貓最喜歡交朋友囉~'+'\n嗨~！一起當好朋友吧~ ^ ^'}
              </Text>
            </View>
            <View style={styles.bottom_1}> 
              <Image
                style={styles.avatar}
                source={{uri: 'https://s19.postimg.org/tzqg2qm77/image.png'}} />
            </View>
          </View>
          <View style={[styles.slide,{backgroundColor: '#97CAE5',justifyContent: 'center',alignItems: 'center',}]}>
            <View style={{flex: 2,}}></View>
            <View style={{flex: 1,}}>
              <Text style={[styles.textTitle,{fontSize:35}]}>
                  {'輔大特色地標'}
              </Text>
              <Text style={styles.textTitle}>
                  {this.state.gymName+'介紹'}
              </Text> 
            </View>
            <View style={{flex: 4,}}></View>
            
          </View>
          <View style={[styles.slide,{backgroundColor: '#97CAE5',}]}>
            <View style={styles.top_2}>
              <Image
                style={styles.school}
                source={{uri: 'https://s19.postimg.org/o413t2w9v/image.jpg'}} />
            </View>
            <View style={styles.middle_2}>
              <Text style={[styles.textContent,{fontSize: 18}]}>
                {'\b\b'+this.state.schoolIntro}
              </Text> 
            </View>
            <View style={styles.bottom_2}>
              <View style={{flex: 4,}}></View>
              <View style={{flex: 1,}}>
                <Image
                  style={styles.avatar_small}
                  source={{uri: 'https://s19.postimg.org/tzqg2qm77/image.png'}} />
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
                  {'介面介紹'}
              </Text> 
            </View>
            <View style={{flex: 4,}}></View>
            
          </View>
          <View style={[styles.slide,{backgroundColor: '#92BBD9',}]}>
            <View style={styles.top_3}>
              <Image
                style={styles.game}
                source={{uri: 'https://s19.postimg.org/egt05mdwj/tabbar.png'}} />
            </View>
            <View style={styles.bottom_3}>
              <Text style={[styles.textContent,{fontSize:20,textAlign:'left'}]}>
                {'\b\b'+this.state.gameIntro}
              </Text> 
            </View>
            <View style={styles.last}>
              <View style={{flex: 1,alignItems: 'flex-start',}}>
                <Image
                  style={styles.avatar_small}
                  source={{uri: 'https://s19.postimg.org/udrs2c6ar/reverse.png'}} />
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
    width:200,
    height:200,
    resizeMode: 'contain',
  },
  top_3: {
    flex: 1,
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
    width:300,
    height:300,
    resizeMode: 'contain',
  },
})


module.exports = gym_04;