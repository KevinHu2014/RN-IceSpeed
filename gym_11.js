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

var gym_11 = React.createClass({
  getInitialState(){
    return{
      gymName: '輔園餐廳',
      gymLeader: '艾咪',
      schoolIntro: '輔大三寶：\n1.食品科學系的霜淇淋，綿密香甜的口感讓人心醉神迷，平時有香草、巧克力及綜合三種口味可供選擇，尤其是在校慶期間，會推出特別的限量與限定口味呢！\n2.文園的大波蘿麵包，尤其是剛出爐時，一進文園就可以聞到飄散在空氣中的麵包香，但是現在因為文園改建的關係，大波蘿麵包改到進修部大樓旁的小夜市賣囉~\n3.心園餐廳的巧瑋鬆餅屋了，超佛心的價格加上超多甜鹹口味可供選擇，成為了高CP值得超人氣選擇喔！',
      schoolIntro2: '目前校園內最主要的餐廳有輔園、理園、仁園、文園、心園，另有每一杯咖啡及露天咖啡等。除了這些會依學校的開學與放假時間配合調整外，另外還有餐旅管理學系的實習餐廳─生活家園、生活午茶、宜真學苑的咖啡吧。',
      gameIntro: '在校園中因為與野生精靈怪物戰鬥而受上了嗎？沒關係！只要看到地圖上有回復中心的標記走到標記附近並且點選標記就能輕鬆將所有寵物怪物的體力完全恢復真的是超方便的呢~另外，如果獲得了輔大三寶的道具也可以個別為寵物怪物補充體力喔~來一起品嘗輔大的特色美食吧~啾咪~',

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
                {'地標道館：'+this.state.gymName+'\n\n嗚~~~艾咪最喜歡吃美食了！！！'+'\n你還在這邊幹嘛~快跟'+this.state.gymLeader+'一起發現輔大的校園美食吧！'}
              </Text>
            </View>
            <View style={styles.bottom_1}> 
              <Image
                style={styles.avatar}
                source={{uri: 'https://s19.postimg.org/eyz6ige03/image.png'}} />
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
                source={{uri: 'https://s19.postimg.org/sotpr9143/image.jpg'}} />
            </View>
            <View style={styles.middle_2}>
              <Text style={[styles.textContent,{fontSize: 17}]}>
                {'\b\b'+this.state.schoolIntro}
              </Text> 
            </View>
            <View style={styles.bottom_2}>
              <View style={{flex: 4,}}></View>
              <View style={{flex: 1,}}>
                <Image
                  style={styles.avatar_small}
                  source={{uri: 'https://s19.postimg.org/eyz6ige03/image.png'}} />
              </View>
            </View>
          </View>
          <View style={[styles.slide,{backgroundColor: '#97CAE5',}]}>
            <View style={[styles.top_2,{flex: 2,}]}>
              <Image
                style={styles.school}
                source={{uri: 'https://s19.postimg.org/ke7wjf5k3/image.jpg'}} />
            </View>
            <View style={styles.middle_2}>
              <Text style={[styles.textContent,{fontSize: 20}]}>
                {'\b\b'+this.state.schoolIntro2}
              </Text> 
            </View>
            <View style={styles.bottom_2}>
              <View style={{flex: 4,}}></View>
              <View style={{flex: 1,}}>
                <Image
                  style={styles.avatar_small}
                  source={{uri: 'https://s19.postimg.org/eyz6ige03/image.png'}} />
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
                  {'回血中心+三寶功能介紹'}
              </Text> 
            </View>
            <View style={{flex: 4,}}></View>
            
          </View>
          <View style={[styles.slide,{backgroundColor: '#92BBD9',}]}>
            <View style={styles.top_3}>
              <Image
                style={styles.game}
                source={{uri: 'https://s19.postimg.org/8vm7cad43/melonpan.png'}} />
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
                  source={{uri: 'https://s19.postimg.org/6ur2dprkz/reverse.png'}} />
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
    width:250,
    height:250,
    resizeMode: 'contain',
  },
})


module.exports = gym_11;