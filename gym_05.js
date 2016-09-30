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

var gym_05 = React.createClass({
  getInitialState(){
    return{
      gymName: '濟時樓',
      gymLeader: '巴澤爾',
      schoolIntro: '濟時樓圖書總館館舍總面積約3500坪，閱覽席位813席、網路節點600多個、檢索查詢之電腦設備97組、研究小間28間、團體討論室7間。二樓為圖書館入口、借閱櫃台、參考服務區、資訊檢索區、指定參考書區、新書展示區、學習共享空間、寫作中心及閱報區，三樓為現期期刊區、學位論文區及參考書區，四樓為期刊室（含合訂本報紙），五至七樓為中西文書庫，八樓為辦公室。每一層樓皆設有檢索用電腦及複印機。',
      schoolIntro2: '館藏特色以收藏社會科學、應用科學、自然科學及民生相關學科為主的書刊資料，涵蓋宗教、統計、經濟、法律、社會、企管、會計、資訊、物理、化學、生命科學、數學、資訊工程、電子工程、服裝、餐旅管理、兒童與家庭、教育、體育、食品營養等學科，另收錄本校學位論文及民國38年以來之重要報紙資料。採用對比手法，以簡潔、明亮、輕巧並具有現代感之建築表情呈現，南北側採用大面積的玻璃帷幕以收良好之採光與通風，設計簡明的動線系統以及出入口為方便管理與使用。大樓為紀念法管單位創立人，同時也是法管學院第一任院務長費濟時主教，故取名為「濟時樓」。',

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
                {'地標道館：'+this.state.gymName+'\n\n知識是強大的力量，求知若渴將成就不凡\n\n'+'很高興見到你，我是館主'+this.state.gymLeader}
              </Text>
            </View>
            <View style={styles.bottom_1}> 
              <Image
                style={styles.avatar}
                source={{uri: 'https://s19.postimg.org/vk5fbzqar/image.png'}} />
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
                source={{uri: 'https://s19.postimg.org/y41263dur/image.jpg'}} />
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
                  source={{uri: 'https://s19.postimg.org/vk5fbzqar/image.png'}} />
              </View>
            </View>
          </View>
          
          <View style={[styles.slide,{backgroundColor: '#97CAE5',}]}>
            <View style={styles.top_3}></View>
            <View style={styles.bottom_3}>
              <Text style={[styles.textContent,{fontSize:18}]}>
                {'\b\b'+this.state.schoolIntro2}
              </Text> 
            </View>
            <View style={styles.top_3}></View>
            <View style={styles.last}>
              <View style={{flex: 1,alignItems: 'flex-start',}}>
                <Image
                  style={styles.avatar_small}
                  source={{uri: 'https://s19.postimg.org/6feeykqub/reverse.png'}} />
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
    fontSize: 18,
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


module.exports = gym_05;