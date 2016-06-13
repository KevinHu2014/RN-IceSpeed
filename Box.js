
import React, { Component } from 'react';
import  {
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} from 'react-native';
var Lightbox = require('react-native-lightbox');
var Firebase = require('firebase');

var Box = React.createClass({

  getInitialState: function() {
    var myFirebaseRef = new Firebase('https://fiery-torch-9692.firebaseio.com');
    this.itemsRef = myFirebaseRef.child('items');
    this.items = [];
    return {
      todoSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    };
  },

  _pressData: ({}: {[key: number]: boolean}),

  componentWillMount: function() {
    this.itemsRef.on('child_added', (dataSnapshot) => {
    this.items.push({id: dataSnapshot.key(), text: dataSnapshot.val()});
    this.setState({
      todoSource: this.state.todoSource.cloneWithRows(this.items)
    });
  });
  },
  renderCarousel() {
    return(
        <View style={{flex: 1,flexDirection:'column'}}>
            <View style={{flex: 5,}}>
              <Image
                style={{flex: 1,}}
                resizeMode="contain"
                source={{uri: 'http://g-search1.alicdn.com/bao/uploaded/i2/T14pBWFuBnXXXXXXXX_!!2-item_pic.png'}}
                />
            </View>
            <View style={{flex: 2,borderWidth: 1, borderRadius: 5,
                borderColor: '#CCC',flexDirection:'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                }}>
              <Text style={styles.welcome}>#245 水君</Text>
              <Text style={styles.welcome}>HP： 900</Text>
              <Text style={styles.welcome}>ATK： 500</Text>
              <Text style={styles.welcome}>DEF： 500</Text>
              <Text style={styles.welcome}>SPD： 100</Text>
            </View>
            <View style={{flex: 1,}}></View>
        </View>
        
        
      );
    
  },
  render: function() {
    return (
      // ListView wraps ScrollView and so takes on its properties. 
      // With that in mind you can use the ScrollView's contentContainerStyle prop to style the items.
      <ListView contentContainerStyle={styles.list}
        dataSource={this.state.todoSource}
        renderRow={this._renderRow}
      />
    );
  },

  _renderRow: function(rowData: string, sectionID: number, rowID: number) {
    var rowHash = Math.abs(hashCode(rowData));
    var imgSource = {
      uri: THUMB_URLS[rowHash % THUMB_URLS.length],
    };
    return (
      <TouchableHighlight onPress={() => this._pressRow(rowID)} underlayColor='rgba(0,0,0,0)'>
        <View>
          <View style={styles.row}>
            
            <Lightbox navigator={this.props.navigator}
              renderContent={this.renderCarousel}
              underlayColor='#FFFFFF'
              springConfig={ {tension: 40, friction: 30} }>
          <Image style={styles.thumb}  source={{uri:rowData.text.Img}} />
            </Lightbox>
            <Text style={styles.text}>
              {rowData.text.todo}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  },

  _genRows: function(pressData: {[key: number]: boolean}): Array<string> {
    var dataBlob = [];
    for (var ii = 0; ii < 21; ii++) {
      var pressedText = pressData[ii] ? ' (X)' : '';
      dataBlob.push('No. ' + ii + pressedText);
    }
    return dataBlob;
  },

  _pressRow: function(rowID: number) {
    this._pressData[rowID] = !this._pressData[rowID];
    this.setState({dataSource: this.state.dataSource.cloneWithRows(
      this._genRows(this._pressData)
    )});
  },
});

var THUMB_URLS = ['http://g-search1.alicdn.com/bao/uploaded/i2/T14pBWFuBnXXXXXXXX_!!2-item_pic.png'];

/* eslint no-bitwise: 0 */
var hashCode = function(str) {
  var hash = 15;
  for (var ii = str.length - 1; ii >= 0; ii--) {
    hash = ((hash << 5) - hash) + str.charCodeAt(ii);
  }
  return hash;
};

var styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row: {
    justifyContent: 'center',
    padding: 5,
    margin: 10,
    width: 100,
    height: 100,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC'
  },
  thumb: {
    width: 64,
    height: 64,
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

module.exports = Box;