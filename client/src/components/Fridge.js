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

const Header = (
  <View style={{backgroundColor: 'white', height: 60, alignItems: 'center', justifyContent: 'flex-end'}}>
    <Image 
      source={require('../images/logo.png')} 
      style={{height: 40, width: 40}} 
    />
  </View>
);

const Logout = (
  <View style={{marginLeft: 100}}>
    <Button title='Logout' onPress={()=>console.log('help me')} />
  </View>
);

const Fridge = StackNavigator({
  FridgeView: { screen: FridgeView},
  CategoryView: { screen: CategoryView },
  AddItem: {screen: AddItem}
}, {
  navigationOptions: ({ navigation }) => ({
    headerTitle: Logo,
    headerTitleStyle: {
      alignSelf: 'center'
    },
    headerRight: Logout,
    headerStyle: {
      backgroundColor: 'white',
      borderBottomColor: 'white'
    }
    // header: Header
  }),
})

export default Fridge;