import React, { Component } from 'react';
import {
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
import LinearGradient from 'react-native-linear-gradient';

var object = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(this._genRows({})),
      count: 0,
    };
  },

  _pressData: ({}: {[key: number]: boolean}),

 componentWillMount: function() {
   this._pressData = {};
 },

  render() {
    return (
    	<View style={styles.container}>
         <View style={{flex:1}}>
           <Statusbar></Statusbar>
         </View>
         <View style={styles.main}>
            <LinearGradient colors={[  '#FFB75E','#ED8F03']} style={{flex: 1,}}>
                <ListView contentContainerStyle={styles.list}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                />
            </LinearGradient>
         </View>
    	</View>
    );
  },

  _renderRow: function(rowData: string, sectionID: number, rowID: number) {
    return (
          <View style={styles.row}>
            <Image style={styles.thumb} source={require('./Img/item.png')}/>
            <View style={styles.textAndButton}>
              <Text style={styles.texts}>
                {rowData}
              </Text>
              <TouchableHighlight onPress={this._pressRow} style={styles.touchable}>
                <View style={styles.button_Blue}>
                  <Text style={{color: '#FFFFFF',textAlign: 'center'}}>
                    使用
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
    );
  },

  _genRows: function(num:number): Array<string> {
    if(temp==0){
      num = 0;
    }
    var dataBlob = [];
    for (var ii = 0; ii < text.length; ii++) {
      var pressedText = text[ii] + num;
      dataBlob.push(pressedText);
    }
    temp++;
    return dataBlob;
  },

  _pressRow: function() {
    this.state.count = this.state.count + 1;
     console.log(this.state.count);
     this.setState({dataSource: this.state.dataSource.cloneWithRows(
      this._genRows(this.state.count)
    )});
  },

});

let temp = 0;

var text = ['道具 ： ','道具 ： ','道具 ： ','道具 ： ','道具 ： ','道具 ： '];

var THUMB_URLS = [require('./Img/b.png')];

var styles = StyleSheet.create({
 	container: {
    flex: 1,
  	backgroundColor: '#FFFFFF',
    flexDirection: 'column',
	},
  main:{
    flex: 7,
    flexDirection: 'row',
    flexWrap: 'wrap',

  },
  list: {
    //flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',

  },
  outside:{
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flex : 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
//    width: 200,
    height: 100,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC'
  },
  thumb: {
    width: 64,
    height: 64
  },
  textAndButton:{
    flex: 1,
    flexDirection: 'row',
  },
  texts: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d0d0d0',
    borderWidth: 10,
    textAlign:'center',
    fontStyle: 'italic',
  },
  button_White: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    borderRadius:2,
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

