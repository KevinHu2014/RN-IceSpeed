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
  TouchableHighlight
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
        {/* 第四頁 */}
          <View style={[styles.slide,{backgroundColor: '#92BBD9',}]}>
            <View style={styles.Content}>
              <TouchableHighlight
                style={styles.touchable}
                onPress={this.onPress_select}>
                  <View style={[styles.button_color,{backgroundColor: '#D1E9EA'}]}>
                      <Text style={styles.button_welcome}>
                        {'初級 \b\b\b\bx 0'}
                      </Text>
                  </View>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.touchable}
                onPress={this.onPress_select}>
                  <View style={[styles.button_color,{backgroundColor:'#415F77'}]}>
                      <Text style={[styles.button_welcome,{color: '#FFFFFF'}]}>
                        {'中級 \b\bx 50'}
                      </Text>
                  </View>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.touchable}
                onPress={this.onPress_select}>
                  <View style={[styles.button_color,{backgroundColor:'#FFD00C'}]}>
                      <Text style={[styles.button_welcome,{color: '#FFFFFF'}]}>
                        {'上級\b\b x 70'}
                      </Text>
                  </View>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.touchable}
                onPress={this.onPress_select}>
                  <View style={[styles.button_color,{backgroundColor:'#FC5050'}]}>
                      <Text style={[styles.button_welcome,{color: '#FFFFFF'}]}>
                        {'究級 x 100'}
                      </Text>
                  </View>
              </TouchableHighlight>
            </View>
            <View style={styles.Cancel}>              
              <Cancelbar/>
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
  touchable:{
    flex:1,
    margin:15,
    borderRadius:2,
    elevation:10
  },
  button_color: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    borderRadius:2,
  },
  button_welcome: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: 'center',
    margin: 10,
    color: '#000000'
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
