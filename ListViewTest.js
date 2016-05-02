'use strict';
var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView,
} = React;


var ListViewTest = React.createClass({
  getInitialState: function() {
  var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}); 
  return {
          dataSource: ds.cloneWithRows(['a', 'b', 'c', 'a longer example', 'd', 'e'])
        };
  },
  _renderRow: function(rowData) {
    return <Text style={styles.row}>{rowData}</Text>;
  },
  render() {
    return (
    	<View style={styles.container}>
    		 <ListView dataSource={this.state.dataSource} 
                    renderRow={this._renderRow}
          />
    	</View>
      
    );
  },
  
});
var styles = StyleSheet.create({
 	container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  	backgroundColor: '#A9A9A9',
	},
   row: {
    flex: 1,
    fontSize: 24,
    padding: 42,
    borderWidth: 1,
    borderColor: '#DDDDDD'
  },
 });
module.exports = ListViewTest;
