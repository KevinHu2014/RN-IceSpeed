
import React, { Component } from 'react';
import  {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator,
  ScrollView,
  Image

} from 'react-native';
import * as Progress from 'react-native-progress';
var Power = React.createClass({
  getInitialState: function() {
    return {
      press_Back: false,
      HP_progress: 0.7,
      ATK_progress: 0.5,
      SPD_progress: 0.6,
      Wood_progress: 1,
      Fire_progress: 0.3,
      Water_progress: 1,
      Wood_Powerable: true,
      Fire_Powerable: false,
      Water_Powerable: true,
    }
  },
  render(){
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.top}>
            <View style={styles.top_L}>
              <TouchableHighlight
              onPressIn={this.onPressIn}
              onPressOut={this.onPressOut}
              style={{borderRadius: 100}}>
                <View style={styles.back_button_S}>
                  <Text style={styles.back_welcome_S}>
                    {this.state.press_Back ? '<' : '返'}
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.top_R}></View>
          </View>
          <View style={styles.avatar}>
            <Image
            style={{width:180,height:180 }}
            source={{uri: 'http://s33.postimg.org/ie9umxvun/501.png'}} />
          </View>
          
          <Text style={{flex: 1 , marginTop:10,fontSize:30,fontWeight: "bold",textAlign: 'center',}}>
              LV 6
          </Text>
          <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'center'}]}>
              Status
          </Text>
          <View style={styles.status}>
            <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'left'}]}>
              {'HP\b\b'} 
            </Text>
            <Progress.Bar progress={this.state.HP_progress} 
                         width={250} height={10}
                         color={'#51B137'} 
                         unfilledColor={'#FFFFFF'} borderWidth={2}
                         borderColor={'#7B7B7B'} />
          </View>
          <View style={styles.status}>
            <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'left'}]}>
              {'ATK\b'} 
            </Text>
            <Progress.Bar progress={this.state.ATK_progress} 
                         width={250} height={10}
                         color={'#DF2727'} 
                         unfilledColor={'#FFFFFF'} borderWidth={2}
                         borderColor={'#7B7B7B'} />
          </View>
          <View style={styles.status}>
            <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'left'}]}>
              {'SPD\b'} 
            </Text>
            <Progress.Bar progress={this.state.SPD_progress} 
                         width={250} height={10}
                         color={'#318DE4'} 
                         unfilledColor={'#FFFFFF'} borderWidth={2}
                         borderColor={'#7B7B7B'} />
          </View>
          <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'center'}]}>
              Skill
          </Text>
          <View style={styles.skill}>
            <View style={styles.skill_top}>
              <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'center',fontSize: 40}]}>
              {'👊'+'拳擊'}
            </Text>
            </View>
            <View style={styles.skill_bottom}>
              <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'center',fontSize: 20}]}>
              {'威力：20'+'\b\b\b\b'+'mp：2'}
              </Text>
            </View>
          </View>
          <View style={styles.skill}>
            <View style={styles.skill_top}>
              <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'center',fontSize: 40}]}>
              {'🍃'+'落葉'}
            </Text>
            </View>
            <View style={styles.skill_bottom}>
              <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'center',fontSize: 20}]}>
              {'威力：25'+'\b\b\b\b'+'mp：3'}
              </Text>
            </View>
          </View>
          <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'center'}]}>
              Exp
          </Text>
          <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'center'}]}>
              {'離下一階進化還有'+ 6 +'等'}
          </Text>
          <View style={styles.status}>
            <Image
              style={{width:30,height:30}}
              source={{uri: 'https://s10.postimg.org/3nf56l03t/Attributes_Leaf.png'}} />
            <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'left'}]}>
              {'\bLv 1\b'} 
            </Text>
            <Progress.Bar progress={this.state.Wood_progress} 
                         width={150} height={10}
                         color={'#7EBA19'} 
                         unfilledColor={'#FFFFFF'} borderWidth={2}
                         borderColor={'#7B7B7B'} />
            <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'left'}]}>
              {'\b5/1\b'} 
            </Text>
            <TouchableHighlight
              onPressIn={this.onPressIn}
              onPressOut={this.onPressOut}
              style={{borderRadius: 100}}>
                <View style={[styles.back_button_S,{backgroundColor: '#8F8F8F'}]}>
                  <Text style={[styles.back_welcome_S,{color: '#7EBA19',fontSize: 40,}]}>
                    {this.state.Wood_Powerable ? '▲' : 'X'}
                  </Text>
                </View>
              </TouchableHighlight>
          </View>
          <View style={styles.status}>
            <Image
              style={{width:30,height:30}}
              source={{uri: 'https://s10.postimg.org/9v5yvaf7d/Attributes_Fire.png'}} />
            <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'left'}]}>
              {'\bLv 1\b'} 
            </Text>
            <Progress.Bar progress={this.state.Fire_progress} 
                         width={150} height={10}
                         color={'#AD3629'} 
                         unfilledColor={'#FFFFFF'} borderWidth={2}
                         borderColor={'#7B7B7B'} />
            <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'left'}]}>
              {'\b5/1\b'} 
            </Text>
            <TouchableHighlight
              onPressIn={this.onPressIn}
              onPressOut={this.onPressOut}
              style={{borderRadius: 100}}>
                <View style={[styles.back_button_S,{backgroundColor: '#8F8F8F'}]}>
                  <Text style={[styles.back_welcome_S,{color: '#C62323',fontSize: 40,}]}>
                    {this.state.Fire_Powerable ? 'O' : 'X'}
                  </Text>
                </View>
              </TouchableHighlight>
          </View>
          <View style={styles.status}>
            <Image
              style={{width:30,height:30}}
              source={{uri: 'https://s10.postimg.org/i2wsjzisp/Attributes_Water.png'}} />
            <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'left'}]}>
              {'\bLv 1\b'} 
            </Text>
            <Progress.Bar progress={this.state.Water_progress} 
                         width={150} height={10}
                         color={'#3376A5'} 
                         unfilledColor={'#FFFFFF'} borderWidth={2}
                         borderColor={'#7B7B7B'} />
            <Text style={[styles.welcome,{fontWeight: "bold",textAlign: 'left'}]}>
              {'\b5/1\b'} 
            </Text>
            <TouchableHighlight
              onPressIn={this.onPressIn}
              onPressOut={this.onPressOut}
              style={{borderRadius: 100}}>
                <View style={[styles.back_button_S,{backgroundColor: '#8F8F8F'}]}>
                  <Text style={[styles.back_welcome_S,{color: '#132DA5',fontSize: 40,}]}>
                    {this.state.Water_Powerable ? '⇧' : 'X'}
                  </Text>
                </View>
              </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    );
  }
});
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer:{

  },
  top:{
    flex: 1,
    flexDirection: 'row',
  },
  top_L:{
    flex: 1,
  },
  back_button_S: {
    backgroundColor: '#00DB00',
    borderRadius: 100,
    height: 50,
    width: 50,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    justifyContent: 'center'
  },
  back_welcome_S: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  top_R:{
    flex: 4,
  },
  avatar:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15
  },
  welcome:{
    fontSize: 20,
  },
  status:{
    flex: 1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  skill:{
    flex: 2,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  },
  skill_top:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  skill_bottom:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  }
 });
module.exports =  Power;