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
var gym_12 = React.createClass({
  getInitialState(){
    return{
      gymName: '野聲樓和焯炤館',
      gymLeader: '安琪拉',
      schoolIntro: '首先，位於進校門右側，這棟4層樓高的建築就是野生樓，是學校集合所有行政單位的行政大樓，方便校內外人士洽公。至於野聲樓的命名是經前董事長蔣夫人指示，為紀念本校復校後第一任校長于斌樞機主教，對學校有奠基之功。于樞機字「野聲」，故取名為野聲樓，由羅光校長親筆題字。另外，旁邊的這棟建築物–––焯炤館，是學生活動中心。提供學生社團活動空間，由林柏年建築師設計建築，落成之後取羅光校長號「焯炤」為其命名，並由臺靜農先生親筆題字。學校內各個性質的社團都可以在這裡找的到哦~有服務、學習、舞蹈、運動、音樂、文藝等等，豐富的社團選擇總是讓剛入學的小大一們難以抉擇呢！',
      gameIntro: '在遊戲中的任務會有 1.每日任務 2.成就任務 兩種喔~隨著任務的難度不同，能獲得的獎勵也會越來越豐厚，記得養成每天接取任務的好習慣就能快速累積道具以及金錢喔！',

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
                <Text style={[styles.textTitle,{fontSize:25}]}>
                  {'地標道館：'+this.state.gymName+'\n'+'\n我是館主\b'+this.state.gymLeader+'\n吶吶~知道嗎？安琪拉的名字就是Angela，有天使的意思哦~'}
                </Text>
              </View>
              <View style={styles.bottom_1}> 
                <Image
                  style={styles.avatar}
                  source={{uri: 'https://s19.postimg.org/wv6pdoo9v/image.png'}} />
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
                    {'野聲樓+焯炤館介紹'}
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
                  source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/3/33/FJU_YP02.jpg'}} />
              </View>
              <View style={styles.middle_2}>
                <Text style={[styles.textContent,{fontSize:15}]}>
                  {'\b\b'+this.state.schoolIntro}
                </Text> 
              </View>
              <View style={styles.bottom_2}>
                <View style={{flex: 4,}}></View>
                <View style={{flex: 1,}}>
                  <Image
                    style={styles.avatar_small}
                    source={{uri: 'http://s12.postimg.org/n9te1ebe1/avatar12.png'}} />
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
                    {'任務介紹'}
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
                  source={{uri: 'http://static1.squarespace.com/static/52781efee4b0c3d269fc7f59/t/52c5df35e4b0c9d8b3899f23/1388699446296/Mission.jpg'}} />
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
                    source={{uri: 'http://s12.postimg.org/zcypoymg9/avatar12_reverse.png'}} />
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


module.exports = gym_12;