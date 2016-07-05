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

var object = React.createClass({
  getInitialState: function() {
    var myFirebaseRef = new Firebase("https://project-5810968585068392276.firebaseio.com/users/314282187");
    this.usersRef = myFirebaseRef.child('Item');
    //myFirebaseRef.child('Item/1/quantity').set(5);//用set比較不好
    //myFirebaseRef.child('Item/1').update({quantity: 1});//用update比較好
    myFirebaseRef.set({
      Name:'冰櫃神速',
      Pet: {
        1: {
          id: 7,
          name: '胡頭犬',
          Lv: 10,
          Hp: 100,
          Atk: 15,
          Def: 5,
          Spd: 20,
          Img: "http://s33.postimg.org/puos6zvy7/image.png"
        },
        2: {
          id: 6,
          name: '大眼怪',
          Lv: 13,
          Hp: 60,
          Atk: 10,
          Def: 3,
          Spd: 5,
          Img: "http://s33.postimg.org/em1erq3cv/image.png",
        },
        3: {
          id: 5,
          name:'綜合菇',
          Lv: 12,
          Hp:70,
          Atk: 12,
          Def: 5,
          Spd: 10,
          Img: "http://s33.postimg.org/wlhmbzvy7/502.png"
        }
      },
      Item: {
        1:{
          quantity: 10,
          name: '紅藥水(小)',
          description: '使用後會使HP一次恢復60的特殊藥水。',
          Img: "http://game.yam.com/koongya/main_products/mall/mall_pic/m-liquid/image003.jpg"
        },
        2:{
          quantity: 12,
          name: '紅藥水(大)',
          description: '使用後會使HP一次恢復120的特殊藥水。',
          Img: "http://game.yam.com/koongya/main_products/mall/mall_pic/m-liquid/image005.jpg"
        },
        3:{
          quantity: 4,
          name: '藍藥水(小)',
          description: '使用後會使MP一次恢復60的特殊藥水。',
          Img: "http://game.yam.com/koongya/main_products/mall/mall_pic/m-liquid/image008.jpg"
        },
        4:{
          quantity: 1,
          name: '藍藥水(大)',
          description: '使用後會使MP一次恢復120的特殊藥水。',
          Img: "http://game.yam.com/koongya/main_products/mall/mall_pic/m-liquid/image011.jpg"
        },
        5:{
          quantity: 4,
          name: '紫藥水(小)',
          description: '使用後會使HP和MP各自恢復60的特殊藥水。',
          Img: "http://game.yam.com/koongya/main_products/mall/mall_pic/m-liquid/image014.jpg"
        },
        6:{
          quantity: 4,
          name: '紫藥水(大)',
          description: '使用後會使HP和MP各自恢復120的特殊藥水。',
          Img: "http://game.yam.com/koongya/main_products/mall/mall_pic/m-liquid/image018.jpg"
        }
      }
    });
    this.items = [];
    return {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      count: 0,
    };
  },

  

 componentDidMount: function() {
    this.usersRef.on('child_added', (dataSnapshot) => {
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
                  {rowData.text.name+'   x'+rowData.text.quantity}
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
                rowData.text.name,rowData.text.quantity)} style={styles.touchable}>
                <View style={styles.button_Blue}>
                  <Text style={{color: '#FFFFFF',textAlign: 'center'}}>
                    使用
                  </Text>
                </View>
              </TouchableHighlight>
              <View style={{flex: 1,}}></View>
            </View>
            
          </View>
    );
  },
  Used(id: number,name: number,quantity: number){
    if (quantity <= 0){
      Alert.alert(
       name+'使用失敗',
      '數量不足無法使用',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
    );
    } 
    else {
      let decrease = quantity - 1;
      this.usersRef.child(id).update({quantity: decrease});
      Alert.alert(
        '已使用',
        '剩下'+decrease+'個',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]
      );
      this.newitems = [];//重新render一次資料 
      this.usersRef.on('child_added', (dataSnapshot) => {
        this.newitems.push({id: dataSnapshot.key(), text: dataSnapshot.val()});
        console.log(dataSnapshot.key()+' '+dataSnapshot.val());
        //id是指314282187下面item的id,text是指文字
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(this.newitems)
      });
    });
    }
    
  },
  _pressRow(id: number,name: number,quantity: number) {
    Alert.alert(
      '確定使用要'+name+' ?',
      '數量: '+quantity,
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => this.Used(id,name,quantity)},
      ]
    );
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
    borderColor:'#985813',
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
    fontStyle: 'italic',
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
module.exports = object;

