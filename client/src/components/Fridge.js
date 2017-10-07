import React, { Component } from 'react';
import { StackNavigator, } from 'react-navigation';
import {
  Button,
  View,
  Image,
  Text,
} from 'react-native'

import FridgeView from './FridgeView'
import CategoryView from './CategoryView'
import AddItem from './AddItem'

const Logo = (
  <Image 
    source={require('../images/logo.png')} 
    style={{height: 40, width: 40}} 
  />
);

const Logout = (
  <Button title='Logout' onPress={()=>console.log('help me')} />
);

const Fridge = StackNavigator({
  FridgeView: { screen: FridgeView},
  CategoryView: { screen: CategoryView },
  AddItem: {screen: AddItem}
}, {
  navigationOptions: ({ navigation }) => ({
    headerTitle: Logo,
    headerRight: Logout,
    headerStyle: {
      backgroundColor: 'white',
      borderBottomColor: 'white'
    }
  }),
})

export default Fridge;