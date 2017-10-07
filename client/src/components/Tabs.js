import React from 'react';
import { Button, Platform, ScrollView, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Fridge from './Fridge';
import MessageView from './MessageView';

Fridge.navigationOptions = {
  tabBarLabel: 'My Fridge',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-home' : 'ios-home-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

MessageView.navigationOptions = {
  tabBarLabel: 'Messages',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

const Tabs = TabNavigator(
  {
    Home: {
      screen: Fridge,
      path: '',
    },
    Messages: {
      screen: MessageView,
      path: 'messages',
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#e91e63'
    },
  }
);

export default Tabs;