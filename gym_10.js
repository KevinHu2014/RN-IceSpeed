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
var gym_10 = React.createClass({
  getInitialState(){
    return{
      gymName: '于樞機墓園',
      gymLeader: '艾爾文',
      schoolIntro: '\b\b這裡是輔仁大學在台復校第一任校長于斌樞機主教長眠之所。座落於文學院研究大樓與神父宿舍之間，於1978年10月奠基興建，由林柏年建築師負責墓園設計和土木工程。\n\b\b墓園是一座呈尖形小教堂，透明式建築物，外圍是以黑色欄杆、矮綠磚牆圍成。欄杆內有綠皮草地、兩排黃葉榕，呈現一片安詳的景象，中間便是小教堂式墓園紀念亭，茶褐色玻璃，黃綠兩色方磚，背面有由頂端到底端的黃色十字架。',
      schoolIntro2: '亭內大理石裡面，有欄杆和花圈圍繞著，便是于故校長長眠之地。走進墓園，不禁讓人油然生起莊嚴肅穆之感。墓園興建由來：原本于校長生前曾表示，死後要將遺體葬在教堂裡（即淨心堂），但是羅校長考慮到可能會使同學在精神活動中心裡從事活動時有所顧慮或不方便，於是改覓此清靜幽雅安適地點，擴建較具規模的墓園和紀念亭。而墓園建造的意義在於于樞機之道德精神與世長存，與吾校長相左右。心中懷有想要守護的人事物，這就是我強大的理由！',

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
                <Text style={[styles.textTitle,{fontSize: 20}]}>
                  {'地標道館：'+this.state.gymName+'\n\n您好，\n我是守護著這裡的聖白騎士'+this.state.gymLeader+'\n歡迎您來到這個祥和的地方。'}
                </Text>
              </View>
              <View style={styles.bottom_1}> 
                <Image
                  style={styles.avatar}
                  source={{uri: 'https://s19.postimg.org/otqboohyb/image.png'}} />
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
                  source={{uri: 'https://s19.postimg.org/u1ydpuhgj/image.jpg'}} />
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
                    source={{uri: 'https://s19.postimg.org/otqboohyb/image.png'}} />
                </View>
              </View>
            </Image>
          </View>
          
          <View style={[styles.slide,{backgroundColor: '#97CAE5',}]}>
            <Image source={Background_Img} style={{width:width,height:height,resizeMode: 'cover'}}>
              <View style={styles.top_3}></View>
              <View style={styles.bottom_3}>
                <Text style={[styles.textContent,{fontSize:19}]}>
                  {'\b\b'+this.state.schoolIntro2}
                </Text> 
              </View>
              <View style={styles.top_3}></View>
              <View style={styles.last}>
                <View style={{flex: 1,alignItems: 'flex-start',}}>
                  <Image
                    style={styles.avatar_small}
                    source={{uri: 'https://s19.postimg.org/otqboohyb/image.png'}} />
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
    fontSize: 18,
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
    width:150,
    height:150,
    resizeMode: 'contain',
  },
  top_3: {
    flex:  0.5,
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
 
})


module.exports = gym_10;