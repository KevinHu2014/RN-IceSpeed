/*

 - - - - - - - - - -
|  Content - 5 - -  |
| |               | |
| |               | |
| |               | |
| |               | |
| |               | |
| |               | |
|  - - - - - - - -  |
|  Cancel - 1 - -   |
| |               | |
| |               | |
|   - - - - - - -   |
 - - - - - - - - - -


*/


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
var Stone_Img = 'https://s10.postimg.org/3nf56l03t/Attributes_Leaf.png';
var BigThree_Img = 'https://s19.postimg.org/jht4w2rc3/waffle.png';
var BigThree = '鬆餅';
var Cancelbar = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1,}}>
          <Text style={{fontSize: 30,fontWeight: 'bold',marginLeft:10}}
            onPress={this.onPress}>
            取消
          </Text>
        </View>
        <View style={{flex: 3,}}></View>
      </View>
      
    );
  },
  
});


var gym_battle = React.createClass({
  getInitialState(){
    return{
      Type:'Fire',
      gymName: '真善美聖十字架',
      gymLeader: '克雷斯',
      gymWelcome: '勇敢的冒險者阿！讓我看看你經過磨練後綻放的光芒吧！',
      schoolIntro: '知道嗎？這是個全輔最重要的精神指標之一喔！因為上面刻畫的四個大字：真、善、美、聖即為輔大的校訓之一真善美聖為人生追求之道，藉著對知識真理的追求，修德行善的用心，欣賞宇宙萬物之美，以體會人生至聖之境。而十字架彎曲的樣貌則象徵著上帝「擁抱世人」的意象。這樣一個特別又富有博愛精神的建築是否讓你有深刻印象呢？',
      gameIntro: '在這世界中的怪物精靈分為水、火、木三種屬性其中，水會克制火、火會克制木、木會克制水這三種屬性產生的影響很單純，強屬性攻擊弱屬性時，可以獲得1.25倍的傷害加乘。相對的，如果是弱屬性攻擊強屬性時攻擊傷害則會變為0.75倍所以選擇好相對應的屬性是非常重要的喔！',

    }
  },
  componentWillMount(){
    switch(this.state.Type){
      case "Wood":
        Stone_Img = 'https://s10.postimg.org/3nf56l03t/Attributes_Leaf.png';
        BigThree_Img = 'https://s19.postimg.org/jht4w2rc3/waffle.png';
        BigThree = '鬆餅';
        break;
      case "Fire":
        Stone_Img = 'https://s10.postimg.org/9v5yvaf7d/Attributes_Fire.png';
        BigThree_Img = 'https://s19.postimg.org/ifo0aneub/icecream.png';
        BigThree = '冰淇淋';
        break;
      case "Water":
        Stone_Img = 'https://s10.postimg.org/i2wsjzisp/Attributes_Water.png';
        BigThree_Img = 'https://s19.postimg.org/8vm7cad43/melonpan.png';
        BigThree = '菠蘿';
        break;

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
          {/* 第一頁 */}
          <View style={[styles.slide,{backgroundColor: '#9DD6EB',}]}>
            <View style={styles.Content}>
              <View style={styles.top_0}>
                  <Image
                    style={styles.Stone}
                    source={{uri: Stone_Img}} />
              </View>
              <View style={styles.bottom_0}>
                <Text style={[styles.textTitle,{fontSize: 40}]}>
                  {this.state.gymName+'\n\n'+'道館'}
                </Text>
              </View>
            </View>
            <View style={styles.Cancel}>              
              <Cancelbar/>
            </View>
          </View>
          {/* 第二頁 */}
          <View style={[styles.slide,{backgroundColor: '#9DD6EB',}]}>
            <View style={styles.Content}>
              <View style={styles.top_1}>
                <Text style={[styles.textTitle,{fontSize: 25}]}>
                  {'道館館主：'+this.state.gymLeader+'\n\n'+this.state.gymWelcome}
                </Text>
              </View>
              <View style={styles.bottom_1}> 
                <Image
                  style={styles.avatar}
                  source={{uri: 'https://s19.postimg.org/hor0bw2jn/avatar2.png'}} />
              </View>
            </View>
            <View style={styles.Cancel}>              
              <Cancelbar/>
            </View>
          </View>
          {/* 第三頁 */}
          <View style={[styles.slide,{backgroundColor: '#97CAE5',justifyContent: 'center',alignItems: 'center',}]}>
            <View style={styles.Content}>
              <View style={styles.top_1}>
                <Text style={[styles.textTitle,{fontSize: 25}]}>
                  {'你所花費的\n'+BigThree+'\b個數\n將會決定此關的難度'}
                </Text>
              </View>
              <View style={styles.bottom_1}> 
                <Image
                  style={styles.avatar}
                  source={{uri: BigThree_Img}} />
              </View>
            </View>
            <View style={styles.Cancel}>              
              <Cancelbar/>
            </View>
            
          </View>
          <View style={[styles.slide,{backgroundColor: '#97CAE5',}]}>
            <View style={styles.top_2}>
              <Image
                style={styles.school}
                source={{uri: 'https://s32.postimg.org/cv1dpcvmd/image4.jpg'}} />
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
                  source={{uri: 'https://s19.postimg.org/hor0bw2jn/avatar2.png'}} />
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
                  {'屬性相剋'}
              </Text> 
            </View>
            <View style={{flex: 4,}}></View>
            
          </View>
          <View style={[styles.slide,{backgroundColor: '#92BBD9',}]}>
            <View style={styles.top_3}>
              <Image
                style={styles.game}
                source={{uri: 'https://s31.postimg.org/lgh6be1wr/arrow.png'}} />
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
                  source={{uri: 'https://s19.postimg.org/hor0bw2jn/avatar2.png'}} />
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
});



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
  Content: {
    flex: 5,
    alignItems: 'center',
  },
  Cancel: {
    flex: 1,
    flexDirection: 'row',
  },
  Stone: {
    width:100,
    height:100,
    margin: 10,
    //resizeMode: 'contain',
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
  top_0: {
    flex: 1,
    justifyContent: 'center',
  },
  bottom_0:{
    flex: 2,
    justifyContent: 'flex-start',
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


module.exports = gym_battle;
