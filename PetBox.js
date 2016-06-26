
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
    var usersRef = new Firebase("https://project-5810968585068392276.firebaseio.com/users/314282187");
    usersRef.set({
      Pet: {
        one: {
          id: 1,
          name: '胡頭犬',
          Hp: 100
        }
      },
      Item: {
        one:{
          id: 1,
          name: '經驗卷'
        }
      }
    });

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      test: 0,
      dataSource: ds.cloneWithRows(['胡頭犬','胡頭犬','胡頭犬','胡頭犬','胡頭犬','胡頭犬']),
    };
  },

  

  componentWillMount: function() {
    
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

  _renderRow: function(rowData: string, sectionID: number, rowID: number) {
   
    
    return (
      <TouchableHighlight onPress={() => this._pressRow(rowID)} underlayColor='rgba(0,0,0,0)'>
        <View>
          <View style={styles.row}>
            <Image style={styles.thumb}  source={require('./Img/h.png')} />
            <Text style={styles.text}>
              {rowData}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  },

  _pressRow: function(rowID: number) {
    console.log(rowID);
    this.state.test = rowID;
    const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Pet',
                component: Pet,
                params: {
                    test: this.state.test,
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