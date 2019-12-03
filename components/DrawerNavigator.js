import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from './HomeScreen';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import ContentComponent from './ContentComponent';
import {Dimensions} from 'react-native';

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {screen: HomeScreen},
    Screen1: {screen: Screen1},
    Screen2: {screen: Screen2},
    Screen3: {screen: Screen3},
  },
  {
    initialRouteName: 'Home',
    contentComponent: ContentComponent,
    drawerWidth: Dimensions.get('window').width,
    drawerPosition: 'left',
    drawerBackgroundColor: 'transparent',
  },
);

const AppContainer = createAppContainer(MyDrawerNavigator);

export default class DrawerNavigator extends Component {
  render() {
    return <AppContainer />;
  }
}
