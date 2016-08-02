import Swiper from 'react-native-swiper';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


var swiper = React.createClass({
  getInitialState(){
    return{
      gymName: '真善美聖',
      gymLeader: '手套白',
      schoolIntro1: '本校校訓意涵可從兩方面詮釋：真善美聖或聖美善真。   真善美聖係指人生追求之道：真善美聖為人生追求之道，藉著對知識真理的追求，修德行 善的用心，欣賞宇宙萬物之美，以體會人生至聖之境。',
      schoolIntro2: '聖美善真則是指人生分享之道：一所天主教大學相信世間存有 唯一、至聖、全能的天主，藉其德能的分享，使人在世間能依 其旨意，度一真善美的生活。 此兩者乃彰顯著天人相合之道，人因天主而享有生命及永恆， 天主藉著人而使世界美善可愛。而十字架彎曲的樣貌則象徵著上帝「擁抱世人」的意象。',
      gameIntro: '在這世界中的怪物精靈分為水、火、木三種屬性其中，水剋火、火剋木、木剋水這三種屬性產生的影響很單純，強屬性攻擊弱屬性時，可以獲得1.25倍的傷害加乘。相對的，如果是弱屬性攻擊強屬性時攻擊傷害則會變為0.75倍',

    }
  },
  render: function() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}
        loop={false} >
        <View style={styles.slide1}>
          <View style={styles.top_1}>
            <Text style={styles.textTitle}>
              {'歡迎來到\n'+this.state.gymName+'道館\n我是館主'+this.state.gymLeader}
            </Text>
          </View>
          <View style={styles.bottom_1}> 
            <Image
              style={styles.avatar}
              source={{uri: 'https://s32.postimg.org/evc65gmlx/avatar3.png'}} />
          </View>
        </View>
        <View style={styles.slide2}>
          <View style={styles.top_2}>
            <Image
              style={styles.school}
              source={{uri: 'https://s32.postimg.org/cv1dpcvmd/image4.jpg'}} />
          </View>
          <View style={styles.bottom_2}>
            <Text style={styles.textContent}>
              {'\b\b'+this.state.schoolIntro1+this.state.schoolIntro2}
            </Text> 
          </View>
        </View>
        <View style={styles.slide3}>
          <View style={styles.top_3}>
            <Image
              style={styles.game}
              source={{uri: 'https://s31.postimg.org/lgh6be1wr/arrow.png'}} />
          </View>
          <View style={styles.bottom_3}>
            <Text style={[styles.textContent,{fontSize:25}]}>
              {'\b\b'+this.state.gameIntro}
            </Text> 
          </View>
          <View style={styles.last}>
            <View style={{flex: 3,}}></View>
            <View style={{flex: 1,}}>
              <Text style={{fontSize: 30,fontWeight: 'bold'}}
                >
                Done
              </Text>
            </View>
          </View>
        </View>
      </Swiper>
    )
  }
})

const  styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  textTitle: {
    color: '#fff',
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textContent: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  },
  avatar:{
    width:350,
    height:350,
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom_2:{
    flex: 2,
    justifyContent: 'flex-start',
    marginLeft: 25,
    marginRight: 25,
  },
  school: {
    width:250,
    height:250,
    resizeMode: 'contain',
  },
  top_3: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom_3:{
    flex: 3,
    justifyContent: 'flex-start',
    marginLeft: 25,
    marginRight: 25,
  },
  last:{
    flex: 1,
    flexDirection:'row',
  },
  game: {
    width:250,
    height:250,
    resizeMode: 'contain',
  },
})


module.exports = swiper;