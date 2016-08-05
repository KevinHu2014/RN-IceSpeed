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
import Firebase from 'firebase';
import LinearGradient from 'react-native-linear-gradient';

var AllStore = React.createClass({
  getInitialState: function() {
    var FirebaseRef = new Firebase("https://icespeed-f6471.firebaseio.com/");
    var myFirebaseRef = new Firebase("https://icespeed-f6471.firebaseio.com/store/All");
    this.UserRef = FirebaseRef.child('users/314282187/Item');
    this.storeRef = FirebaseRef.child('store/All/Item');
    

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
    //     6:{
    //       quantity: 4,
    //       name: '水之寶石袋',
    //       description: '使用之後獲得500點水之力經驗值。',
    //       Img: "https://s32.postimg.org/qezeok5ed/WATER_bag.png"
    //     },
    //     7:{
    //       quantity: 4,
    //       name: '木之寶石袋',
    //       description: '使用之後獲得500點木之力經驗值。',
    //       Img: "https://s32.postimg.org/sxn5yw951/LEAF_bag.png"
    //     },
    //     8:{
    //       quantity: 4,
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
 _pressButton(){
    const { navigator } = this.props;
            if(navigator) {
                //返回NewMap
                navigator.pop();
            }
 },
  render() {
    return (
    	<View style={styles.container}>
         <View style={{flex:1}}>
            <View style={styles.Top_status}>
              <View style={styles.Top_status_L}>
                <Text style={styles.Top_welcome_L} onPress={this._pressButton}>返回</Text>
              </View>
              <View style={styles.Top_status_R}>
                  <Text style={styles.Top_welcome_R}>超級商城</Text>
              </View>
            </View>
         </View>
         <View style={styles.main}>
            <LinearGradient colors={['#B3B1B1','#7C7A7F']} style={{flex: 1,}}>
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
  
    if(this.state.count == 0){
      this.state.count++;
      Alert.alert(
          '歡迎來到超級商城',
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
  Top_status: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#8E8E8E',
  },
  Top_status_L: {
    flex: 1,
    backgroundColor: '#EA0000',
    borderWidth: 5,
    borderColor: '#FFD306',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderTopRightRadius: 0,

  },
  Top_welcome_L: {
    fontSize: 27,
    color: '#FFFFFF',
  },
  Top_status_R:{
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d0d0d0',
    borderWidth: 10,
    borderColor: '#5B5B5B',
    borderTopColor: '#A0A0A0',
    borderLeftColor: '#8E8E8E',
    borderRightColor: '#858585',
  },
  Top_welcome_R: {
    fontSize: 30,
    color: 'black',
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
module.exports = AllStore;

