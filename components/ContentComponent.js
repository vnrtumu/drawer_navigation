import React, {Component} from 'react';
import {
  TouchableOpacity,
  ScrollView,
  View,
  TouchableHighlight,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

export default class ContentContainer extends Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.drawerTransparent}
        onPress={() => this.props.navigation.goBack()}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.drawer}
          disabled={false}>
          <ScrollView>
            <View style={styles.header}>
              <Image
                source={require('../icons/logo.png')}
                style={styles.headerImage}
              />
              <Text style={[styles.text, {color: '#fff'}]}>My Profile</Text>
            </View>

            <TouchableHighlight
              underlayColor={'rgba(0,0,0,0.2)'}
              onPress={() => this.props.navigation.navigate('Screen1')}>
              <View style={styles.row}>
                <Image
                  source={require('../icons/notification.png')}
                  style={styles.iconImage}
                />
                <Text style={styles.text}>Contacts</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor={'rgba(0,0,0,0.2)'}
              onPress={() => this.props.navigation.navigate('Screen2')}>
              <View style={styles.row}>
                <Image
                  source={require('../icons/notification.png')}
                  style={styles.iconImage}
                />
                <Text style={styles.text}>Add Contact</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor={'rgba(0,0,0,0.2)'}
              onPress={() => this.props.navigation.navigate('Screen3')}>
              <View style={styles.row}>
                <Image
                  source={require('../icons/notification.png')}
                  style={styles.iconImage}
                />
                <Text style={styles.text}>Add Group</Text>
              </View>
            </TouchableHighlight>

            <View style={styles.line} />
            <TouchableHighlight
              underlayColor={'rgba(0,0,0,0.2)'}
              onPress={() => this.props.navigation.navigate('Screen3')}>
              <View style={styles.row}>
                <Image
                  source={require('../icons/notification.png')}
                  style={styles.iconImage}
                />
                <Text style={styles.text}>Logout</Text>
              </View>
            </TouchableHighlight>

          </ScrollView>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  drawerTransparent: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  drawer: {
    flex: 1,
    width: 300,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: 200,
    backgroundColor: '#1ABC9C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    borderRadius: 40,
    height: 80,
    width: 80,
  },
  iconImage: {
    borderRadius: 15,
    height: 30,
    width: 30,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingLeft: 10,
  },
  menu: {
    width: 10,
    height: 10,
    backgroundColor: 'red',
    borderRadius: 50,
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    color: '#111',
  },
  line: {
    width: '90%',
    alignSelf: 'center',
    height: 1,
    backgroundColor: 'grey',
    margin: 15,
  },
});
