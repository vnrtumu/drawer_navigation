import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

export default class Screen1 extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}> This is screen 3 </Text>
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('Screen2')}
          style={styles.touchableHighlight}
          underlayColor={'#f1f1f1'}>
          <Text style={styles.text}>Go to screen 2</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  touchableHighlight: {
    backgroundColor: 'orange',
    paddingVertical: 20,
    paddingHorizontal: 50,
    margin: 10,
  },
});
