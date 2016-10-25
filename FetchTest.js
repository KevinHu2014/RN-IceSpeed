
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
      Token: '',
      UID: '',
      Name: '',
      Team: '',
      Rank: '',
      Money: '',
      FireStone: '',
      WaterStone: '',
      WoodStone: '',
      progress: 100,
      indeterminate: true
    }
  },
  async getToken(){
   try {
      let response = await fetch("https://ft-kevinhu831208.vz2.dreamfactory.com/api/v2/user/session", {
              method: "POST",
              headers: {
                'X-DreamFactory-Api-Key': '36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88',
                'Accept': 'application/json',
              },
              body: JSON.stringify({
                email: '402261094@mail.fju.edu.tw',
                password: 'kevinhu128',
                duration: 0
              })
          });
      let responseJson = await response.json();
      //console.log(responseJson.session_token);
      this.setState({
        Token:  responseJson.session_token,
        indeterminate: false,
      });
      this.getData(responseJson.session_token);
    } catch(error) {
      console.error(error);
    }
          

  },
  async getData(Token: string){
    fetch("https://ft-kevinhu831208.vz2.dreamfactory.com/api/v2/icespeed/_table/user", {
              method: "GET",
              headers: {
                'X-DreamFactory-Api-Key': '5d1f504bc9e636508f26c6841287096ae6a1a3e7c5e3a4e78bc1769571a8f5d4',
                'X-DreamFactory-Session-Token': Token,
                'Accept': 'application/json',
              }
          })
          .then((response) => response.json())
          .then((responseJSON) => {
            console.log(responseJSON);
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
              Team: responseJSON.resource[0].Team,
              Money: responseJSON.resource[0].Money,
              FireStone: responseJSON.resource[0].FireStone,
              WaterStone: responseJSON.resource[0].WaterStone,
              WoodStone: responseJSON.resource[0].WoodStone,
              indeterminate: false
            });
          })
          .done();
  },
  componentDidMount(){
    this.getToken();
    
  },
  _pressButton(){
    const { navigator } = this.props;
            if(navigator) {
                //返回mapexample
                navigator.pop();
            }
  },
  render(){
    return (
      <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',}}>
          <Text>{'Token:'+this.state.Token}</Text>
          <Text>{'UID:'+this.state.UID}</Text>
          <Text>{'Name:'+this.state.Name}</Text>
          <Text>{'Team:'+this.state.Team}</Text>
          <Text>{'Money:'+this.state.Money}</Text>
          <Text>{'FireStone:'+this.state.FireStone}</Text>
          <Text>{'WaterStone:'+this.state.WaterStone}</Text>
          <Text>{'WoodStone:'+this.state.WoodStone}</Text>
          <Progress.Bar 
            progress={this.state.progress}
            indeterminate={this.state.indeterminate}
            direction="counter-clockwise"
          />
          <Text onPress={this._pressButton}>返回</Text>
      </View>
    );
  }
});

module.exports =  FetchTest;