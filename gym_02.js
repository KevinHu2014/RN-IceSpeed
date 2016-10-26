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

var gym_02 = React.createClass({
  getInitialState(){
    return{
      gymName: '耕莘樓',
      gymLeader: '莉莉亞',
      schoolIntro: '嘿嘿~這可是理工學院重要的辦公及教學大樓哦！理學院的建築形式是採取中國圖騰設計，從理外民行政大樓、教學大樓、圖書館到女生宿舍(宜真學苑原A棟)是呈現「龍」「鳳」拱珠配對圖案呢！其設計意義主要希望輔仁學子們能成龍成鳳而耕莘樓即為龍首，龍身則是指數學、物理、生物、化學所相連的教學大樓，二者合併稱龍形大樓，其興建完成相繼在民國58年。說的莉莉亞不禁驕傲了起來呢~(｡◕∀◕｡)',
      gameIntro: '遊戲內的道具基本上有分經驗加倍、寵物回血、稀有度加倍、掉落率加倍這幾種類型，另外在所屬陣營的特殊商店還可以買到只屬於你們陣營的特殊道具喔！善用道具的輔助可以讓寵物等級的提升更為迅速喏~這些就當作你好好聽我講話的獎勵吧~要成為優秀的冒險家喔！ *\(^v^)/* bye~ bye~',

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
                {'地標道館：'+this.state.gymName+'\n大家好~'+'\n我是史上最年輕也最可愛的魔導士~\b'+this.state.gymLeader+'\n現在開始要好好聽莉莉亞講話哦~ 啾咪 (^.<)'}
              </Text>
            </View>
            <View style={styles.bottom_1}> 
              <Image
                style={styles.avatar}
                source={{uri: 'https://s19.postimg.org/ryyh88yqr/avatar1.png'}} />
            </View>
          </View>
          <View style={[styles.slide,{backgroundColor: '#97CAE5',justifyContent: 'center',alignItems: 'center',}]}>
            <View style={{flex: 2,}}></View>
            <View style={{flex: 1,}}>
              <Text style={[styles.textTitle,{fontSize:35}]}>
                  {'輔大特色地標'}
              </Text>
              <Text style={styles.textTitle}>
                  {'耕莘樓介紹'}
              </Text> 
            </View>
            <View style={{flex: 4,}}></View>
            
          </View>
          <View style={[styles.slide,{backgroundColor: '#97CAE5',}]}>
            <View style={styles.top_2}>
              <Image
                style={styles.school}
                source={{uri: 'http://www.secretariat.fju.edu.tw/showImg/image/image334.jpg'}} />
            </View>
            <View style={styles.middle_2}>
              <Text style={[styles.textContent,{fontSize: 19}]}>
                {'\b\b'+this.state.schoolIntro}
              </Text> 
            </View>
            <View style={styles.bottom_2}>
              <View style={{flex: 4,}}></View>
              <View style={{flex: 1,}}>
                <Image
                  style={styles.avatar_small}
                  source={{uri: 'http://s14.postimg.org/a5gpi1ah9/avatar02.png'}} />
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
                  {'道具介紹'}
              </Text> 
            </View>
            <View style={{flex: 4,}}></View>
            
          </View>
          <View style={[styles.slide,{backgroundColor: '#92BBD9',}]}>
            <View style={styles.top_3}>
              <Image
                style={styles.game}
                source={{uri: 'https://s31.postimg.org/bzmcux10b/red_potion.png'}} />
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
                  source={{uri: 'http://s14.postimg.org/wiog4ubf1/avatar02_reverse.png'}} />
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


module.exports = gym_02;