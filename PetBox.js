
import React, { Component } from 'react';
import  {
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Firebase from 'firebase';
import Statusbar from './Statusbar';
import Pet from './Pet';
import LinearGradient from 'react-native-linear-gradient';

var PetBox = React.createClass({

  getInitialState: function() {
    var myFirebaseRef = new Firebase("https://project-5810968585068392276.firebaseio.com/users/314282187");
    this.usersRef = myFirebaseRef.child('Pet');
    this.items = [];
    // myFirebaseRef.set({
    //   Name:'冰櫃神速',
    //   Pet: {
    //     1: {
    //       id: 7,
    //       name: '胡頭犬',
    //       Lv: 10,
    //       Hp: 100,
    //       Atk: 15,
    //       Def: 5,
    //       Spd: 20,
    //       Img: "http://s33.postimg.org/puos6zvy7/image.png"
    //     },
    //     2: {
    //       id: 6,
    //       name: '大眼怪',
    //       Lv: 13,
    //       Hp: 60,
    //       Atk: 10,
    //       Def: 3,
    //       Spd: 5,
    //       Img: "http://s33.postimg.org/em1erq3cv/image.png",
    //     },
    //     3: {
    //       id: 5,
    //       name:'綜合菇',
    //       Lv: 12,
    //       Hp:70,
    //       Atk: 12,
    //       Def: 5,
    //       Spd: 10,
    //       Img: "http://s33.postimg.org/wlhmbzvy7/502.png"
    //     }
    //   },
    //   Item: {
    //     1:{
    //       quantity: 10,
    //       name: '紅藥水(小)',
    //       description: '使用後會使HP一次恢復60的特殊藥水。',
    //       Img: "http://game.yam.com/koongya/main_products/mall/mall_pic/m-liquid/image003.jpg"
    //     },
    //     2:{
    //       quantity: 12,
    //       name: '紅藥水(大)',
    //       description: '使用後會使HP一次恢復120的特殊藥水。',
    //       Img: "http://game.yam.com/koongya/main_products/mall/mall_pic/m-liquid/image005.jpg"
    //     },
    //     3:{
    //       quantity: 4,
    //       name: '藍藥水(小)',
    //       description: '使用後會使MP一次恢復60的特殊藥水。',
    //       Img: "http://game.yam.com/koongya/main_products/mall/mall_pic/m-liquid/image008.jpg"
    //     },
    //     4:{
    //       quantity: 1,
    //       name: '藍藥水(大)',
    //       description: '使用後會使MP一次恢復120的特殊藥水。',
    //       Img: "http://game.yam.com/koongya/main_products/mall/mall_pic/m-liquid/image011.jpg"
    //     },
    //     5:{
    //       quantity: 4,
    //       name: '紫藥水(小)',
    //       description: '使用後會使HP和MP各自恢復60的特殊藥水。',
    //       Img: "http://game.yam.com/koongya/main_products/mall/mall_pic/m-liquid/image014.jpg"
    //     },
    //     6:{
    //       quantity: 4,
    //       name: '紫藥水(大)',
    //       description: '使用後會使HP和MP各自恢復120的特殊藥水。',
    //       Img: "http://game.yam.com/koongya/main_products/mall/mall_pic/m-liquid/image018.jpg"
    //     }
    //   }
    // });
    
    return {
      id: null,
      Lv: null,
      Hp: null,
      Atk: null,
      Def: null,
      Spd: null,
      name: null,
      Img: null,
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
    };
  },

  

  componentWillMount: function() {
    this.usersRef.on('child_added', (dataSnapshot) => {
      this.items.push({id: dataSnapshot.key(), text: dataSnapshot.val()});
      //id是指第幾個,text是指文字
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.items)
      });
    });
  },
  
  render: function() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={[  '#353536','#0F0F10']} style={{flex: 1,}}>
          <View style={{flex:1}}>
            <Statusbar></Statusbar>
          </View>
          <View style={{flex: 7,}}>
            <ListView contentContainerStyle={styles.list}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow}
            />
          </View>
        </LinearGradient>
      </View>
    );
  },

  _renderRow: function(rowData: string,rowID:number) {
    console.log(rowData.text.Img);

    return (
      <TouchableHighlight onPress={() => this._pressRow(rowData.text.Lv,
        rowData.text.Hp,rowData.text.Atk,rowData.text.Def,
        rowData.text.Spd,rowData.text.name,rowData.text.id,
        rowData.text.Img)} underlayColor='rgba(0,0,0,0)'>
        <View>
          <View style={styles.row}>
            <Image style={styles.thumb}  source={{uri:rowData.text.Img}} />
            <Text style={styles.text}>
              {rowData.id}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  },

  _pressRow: function(Lv: number,Hp: number,Atk: number,Def: number,
    Spd: number,Name: string,id: number,Img: string) {
    this.state.Lv = Lv;
    this.state.Hp = Hp;
    this.state.Atk = Atk;
    this.state.Def = Def;
    this.state.Spd = Spd;
    this.state.Name = Name;
    this.state.id = id;
    this.state.Img = Img;
    const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Pet',
                component: Pet,
                params: {
                    Lv: this.state.Lv,
                    Hp: this.state.Hp,
                    Atk: this.state.Atk,
                    Def: this.state.Def,
                    Spd: this.state.Spd,
                    Name: this.state.Name,
                    id: this.state.id,
                    Img: this.state.Img,
                 }   
            })
        }
  },
});





var styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
  },
  list: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row: {
    
    padding: 10,
    margin: 10,
    width: 140,
    height: 140,
    backgroundColor: '#F6F6F6',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC'
  },
  thumb: {
    width: 96,
    height: 96,
  },
  text: {
    flex: 1,
    marginTop: 5,
    fontWeight: 'bold'
  },
  welcome: {
    color: '#FFFFFF'
  },
});

module.exports = PetBox;