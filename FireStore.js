import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import Statusbar from './Statusbar';
import Firebase from 'firebase';
import LinearGradient from 'react-native-linear-gradient';
import TimerMixin from 'react-timer-mixin';

var FireStore = React.createClass({
   mixins: [TimerMixin],
  getInitialState: function() {
    var FirebaseRef = new Firebase("https://icespeed-f6471.firebaseio.com/");
    //var myFirebaseRef = new Firebase("https://icespeed-f6471.firebaseio.com/store/Fire");
    this.UserRef = FirebaseRef.child('users/314282187/Item');
    this.storeRef = FirebaseRef.child('store/Fire/Item');
    

    //回覆資料庫
    // myFirebaseRef.set({
    //   Item: {
    //     1:{
    //       name: '回復藥水',
    //       description: '使用之後可以選擇一隻寵物夥伴回復滿HP',
    //       Img: "https://s31.postimg.org/bzmcux10b/red_potion.png"
    //     },
    //     2:{
    //       name: '稀有卷軸',
    //       description: '使用之後1小時內將會遇到比較稀有的怪..!?',
    //       Img: "https://s31.postimg.org/e02slosa3/RARE_SCROLL.png"
    //     },
    //     3:{
    //       name: '經驗卷軸',
    //       description: '使用之後1小時內經驗加倍。',
    //       Img: "https://s31.postimg.org/etkhykz0b/EXP_SCROLL.png"
    //     },
    //     4:{
    //       name: '掉落卷軸',
    //       description: '使用之後1小時內擊敗的怪物將會比較容易加入你的隊伍。',
    //       Img: "https://s31.postimg.org/81v0ggxsr/DROP_SCROLL.png"
    //     },
    //     5:{
    //       name: '普通的錢袋',
    //       description: '使用之後獲得1000G。',
    //       Img: "https://s31.postimg.org/j4ucshjt7/money_bag.png"
    //     },
    //     8:{
    //       name: '火之寶石袋',
    //       description: '使用之後獲得500點火之力經驗值。',
    //       Img: "https://s31.postimg.org/y1im4z2ln/FIRE_bag.png"
    //     }
    //   }
    // });
    this.items = [];
    return {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      count: 0,
    };
  },

  

 componentDidMount: function() {
    this.storeRef.on('child_added', (dataSnapshot) => {
      this.items.push({id: dataSnapshot.key(), text: dataSnapshot.val()});
      //id是指314282187下面item的id,text是指文字
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.items)
      });
    });
    
 },

  render() {
    return (
    	<View style={styles.container}>
         <View style={{flex:1}}>
           <Statusbar></Statusbar>
         </View>
         <View style={styles.main}>
            <LinearGradient colors={['#FFB75E','#ED8F03']} style={{flex: 1,}}>
                <ListView contentContainerStyle={styles.list}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                />
            </LinearGradient>
         </View>
    	</View>
    );
  },

  _renderRow(rowData: string, sectionID: number, rowID: number) {
    return (
          <View style={styles.row}>
            <View style={{flex: 1,}}>
              <Image style={styles.thumb} source={{uri: rowData.text.Img}}/>
            </View>
            <View style={{flex: 3,marginLeft:10}}>
              <View style={{flex: 1,}}>
                <Text style={styles.welcome}>
                  {rowData.text.name}
                </Text>
              </View>
              <View style={{flex: 2,justifyContent: 'center',}}>
                <Text style={styles.welcome2}>
                  {rowData.text.description}
                </Text>
              </View>
            </View>
            <View style={{flex: 1,flexDirection:'column',}}>
              <TouchableHighlight onPress={() => this._pressRow(rowData.id,
                rowData.text.name)} style={styles.touchable}>
                <View style={styles.button_Blue}>
                  <Text style={{color: '#FFFFFF',textAlign: 'center'}}>
                    購買
                  </Text>
                </View>
              </TouchableHighlight>
              <View style={{flex: 1,}}></View>
            </View>
            
          </View>
    );
  },
  Buy(id: number,updateQuantity: number){

    this.UserRef.on("child_added", function(snapshot) {
      console.log('id'+snapshot.key()+ ' 數量' + snapshot.val().quantity );
    });
    updateQuantity++;
    this.UserRef.child(id).update({quantity: updateQuantity});
    
  },
  _pressRow(id: number,name: number) {
    var test ;
    
    this.UserRef.on("child_added", function(snapshot) {
      console.log('id'+snapshot.key()+ ' 數量' + snapshot.val().quantity );
      if(snapshot.key()==id){
        test = snapshot.val().quantity;

      }
      
    });
    console.log(this.state.count);
    // this.setTimeout(
    //       () => { console.log('I do not leak!'); },
    //       1500 //延遲時間讓正確的值能夠運算完再傳給下一個alert,1500毫秒為延遲基本值
    //     );
    if(this.state.count == 0){
      this.state.count++;
      Alert.alert(
          '歡迎來到火之商店',
          '很高興為您服務',
          [
            {text: 'OK', onPress: () =>  console.log('OK')},
          ]
        );
    }
    else{
      Alert.alert(
          '確定要購買'+name+' ?',
          '現有數量: '+test,
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () =>  this.Buy(id,test)},
          ]
        );
    }
    
    
  },

});



var styles = StyleSheet.create({
 	container: {
    flex: 1,
  	backgroundColor: '#FFFFFF',
    flexDirection: 'column',
	},
  main:{
    flex: 7,
    flexDirection: 'row',

  },
  list: {
    //flex: 1,
    //justifyContent: 'center',
    flexDirection: 'column',

  },
  outside:{
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flex : 1,
    flexDirection: 'row',
    //alignItems: 'center',
    padding: 10,
    margin: 10,
//    width: 200,
    height: 100,//框的大小
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC'
  },
  thumb: {
    alignSelf: 'center',
    borderWidth: 3,
    //borderColor:'#985813',
    width: 64,
    height: 64,
  },
  welcome: {
    fontSize:20,
    color: '#000000',
    textAlign:'left',
    fontWeight: "bold",
    //fontStyle: 'italic',
  },
  welcome2: {
    fontSize:15,
    textAlign:'left',
    fontWeight: "bold",
    //fontStyle: 'italic',
  },
  button_Blue: {
    flex: 1,
    backgroundColor: '#2881F0',
    justifyContent: 'center',
    borderRadius:2,
  },
  touchable: {
    flex: 1,
    marginLeft:10,
    borderRadius:2,
    elevation:10 
  }
 });
module.exports = FireStore;

