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


var NicknamePage = React.createClass({
    getInitialState(){
        return{
            text : "",
            check: false,
            Name: " 胡翔喻",
        }
    },
    //check 是指 如果暱稱有特殊字元 = true else false
    _onPress() {
        if (this.validateText(this.state.text) | this.state.text == ""){
            // not a valid email
            this.setState({check: false});
        }
        else {
            // valid email
            this.setState({check: true});
        }
    },
    validateText(text){
        var re = /[!@#\$\%\^&\*\(\)_\+\-={}\|:"<>?\[\]\\;\'\,\.\/~`\s]/g;
        return re.test(text);
    },
    render(){
        return(
            <View style={styles.container}>
                <LinearGradient colors={['#ffb347','#ffcc33']} style={{flex: 1,}}>
                    <Text style={{flex:1,color:'#FFFFFF'}}>
                        {this.state.Name+"\b，歡迎您來到遊戲！！"}
                    </Text>
                    <TextInput
                        style={{height: 40,flex:1}}
                        placeholder="請輸入暱稱"
                        onChangeText={(text) => this.setState({text})}
                    />
                    <TouchableHighlight
    				onPress={this._onPress}
    			 	style={{flex:1,borderRadius:4}}>
                        <View>
                            <Text>
                                確認
                            </Text>
                        </View>
    	  		    </TouchableHighlight>
                    <Text style={{flex:1}}>
                        {this.state.check? '名稱成功':'名稱失敗'}
                    </Text>
                </LinearGradient>
            </View>
        )
    }
    
});

var styles = StyleSheet.create({
 	container: {
    flex: 1,
    flexDirection: 'column',
	},
})

module.exports = NicknamePage;