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
    this.items = [];
    return {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      count: 0,
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
                  {'  '+'經驗值上升1.5倍'}
                </Text>
              </View>
            </View>
            <View style={{flex: 1,flexDirection:'column',}}>
              <TouchableHighlight onPress={() => this._pressRow(rowData.text.name,
                rowData.text.quantity)} style={styles.touchable}>
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
  Used(){
    console.log('ok');
    Alert.alert(
      '已使用',
      '道具可維持4小時',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
    );
  },
  _pressRow(name: number,quantity: number) {
    Alert.alert(
      '確定使用要'+name+' ?',
      '數量: '+quantity,
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => this.Used()},
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

