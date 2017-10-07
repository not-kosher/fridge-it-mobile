import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Image, Button } from 'react-native'

import FridgeView from './FridgeView'
import CategoryView from './CategoryView'
import AddItem from './AddItem'
<<<<<<< HEAD
import Logout from './Logout';

const Logo = (
  <Image 
    source={require('../images/logo.png')} 
    style={{height: 40, width: 40, paddingBottom: 2}} 
  />
);
=======
import Home from './Map'
>>>>>>> renders map of san francisco when you click protein button

const Fridge = StackNavigator({
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
<<<<<<< HEAD
  AddItem: {screen: AddItem}
}, {
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
=======
  AddItem: {screen: AddItem},
  Map: {screen: Home}
})
>>>>>>> renders map of san francisco when you click protein button

export default Fridge;