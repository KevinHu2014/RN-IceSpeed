
import React, { Component } from 'react';
import  {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator,
} from 'react-native';
import * as Progress from 'react-native-progress';
var FetchTest = React.createClass({
  getInitialState(){
    return{
      UID: '',
      Name: '',
      Rank: '',
      Money: '',
      FireExp: '',
      WaterExp: '',
      WoodExp: '',
      progress: 100,
      indeterminate: true
    }
  },
  componentDidMount(){
    
    fetch("https://ft-kevinhu831208.vz2.dreamfactory.com/api/v2/icespeed/_table/user/", {
              method: "GET",
              headers: {
                'X-DreamFactory-Api-Key': '36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88',
                'X-DreamFactory-Session-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsInVzZXJfaWQiOjEsImVtYWlsIjoia2V2aW5odTgzMTIwOEBnbWFpbC5jb20iLCJmb3JldmVyIjpmYWxzZSwiaXNzIjoiaHR0cHM6XC9cL2Z0LWtldmluaHU4MzEyMDgudnoyLmRyZWFtZmFjdG9yeS5jb21cL2FwaVwvdjJcL3N5c3RlbVwvYWRtaW5cL3Nlc3Npb24iLCJpYXQiOjE0NjgzMDY1MTUsImV4cCI6MTQ2ODMxMDExNSwibmJmIjoxNDY4MzA2NTE1LCJqdGkiOiI5ZTcwYTVmNmQ4NDFhMzc4NzQxNGQwMjNjZDYxOWMxNyJ9.SxDwy93ArOxyH5qN_2EQcBCq_ff8dpOq8VC75qagpzE',
                'Accept': 'application/json',

              }
          })
          .then((response) => response.json())
          .then((responseJSON) => {
            Alert.alert(
              '資料載入完成',
              responseJSON.resource[0].Name+'您好',
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]
            )
            this.setState({
              UID: responseJSON.resource[0].UID,
              Name: responseJSON.resource[0].Name,
              Rank: responseJSON.resource[0].Rank,
              Money: responseJSON.resource[0].Team,
              FireExp: responseJSON.resource[0].FireExp,
              WaterExp: responseJSON.resource[0].WaterExp,
              WoodExp: responseJSON.resource[0].WoodExp,
              indeterminate: false
            });
          })
          .done();
  },
  render(){
    return (
      <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',}}>
          <Text>{'UID:'+this.state.UID}</Text>
          <Text>{'Name:'+this.state.Name}</Text>
          <Text>{'Rank:'+this.state.Rank}</Text>
          <Text>{'Money:'+this.state.Money}</Text>
          <Text>{'FireExp:'+this.state.FireExp}</Text>
          <Text>{'WaterExp:'+this.state.WaterExp}</Text>
          <Text>{'WoodExp:'+this.state.WoodExp}</Text>
          <Progress.Bar 
            progress={this.state.progress}
            indeterminate={this.state.indeterminate}
            direction="counter-clockwise"
          />
      </View>
    );
  }
});

module.exports =  FetchTest;