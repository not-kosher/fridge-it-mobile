import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Image, Button } from 'react-native'

import FridgeView from './FridgeView'
import CategoryView from './CategoryView'
import AddItem from './AddItem'
import Logout from './Logout';

const Logo = (
  <Image 
    source={require('../images/logo.png')} 
    style={{height: 40, width: 40, paddingBottom: 2}} 
  />
);

import GeolocationExample from './Geolocation'

const Fridge = StackNavigator(
  {
    FridgeView: { screen: FridgeView, 
      navigationOptions: ({ navigation }) => ({
        headerTitle: (
          <Button 
            title='Add an item!' 
            onPress={() => {
              navigation.navigate('AddItem', {backgroundColor: '#3c85ca'});
            }} 
          />
        )
      })
    },
    CategoryView: { screen: CategoryView },
    AddItem: {screen: AddItem},
  }, 
  {
    initialRouteParams: {
      something: 'something'
  },
    navigationOptions: (props) => ({
      headerTitle: Logo,
      headerRight: (<Logout />),
      headerStyle: {
        backgroundColor: 'white',
        borderBottomColor: 'white'
      }
    })
  },
);


export default Fridge;