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
// var Stone_Img = 'https://s10.postimg.org/3nf56l03t/Attributes_Leaf.png';
// var BigThree_Img = 'https://s19.postimg.org/jht4w2rc3/waffle.png';
// var BigThree = '鬆餅';
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
      gymName: '于斌的墓',
      gymLeader: '克雷斯',
      gymAvatar: 'https://s19.postimg.org/hor0bw2jn/avatar2.png',
      gymWelcome: '勇敢的冒險者阿！讓我看看你經過磨練後綻放的光芒吧！',
      Monster_name: '小煤礦',
      Monster_Img: 'https://s19.postimg.org/ok4g3gjxf/010_r.png',
      Stone_Img : 'https://s10.postimg.org/3nf56l03t/Attributes_Leaf.png',
      BigThree_Img : 'https://s19.postimg.org/jht4w2rc3/waffle.png',
      BigThree : '鬆餅', 
    }
  },
  componentWillMount(){
    


    switch(this.state.gymName){
      case "真善美聖":
        this.setState({
          Type: 'Fire',
          gymLeader: '克雷斯',
          gymWelcome: '勇敢的冒險者阿！讓我看看你經過磨練後綻放的光芒吧！',
          gymAvatar: 'https://s19.postimg.org/hor0bw2jn/avatar2.png',
          Monster_name: '小煤礦',
          Monster_Img: 'https://s19.postimg.org/ok4g3gjxf/010_r.png', 
        });
        break;
      case "耕莘樓":
        this.setState({
          Type: 'Fire',
          gymLeader: '莉莉亞',
          gymWelcome: '來吧~! 太小看莉莉亞的話可是會吃大虧的哦~ 全力以赴的決鬥吧！',
          gymAvatar: 'https://s19.postimg.org/ryyh88yqr/avatar1.png',
          Monster_name: '爆焰精靈',
          Monster_Img: 'https://s19.postimg.org/q1pwf0oo3/012_r.png',  
        });
        break;
      case "淨心堂":
        this.setState({
          Type: 'Fire',
          gymLeader: '約瑟夫',
          gymWelcome: '呵~呵呵，年輕真好！總是充滿著熱情與想法，但是在這方面老夫也是不會輸給任何人的！',
          gymAvatar: 'https://s19.postimg.org/uvrivxl9f/2.png',
          Monster_name: '麻糬長老',
          Monster_Img: 'https://s19.postimg.org/gq3ui2c4j/009_r.png',   
        });
        break;
      case "聖言樓":
        this.setState({
          Type: 'Fire',
          gymLeader: '艾芙拉',
          gymWelcome: '叮叮噹~小心點！艾芙拉的寵物可是超~~~~級~~~~~強的哦！！！',
          gymAvatar: 'https://s19.postimg.org/tzqg2qm77/艾芙拉.png',
          Monster_name: '火焰精靈',
          Monster_Img: 'https://s19.postimg.org/jmqvichyb/011_r.png',   
        });
        break;
      case "濟時樓":
        this.setState({
          Type: 'Wood',
          gymLeader: '巴澤爾',
          gymWelcome: '知識就是力量，在全知的我面前，你毫無勝算。',
          gymAvatar: 'https://s19.postimg.org/vk5fbzqar/巴澤爾.png',
          Monster_name: '肥菇',
          Monster_Img: 'https://s19.postimg.org/5vht2e3mr/003_r.png',   
        });
        break;
      case "進修部大樓":
        this.setState({
          Type: 'Wood',
          gymLeader: '漢娜',
          gymWelcome: '哎呀呀~來了個可愛的孩子呢~讓姊姊來好好疼愛你吧~！ <3',
          gymAvatar: 'https://s19.postimg.org/ylr5otx43/漢娜.png',
          Monster_name: '肥菇',
          Monster_Img: 'https://s19.postimg.org/ww9ufkd0j/002_r.png',   
        });
        break;
      case "進修部大樓":
        this.setState({
          Type: 'Wood',
          gymLeader: '漢娜',
          gymWelcome: '哎呀呀~來了個可愛的孩子呢~讓姊姊來好好疼愛你吧~！ <3',
          gymAvatar: 'https://s19.postimg.org/ylr5otx43/漢娜.png',
          Monster_name: '葉子麻糬',
          Monster_Img: 'https://s19.postimg.org/h06rno1cz/007_r.png',   
        });
        break;
      case "中美堂":
        this.setState({
          Type: 'Wood',
          gymLeader: '艾力克斯',
          gymWelcome: '貫徹你的信念，你將會獲得無可限量的力量，解放你赤誠的心吧！！！',
          gymAvatar: 'https://s19.postimg.org/6o04zuk83/avatar3.png',
          Monster_name: '獨眼怪',
          Monster_Img: 'https://s19.postimg.org/7r4ldjsgz/006_r.png',   
        });
        break;
      case "積健樓":
        this.setState({
          Type: 'Water',
          gymLeader: '狄倫',
          gymWelcome: '在這世界中，力量就是一切，弱小的人是無法守護自己最珍視的東西的',
          gymAvatar: 'https://s19.postimg.org/ygrzswf6r/狄倫.png',
          Monster_name: '烏賊船長',
          Monster_Img: 'https://s19.postimg.org/xk91nng0z/014_r.png',   
        });
        break;
      case "文華":
        this.setState({
          Type: 'Water',
          gymLeader: '卡洛琳',
          gymWelcome: '嗨嗨~精靈怪物真的是很神奇的生物呢~想要來比試一下嗎？',
          gymAvatar: 'https://s19.postimg.org/jkcgogp2b/卡洛琳.png',
          Monster_name: '胡頭神狼',
          Monster_Img: 'https://s19.postimg.org/qu27p2okj/017_r.png',   
        });
        break;
      case "于斌的墓":
        this.setState({
          Type: 'Water',
          gymLeader: '艾爾文',
          gymWelcome: '靜下心來，你將會感受到自然之力的湧現，追求心境上的平靜之人，願愛與勇氣與你同行',
          gymAvatar: 'https://s19.postimg.org/otqboohyb/艾爾文.png',
          Monster_name: '胡頭狼',
          Monster_Img: 'https://s19.postimg.org/jpkeg1hb7/016_r.png',   
        });
        break;
      case "輔園":
        this.setState({
          Type: 'Water',
          gymLeader: '艾咪',
          gymWelcome: '嗚咪~我細心照顧的寵物可是很強的哦！！！看招吧！',
          gymAvatar: 'https://s19.postimg.org/eyz6ige03/艾咪.png',
          Monster_name: '小魔眼',
          Monster_Img: 'https://s19.postimg.org/de0yb0uzn/005_r.png',   
        });
        break;
      case "野生樓+焯炤館":
        this.setState({
          Type: 'Water',
          gymLeader: '安琪拉',
          gymWelcome: '看來您已經對遊戲有了基本的認識了呢~那接下來就由在下來做您的對手吧！',
          gymAvatar: 'https://s19.postimg.org/wv6pdoo9v/1.png',
          Monster_name: '玉米老大',
          Monster_Img: 'https://s19.postimg.org/3tlx1vv1f/015_r.png',   
        });
        break;

    }

    switch(this.state.Type){
      case 'Wood':
        this.setState({
          Stone_Img : 'https://s10.postimg.org/3nf56l03t/Attributes_Leaf.png',
          BigThree_Img : 'https://s19.postimg.org/jht4w2rc3/waffle.png',
          BigThree : '鬆餅', 
        });
        
        break;
      case 'Fire':
        this.setState({
          Stone_Img : 'https://s10.postimg.org/9v5yvaf7d/Attributes_Fire.png',
          BigThree_Img : 'https://s19.postimg.org/ifo0aneub/icecream.png',
          BigThree : '冰淇淋', 
        });
        break;
      case 'Water':
        this.setState({
          Stone_Img : 'https://s10.postimg.org/i2wsjzisp/Attributes_Water.png',
          BigThree_Img : 'https://s19.postimg.org/8vm7cad43/melonpan.png',
          BigThree : '菠蘿', 
        });
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
                    source={{uri: this.state.Stone_Img}} />
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
                  source={{uri: this.state.gymAvatar}} />
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
                  {'你所花費的\n'+this.state.BigThree+'\b個數\n將會決定此關的難度'}
                </Text>
              </View>
              <View style={styles.bottom_1}> 
                <Image
                  style={styles.avatar}
                  source={{uri: this.state.BigThree_Img}} />
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
