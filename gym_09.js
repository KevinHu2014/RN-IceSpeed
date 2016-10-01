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

var gym_09 = React.createClass({
  getInitialState(){
    return{
      gymName: '文華樓',
      gymLeader: '卡洛琳',
      schoolIntro: '這裡是文學院大樓，樓前有一荷花池，附近也有座椅散落在青草地上，讓這附近充滿著滿滿的文青氣息呢，原為三層樓高建築，長達80餘公尺，為復校時最初完成的五棟樓之一。樓前面的牆壁上刻有一幅美麗的圖案，圖案上是一篆文，即「華」字，取於提倡中華文化之意，代表著文學院有發揚中華文化的使命，意義深遠，故該棟樓又稱「文華樓」。是一棟充滿文學意涵又古老的經典建築呢！',
      gameIntro: '這世界分為火、水、木三大陣營，除了屬性彼此之間會有相消相長的關係外，三種屬性分別也對應到寵物的能力值：\n火-–––>攻擊力\n水-–––>速度\n木-–––>血量\n當你拜訪完所有12個道館就要選擇你的陣營囉！好好思考一下吧~！',

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
        <Swiper height={height-49} showsButtons={true}
          loop={false} >
          <View style={[styles.slide,{backgroundColor: '#9DD6EB',}]}>
            <View style={styles.top_1}>
              <Text style={[styles.textTitle,{fontSize: 20}]}>
                {'地標道館：'+this.state.gymName+'\n\nWingardium  Leviosa ！(咒語)\n啊？!抱歉，練習的太專注了沒發現你在這裡！我是'+this.state.gymLeader+'\n歡迎你來到輔大最古老的建築物之一'}
              </Text>
            </View>
            <View style={styles.bottom_1}> 
              <Image
                style={styles.avatar}
                source={{uri: 'https://s19.postimg.org/jkcgogp2b/image.png'}} />
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
                source={{uri: 'https://s19.postimg.org/m9bus8jxf/image.jpg'}} />
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
                  source={{uri: 'https://s19.postimg.org/jkcgogp2b/image.png'}} />
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
                  {'陣營介紹'}
              </Text> 
            </View>
            <View style={{flex: 4,}}></View>
            
          </View>
          <View style={[styles.slide,{backgroundColor: '#92BBD9',}]}>
            <View style={styles.top_3}>
              <Image
                style={styles.game}
                source={{uri: 'https://s19.postimg.org/lfz8zmdwj/wolf.png'}} />
                <Image
                style={styles.game}
                source={{uri: 'https://s19.postimg.org/nltju4hcz/dragon.png'}} />
                <Image
                style={styles.game}
                source={{uri: 'https://s19.postimg.org/93wcm4q1v/phoneix.png'}} />
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
                  source={{uri: 'https://s19.postimg.org/41f0rcgrn/reverse.png'}} />
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
    flexDirection: 'row',
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
    width:100,
    height:100,
    resizeMode: 'contain',
  },
})


module.exports = gym_09;