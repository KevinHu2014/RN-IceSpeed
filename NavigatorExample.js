'use strict';
var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator,
} = React;


var NavigatorExample = React.createClass({
  render() {
    return (
    	<View style={styles.container}>
    		 <Navigator
            initialRoute={{name: 'My First Scene', index: 0}}
            renderScene={(route, navigator) =>
              <MySceneComponent
                name={route.name}
                onForward={() => {
                  var nextIndex = route.index + 1;
                  navigator.push({
                    name: 'Scene ' + nextIndex,
                    index: nextIndex,
                  });
                }}
                onBack={() => {
                  if (route.index > 0) {
                    navigator.pop();
                  }
                }}
              />
            }
          />
    	</View>
      
    );
  },
  
});
var MySceneComponent = React.createClass({
  render() {
    return(
      <Text>XDDDD</Text>
      );
  },
});
var styles = StyleSheet.create({
 	container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  	backgroundColor: '#A9A9A9',
	}
 });
module.exports =  NavigatorExample;
