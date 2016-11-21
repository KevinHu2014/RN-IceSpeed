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
var Background_Img = require('./Img/background_Null.png');
var gym_08 = React.createClass({
  getInitialState(){
    return{
      gymName: '積健樓',
      gymLeader: '狄倫',
      schoolIntro: '這裡原為學生活動中心，在1973年7月興建，1975年12月8日落成。其命名乃取「積健為雄」之意。內設有現代設備之室內標準游泳池，現為體育系上課大樓。所有新生在入學時也會在此進行體能測試與健康檢查，象徵輔大強身健體的精神。',
      gameIntro: '狩獵怪物精靈需要耐心的追蹤、靜悄悄的等待時機，最後如閃電般強力的出擊！嚇！！！在地圖介面上方有一個藍紫色的探索按鈕，只要點擊這個探索按鈕就能偵查出周圍的精靈怪物，點擊精靈怪物的位置標記就可以進入到戰鬥頁面，只要打贏精靈怪物就有一定的機率能將牠收服為自己的寵物喔！一起成為強大的獵人吧！！！',

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
            <Image source={Background_Img} style={{width:width,height:height,resizeMode: 'cover'}}>
              <View style={styles.top_1}>
                <Text style={[styles.textTitle,{fontSize: 25}]}>
                  {'地標道館：'+this.state.gymName+'\n\n意志力就如肌肉'+'\n持續的鍛鍊是變強的不二法門\n'+'你也喜歡運動嗎？跟我'+this.state.gymLeader+'\n一起變強吧！'}
                </Text>
              </View>
              <View style={styles.bottom_1}> 
                <Image
                  style={styles.avatar}
                  source={{uri: 'https://s19.postimg.org/ygrzswf6r/image.png'}} />
              </View>
            </Image>
          </View>
          <View style={[styles.slide,{backgroundColor: '#97CAE5',justifyContent: 'center',alignItems: 'center',}]}>
            <Image source={Background_Img} style={{width:width,height:height,resizeMode: 'cover'}}>
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
            </Image>
            
          </View>
          <View style={[styles.slide,{backgroundColor: '#97CAE5',}]}>
            <Image source={Background_Img} style={{width:width,height:height,resizeMode: 'cover'}}>
              <View style={styles.top_2}>
                <Image
                  style={styles.school}
                  source={{uri: 'https://s19.postimg.org/lrxp9892b/image.jpg'}} />
              </View>
              <View style={styles.middle_2}>
                <Text style={[styles.textContent,{fontSize: 22}]}>
                  {'\b\b'+this.state.schoolIntro}
                </Text> 
              </View>
              <View style={styles.bottom_2}>
                <View style={{flex: 4,}}></View>
                <View style={{flex: 1,}}>
                  <Image
                    style={styles.avatar_small}
                    source={{uri: 'https://s19.postimg.org/ygrzswf6r/image.png'}} />
                </View>
              </View>
            </Image>
          </View>
          <View style={[styles.slide,{backgroundColor: '#92BBD9',justifyContent: 'center',alignItems: 'center',}]}>
            <Image source={Background_Img} style={{width:width,height:height,resizeMode: 'cover'}}>
              <View style={{flex: 2,}}></View>
              <View style={{flex: 1,}}>
                <Text style={[styles.textTitle,{fontSize:35}]}>
                    {'新手教學'}
                </Text>
                <Text style={styles.textTitle}>
                    {'探索怪物'}
                </Text> 
              </View>
              <View style={{flex: 4,}}></View>
            </Image>
          </View>
          <View style={[styles.slide,{backgroundColor: '#92BBD9',}]}>
            <Image source={Background_Img} style={{width:width,height:height,resizeMode: 'cover'}}>
              <View style={styles.top_3}>
                <Image
                  style={styles.game}
                  source={{uri: 'https://s19.postimg.org/4tyondzoj/search.png'}} />
              </View>
              <View style={styles.bottom_3}>
                <Text style={[styles.textContent,{fontSize:19}]}>
                  {'\b\b'+this.state.gameIntro}
                </Text> 
              </View>
              <View style={styles.last}>
                <View style={{flex: 1,alignItems: 'flex-start',}}>
                  <Image
                    style={styles.avatar_small}
                    source={{uri: 'https://s19.postimg.org/n5pc4j8bn/reverse.png'}} />
                </View>
                <View style={{flex: 2,}}></View>
                <View style={{flex: 1,}}>
                  <Text style={{fontSize: 30,fontWeight: 'bold'}}
                    onPress={this.onPress}>
                    Done
                  </Text>
                </View>
              </View>
            </Image>
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
    textAlign: 'left'
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


module.exports = gym_08;