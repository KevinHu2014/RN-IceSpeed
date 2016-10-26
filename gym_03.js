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

var gym_03 = React.createClass({
  getInitialState(){
    return{
      gymName: '淨心堂',
      gymLeader: '約瑟夫',
      schoolIntro: '呵呵~淨心堂是學校的精神活動中心，1977年11月奠基興建，1979年暑假落成。在建築設計上，結合了科學、藝術、宗教、建築之美，具有特殊風格。(1)採鑲嵌細工（Mosaic）形式倣羅馬式三層樓高建築物。(2) 在屋頂正上方有—由希臘文字第一個字母Α（阿法　Alpha，代表開始）和最後一個字母Ω（歐美加Omega，代表終結）以及一尊十字架組成的宗教號誌，其意義表示「人類之初源於天父，最後也歸屬於天父」和耶穌愛世人、犧牲自己的精神，亦即象徵以神為中心發揚福音，弘揚吾校校訓聖美善真的真諦。',
      schoolIntro2: '(3)整體外觀為白色，乃前任羅光校長選定的顏色，代表純潔肅穆莊嚴。(4) 二樓聖堂：a.形狀為扇形狀，象徵著教友從四面八方擁向天主，歸向天主。b.聖堂四周牆壁均有取自聖經故事畫像。在聖堂正中央有幅用馬賽克彩色磁磚拼成的壁畫「聖神降臨圖」。c.所裝置的玻璃為彩色玻璃，上面所繪的圖案亦是採用聖經故事。呵呵~如此一座寧靜祥和，具生命力地方，充分顯示著學校精神生活標誌所在。因本校主保—聖母是無染原罪，心是潔淨的，故取名「淨心」。',
      gameIntro: '在遊戲中只要打贏不同屬性的野生怪物精靈，就能獲得相對屬性的能量礦石，利用能量礦石能提升自身寵物精靈的等級，所以要培養出強大的寵物精靈可一定要好好收集能量礦石啊~大家一起加油吧~呵呵！',

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
                {'地標道館：'+this.state.gymName+'\n\n呵呵~這裡是個能讓人身心平靜的地方呢'+'\n我是淨心堂的館主\b'+this.state.gymLeader}
              </Text>
            </View>
            <View style={styles.bottom_1}> 
              <Image
                style={styles.avatar}
                source={{uri: 'https://s19.postimg.org/uvrivxl9f/image.png'}} />
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
                source={{uri: 'https://s19.postimg.org/7y4r6fr37/image.jpg'}} />
            </View>
            <View style={styles.middle_2}>
              <Text style={[styles.textContent,{fontSize: 16.5}]}>
                {'\b\b'+this.state.schoolIntro}
              </Text> 
            </View>
            <View style={styles.bottom_2}>
              <View style={{flex: 4,}}></View>
              <View style={{flex: 1,}}>
                <Image
                  style={styles.avatar_small}
                  source={{uri: 'https://s19.postimg.org/uvrivxl9f/image.png'}} />
              </View>
            </View>
          </View>
          <View style={[styles.slide,{backgroundColor: '#97CAE5',}]}>
            <View style={styles.top_2}>
              <Image
                style={[styles.school,{width:200,height:200,}]}
                source={{uri: 'https://s19.postimg.org/c8jf20w6b/image.jpg'}} />
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
                  source={{uri: 'https://s19.postimg.org/uvrivxl9f/image.png'}} />
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
                  {'經驗值的取得'}
              </Text> 
            </View>
            <View style={{flex: 4,}}></View>
            
          </View>
          <View style={[styles.slide,{backgroundColor: '#92BBD9',}]}>
            <View style={styles.top_3}>
              <Image
                style={styles.game}
                source={{uri: 'https://s19.postimg.org/t2np4v277/006.png'}} />
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
                  source={{uri: 'https://s19.postimg.org/x1ltqfopv/SF_reverse.png'}} />
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


module.exports = gym_03;