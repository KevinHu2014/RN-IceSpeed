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
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

var {height, width} = Dimensions.get('window');
import Battle_LandingPage from './Battle_LandingPage';
var Background_Img = require('./Img/background_Water.png');
var gym_battle = React.createClass({
  getInitialState(){
    return{
      Type: null,
      gymName: null,
      gymLeader: null,
      gymAvatar: null,
      gymWelcome: '勇敢的冒險者阿！讓我看看你經過磨練後綻放的光芒吧！',
      Monster_name: '小煤礦',
      Monster_Img: 'https://s19.postimg.org/ok4g3gjxf/010_r.png',
      Monster_id: null,
      Stone_Img : 'https://s10.postimg.org/3nf56l03t/Attributes_Leaf.png',
      BigThree_Img : 'https://s19.postimg.org/jht4w2rc3/waffle.png',
      BigThree : '鬆餅', 
    }
    
  },
  componentDidMount(){
    this.setState({
      gymName : this.props.gymName,
      Type : this.props.gymType
        });

    switch(this.props.gymName){
      case "真善美聖":
        this.setState({
          gymLeader: '克雷斯',
          gymWelcome: '勇敢的冒險者阿！讓我看看你經過磨練後綻放的光芒吧！',
          gymAvatar: 'https://s19.postimg.org/hor0bw2jn/avatar2.png',
          Monster_id: 10,
          Monster_name: '小煤礦',
          Monster_Img: 'https://s19.postimg.org/ok4g3gjxf/010_r.png', 
        });
        break;
      case "耕莘樓":
        this.setState({
          gymLeader: '莉莉亞',
          gymWelcome: '來吧~! 太小看莉莉亞的話可是會吃大虧的哦~ 全力以赴的決鬥吧！',
          gymAvatar: 'https://s19.postimg.org/ryyh88yqr/avatar1.png',
          Monster_id: 12,
          Monster_name: '爆焰精靈',
          Monster_Img: 'https://s19.postimg.org/q1pwf0oo3/012_r.png',  
        });
        break;
      case "淨心堂":
        this.setState({
          gymLeader: '約瑟夫',
          gymWelcome: '呵~呵呵，年輕真好！總是充滿著熱情與想法，但是在這方面老夫也是不會輸給任何人的！',
          gymAvatar: 'https://s19.postimg.org/uvrivxl9f/2.png',
          Monster_id: 9,
          Monster_name: '麻糬長老',
          Monster_Img: 'https://s19.postimg.org/gq3ui2c4j/009_r.png',   
        });
        break;
      case "聖言樓":
        this.setState({
          gymLeader: '艾芙拉',
          gymWelcome: '叮叮噹~小心點！艾芙拉的寵物可是超~~~~級~~~~~強的哦！！！',
          gymAvatar: 'https://s19.postimg.org/tzqg2qm77/艾芙拉.png',
          Monster_id: 11,
          Monster_name: '火焰精靈',
          Monster_Img: 'https://s19.postimg.org/jmqvichyb/011_r.png',   
        });
        break;
      case "濟時樓":
        this.setState({
          gymLeader: '巴澤爾',
          gymWelcome: '知識就是力量，在全知的我面前，你毫無勝算。',
          gymAvatar: 'https://s19.postimg.org/vk5fbzqar/巴澤爾.png',
          Monster_id: 3,
          Monster_name: '肥菇',
          Monster_Img: 'https://s19.postimg.org/5vht2e3mr/003_r.png',   
        });
        break;
      case "進修部大樓":
        this.setState({
          gymLeader: '漢娜',
          gymWelcome: '哎呀呀~來了個可愛的孩子呢~讓姊姊來好好疼愛你吧~！ <3',
          gymAvatar: 'https://s19.postimg.org/ylr5otx43/漢娜.png',
          Monster_id: 2,
          Monster_name: '肥菇',
          Monster_Img: 'https://s19.postimg.org/ww9ufkd0j/002_r.png',   
        });
        break;
      case "進修部大樓":
        this.setState({
          gymLeader: '漢娜',
          gymWelcome: '哎呀呀~來了個可愛的孩子呢~讓姊姊來好好疼愛你吧~！ <3',
          gymAvatar: 'https://s19.postimg.org/ylr5otx43/漢娜.png',
          Monster_id: 7,
          Monster_name: '葉子麻糬',
          Monster_Img: 'https://s19.postimg.org/h06rno1cz/007_r.png',   
        });
        break;
      case "中美堂":
        this.setState({
          gymLeader: '艾力克斯',
          gymWelcome: '貫徹你的信念，你將會獲得無可限量的力量，解放你赤誠的心吧！！！',
          gymAvatar: 'https://s19.postimg.org/6o04zuk83/avatar3.png',
          Monster_id: 6,
          Monster_name: '獨眼怪',
          Monster_Img: 'https://s19.postimg.org/7r4ldjsgz/006_r.png',   
        });
        break;
      case "積健樓":
        this.setState({
          gymLeader: '狄倫',
          gymWelcome: '在這世界中，力量就是一切，弱小的人是無法守護自己最珍視的東西的',
          gymAvatar: 'https://s19.postimg.org/ygrzswf6r/狄倫.png',
          Monster_id: 14,
          Monster_name: '烏賊船長',
          Monster_Img: 'https://s19.postimg.org/xk91nng0z/014_r.png',   
        });
        break;
      case "文華樓":
        this.setState({
          gymLeader: '卡洛琳',
          gymWelcome: '嗨嗨~精靈怪物真的是很神奇的生物呢~想要來比試一下嗎？',
          gymAvatar: 'https://s19.postimg.org/jkcgogp2b/卡洛琳.png',
          Monster_id: 17,
          Monster_name: '胡頭神狼',
          Monster_Img: 'https://s19.postimg.org/qu27p2okj/017_r.png',   
        });
        break;
      case "于樞機墓園":
        this.setState({
          gymLeader: '艾爾文',
          gymWelcome: '靜下心來，你將會感受到自然之力的湧現，追求心境上的平靜之人，願愛與勇氣與你同行',
          gymAvatar: 'https://s19.postimg.org/otqboohyb/艾爾文.png',
          Monster_id: 16,
          Monster_name: '胡頭狼',
          Monster_Img: 'https://s19.postimg.org/jpkeg1hb7/016_r.png',   
        });
        break;
      case "輔園餐廳":
        this.setState({
          gymLeader: '艾咪',
          gymWelcome: '嗚咪~我細心照顧的寵物可是很強的哦！！！看招吧！',
          gymAvatar: 'https://s19.postimg.org/eyz6ige03/艾咪.png',
          Monster_id: 5,
          Monster_name: '小魔眼',
          Monster_Img: 'https://s19.postimg.org/de0yb0uzn/005_r.png',   
        });
        break;
      case "野聲樓和焯炤館":
        this.setState({
          gymLeader: '安琪拉',
          gymWelcome: '看來您已經對遊戲有了基本的認識了呢~那接下來就由在下來做您的對手吧！',
          gymAvatar: 'https://s19.postimg.org/wv6pdoo9v/1.png',
          Monster_id: 15,
          Monster_name: '玉米老大',
          Monster_Img: 'https://s19.postimg.org/3tlx1vv1f/015_r.png',   
        });
        break;

    }


    switch(this.props.gymType){
      case 'Wood':
        this.setState({
          Stone_Img : 'https://s10.postimg.org/3nf56l03t/Attributes_Leaf.png',
          BigThree_Img : 'https://s19.postimg.org/jht4w2rc3/waffle.png',
          BigThree : '鬆餅',
        });
        Background_Img = require('./Img/background_Wood.png');
        break;
      case 'Fire':
        this.setState({
          Stone_Img : 'https://s10.postimg.org/9v5yvaf7d/Attributes_Fire.png',
          BigThree_Img : 'https://s19.postimg.org/ifo0aneub/icecream.png',
          BigThree : '冰淇淋',
        });
        Background_Img = require('./Img/background_Fire.png');
        break;
      case 'Water':
        this.setState({
          Stone_Img : 'https://s10.postimg.org/i2wsjzisp/Attributes_Water.png',
          BigThree_Img : 'https://s19.postimg.org/8vm7cad43/melonpan.png',
          BigThree : '菠蘿',
        });
        Background_Img = require('./Img/background_Water.png');
        break;
    }
    
  },
  onPress_cancel(){
    const { navigator } = this.props;
            if(navigator) {
                //返回MultiMap
                navigator.pop();
            }
  },
  Battle(Lv: number){
    const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Battle_LandingPage',
                component: Battle_LandingPage,
                params: {
                    Monster_Img: this.state.Monster_Img,
                    Monster_name: this.state.Monster_name,
                    Monster_Lv: Lv,
                    Monster_id: this.state.Monster_id,
                    getResult:(result) => {
                        this.setState({result: result})
                    }
                 }   
            })
        }
  },
  onPress_select_1(){
    this.Battle(10);
  },
  onPress_select_2(){
    this.Battle(20);
  },
  onPress_select_3(){
    this.Battle(30);
  },
  onPress_select_4(){
    this.Battle(40);
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Swiper height={height} showsButtons={true}
          loop={false} >
          {/* 第一頁 */}
          <View style={[styles.slide,{backgroundColor: '#9DD6EB',}]}>
            <Image source={Background_Img} style={{width:width,height:height,resizeMode: 'cover'}}>
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
              <View style={{flex: 1,}}>
                <Text style={{fontSize: 30,fontWeight: 'bold',marginLeft:10}}
                  onPress={this.onPress_cancel}>
                  取消
                </Text>
              </View>
              <View style={{flex: 3,}}></View>
            </View>
            </Image>
          </View>
          {/* 第二頁 */}
          <View style={[styles.slide,{backgroundColor: '#9DD6EB',}]}>
            <Image source={Background_Img} style={{width:width,height:height,resizeMode: 'cover'}}>
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
              <View style={{flex: 1,}}>
                <Text style={{fontSize: 30,fontWeight: 'bold',marginLeft:10}}
                  onPress={this.onPress_cancel}>
                  取消
                </Text>
              </View>
              <View style={{flex: 3,}}></View>
            </View>
            </Image>
          </View>
          {/* 第三頁 */}
          <View style={[styles.slide,{backgroundColor: '#97CAE5',justifyContent: 'center',alignItems: 'center',}]}>
          <Image source={Background_Img} style={{width:width,height:height,resizeMode: 'cover'}}>
            <View style={styles.Content}>
              <View style={styles.top_1}>
                <Text style={[styles.textTitle,{fontSize: 25}]}>
                  {'使用越多的'+this.state.BigThree+'道具\n就能挑戰難度越高的關卡\n相對的獎勵也就越豐厚哦！'}
                </Text>
              </View>
              <View style={styles.bottom_1}> 
                <Image
                  style={styles.avatar}
                  source={{uri: this.state.BigThree_Img}} />
              </View>
            </View>
            <View style={styles.Cancel}>              
              <View style={{flex: 1,}}>
                <Text style={{fontSize: 30,fontWeight: 'bold',marginLeft:10}}
                  onPress={this.onPress_cancel}>
                  取消
                </Text>
              </View>
              <View style={{flex: 3,}}></View>
            </View>
            </Image>
          </View>
        {/* 第四頁 */}
          <View style={[styles.slide,{backgroundColor: '#969AA1'}]}>
          <Image source={Background_Img} style={{width:width,height:height,resizeMode: 'cover'}}>
            <View style={styles.Content}>
              <TouchableOpacity
                style={{flex: 1,justifyContent: 'center'}}
                onPress={this.onPress_select_1}>
                  <Image source={require('./Img/level_0.png')} 
                         style={{width:268,height:65,resizeMode: 'contain',}}/>
              </TouchableOpacity>
              <TouchableOpacity
                style={{flex: 1,justifyContent: 'center'}}
                onPress={this.onPress_select_2}>
                  <Image source={require('./Img/level_1.png')} 
                         style={{width:268,height:65,resizeMode: 'contain',}}/>
              </TouchableOpacity>
              <TouchableOpacity
                style={{flex: 1,justifyContent: 'center'}}
                onPress={this.onPress_select_3}>
                  <Image source={require('./Img/level_2.png')} 
                         style={{width:268,height:65,resizeMode: 'contain',}}/>
              </TouchableOpacity>
              <TouchableOpacity
                style={{flex: 1,justifyContent: 'center'}}
                onPress={this.onPress_select_4}>
                  <Image source={require('./Img/level_3.png')} 
                         style={{width:268,height:65,resizeMode: 'contain',}}/>
              </TouchableOpacity>
            
            </View>
            <View style={styles.Cancel}>              
              <View style={{flex: 1,}}>
                <Text style={{fontSize: 30,fontWeight: 'bold',marginLeft:10}}
                  onPress={this.onPress_cancel}>
                  取消
                </Text>
              </View>
              <View style={{flex: 3,}}></View>
            </View>
          </Image>
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
    //margin:15,
    justifyContent: 'center',
    borderRadius:2,
    //elevation:10
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
