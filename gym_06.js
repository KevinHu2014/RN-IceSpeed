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
var gym_06 = React.createClass({
  getInitialState(){
    return{
      gymName: '進修部大樓',
      gymLeader: '漢娜',
      schoolIntro: '進修部有兩棟專屬的教學大樓，是學校最好的E化教室大樓，提供全校師生極佳之學習環境及研究場所。Ａ棟為地上八層樓1994年完成，左翼為系辦公室、專任教師研究室及導師辦公室，是學生與老師互動最頻繁的空間。Ｂ棟為地上十層樓1998年完成。二棟大樓均含有地下一層，包括可容納220人的演講廳，及5間研討會分組教室。',
      schoolIntro2: '二棟大樓共有E化通用教室59間（Ａ棟46間，Ｂ棟13間），包括可容納200人的階梯教室7間，130人的教室4間，90人的教室41間，65人的教室7間。其中，為了方便分組討論，使用活動課桌椅的教室有12間，其餘均為舒適固定標準課桌椅。高樓層走廊設有學生之置物櫃。專業教室有最新的媒體製作教室、遠距教室、電腦視聽語言教室各一間，電腦實習教室兩間、書法暨聯誼活動教室一間。提供學生課外活動的會議室、展覽廳、活動教室各一間。提供課間休憩之教授休息室二樓、六樓各一間。',
      gameIntro: '進到背包後點擊精靈怪物可以看到他的能力素質等等資訊，在下方有一個強化的按鈕，當所收集的能量礦石到達一定數量時就可以進行強化，當精靈怪物強化至一定等級後就能進行進化喔！！！進化後的寵物精靈除了能力值會大幅提升之外，外觀有會有明顯的改變呢！一起來體驗培養寵物精靈的樂趣吧~哈哈',

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
                  {'地標道館：'+this.state.gymName+'\n\n哎呀~來了個新人呢！真是太有趣了'+'\n我是'+this.state.gymLeader+'，很高興認識你喔！'}
                </Text>
              </View>
              <View style={styles.bottom_1}> 
                <Image
                  style={styles.avatar}
                  source={{uri: 'https://s19.postimg.org/ylr5otx43/image.png'}} />
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
                  source={{uri: 'https://s19.postimg.org/jfl3xw737/image.jpg'}} />
              </View>
              <View style={styles.middle_2}>
                <Text style={[styles.textContent,{fontSize: 20}]}>
                  {'\b\b'+this.state.schoolIntro}
                </Text> 
              </View>
              <View style={styles.bottom_2}>
                <View style={{flex: 4,}}></View>
                <View style={{flex: 1,}}>
                  <Image
                    style={styles.avatar_small}
                    source={{uri: 'https://s19.postimg.org/ylr5otx43/image.png'}} />
                </View>
              </View>
            </Image>
          </View>
          <View style={[styles.slide,{backgroundColor: '#97CAE5',}]}>
            <Image source={Background_Img} style={{width:width,height:height,resizeMode: 'cover'}}>
              <View style={styles.top_2}>
                <Image
                  style={styles.school}
                  source={{uri: 'https://s19.postimg.org/qk2x6xecj/image.jpg'}} />
              </View>
              <View style={styles.middle_2}>
                <Text style={[styles.textContent,{fontSize: 17}]}>
                  {'\b\b'+this.state.schoolIntro2}
                </Text> 
              </View>
              <View style={styles.bottom_2}>
                <View style={{flex: 4,}}></View>
                <View style={{flex: 1,}}>
                  <Image
                    style={styles.avatar_small}
                    source={{uri: 'https://s19.postimg.org/ylr5otx43/image.png'}} />
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
                    {'強化進化'}
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
                  source={{uri: 'https://s19.postimg.org/kyl3gm31f/exp.png'}} />
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
                    source={{uri: 'https://s19.postimg.org/6zoe45dr7/reverse.png'}} />
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
    width:250,
    height:250,
    resizeMode: 'contain',
  },
})


module.exports = gym_06;