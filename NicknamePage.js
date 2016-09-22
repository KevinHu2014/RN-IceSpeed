import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SplashScreen from "rn-splash-screen";

var NicknamePage = React.createClass({
    getInitialState(){
        return{
            text : "",
            check: false,
            Name: " 胡翔喻",
        }
    },
    componentDidMount(){
        SplashScreen.hide();
    },
    //check 是指 如果暱稱有特殊字元 = true else false
    async _onPress() {
        let temp = await this.validateText(this.state.text);
        if (temp){
            // not a valid email
            this.setState({check: false});
            Alert.alert(
                '請重新輸入暱稱',
                '注意！！請勿使用特殊字元',
                [
                  
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]
            )
        }
        else if(this.state.text == ""){
            // if input is blank
            Alert.alert(
                '請輸入暱稱',
                '要先輸入暱稱才能進行遊戲唷～',
                [
                  
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]
            )
        }
        else {
            // valid email
            this.setState({check: true});
        }

    },
    validateText(text){
        var re = /[!@#\$\%\^&\*\(\)_\+\-={}\|:"<>?，。\[\]\\;\'\,\.\/~`\s]/g;
        //var re = /[a-zA-Z\u4e00-\u9fa5\u0800-\u4e00]+/g;
        return re.test(text);
    },
    render(){
        return(
            <View style={styles.container}>
                <LinearGradient colors={['#ffb347','#ffcc33']} style={{flex: 1,}}>
                    <View style={styles.blank}></View>
                    <View style={styles.blank}></View>
                    <View style={styles.middle}>
                        <Text style={[styles.welcome,{textAlign: 'center'}]}>
                            {this.state.Name+"您好，\n歡迎您來到遊戲"}
                        </Text>
                    </View>
                    <View style={styles.middle}>
                        <TextInput
                            style={styles.welcome}
                            placeholder="請輸入暱稱"
                            onChangeText={(text) => this.setState({text})}
                        />
                    </View>
                    <View style={styles.blank}></View>
                    <View style={[styles.blank,{flexDirection: 'row'}]}>
                        <View style={styles.blank}></View>
                        <View style={styles.blank}>
                            <TouchableHighlight
                                style={styles.touchable}
                                onPress={this._onPress}>
                                  <View style={styles.Button}>
                                      <Text style={styles.welcome_Button}>
                                        確認
                                      </Text>
                                  </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.blank}></View>
                    </View>
                    <View style={styles.blank}></View>
                    
                    
                </LinearGradient>
            </View>
        )
    }
    
});

var styles = StyleSheet.create({
 	container: {
        flex: 1,
	},
    blank:{
        flex: 1,
    },
    middle:{
        flex: 1,
    },
    welcome:{
        fontSize: 30,
        color: '#FFFFFF'
    },
    Button: {
        flex: 1,
        backgroundColor: '#2881F0',
        justifyContent: 'center',
        borderRadius:2,
    },
    welcome_Button: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: 'center',
        margin: 10,
        color: '#FFFFFF'
    },
    touchable:{
        flex:1,
        margin:15,
        borderRadius:2,
        elevation:10 
    },
 

})

module.exports = NicknamePage;