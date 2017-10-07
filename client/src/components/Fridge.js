import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigator } from 'react-navigation';
import {
  Button,
  View,
  Image,
  Text,
} from 'react-native'

import * as authActions from '../actions/authActions.js';
import FridgeView from './FridgeView'
import CategoryView from './CategoryView'
import AddItem from './AddItem'

let Logout = (props) => (
  <Button title='Logout' onPress={() => {
    props.authActions.logoutUser()
  }}/>
);

const LogoutState = (store) => {
  return {
    fridgeName: store.fridge.fridge.name
  }
};

const LogoutDispatch = (dispatch) => {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  }
};

Logout = connect(LogoutState, LogoutDispatch)(Logout);

const Logo = (
  <Image 
    source={require('../images/logo.png')} 
    style={{height: 40, width: 40}} 
  />
);

const Fridge = StackNavigator({
  FridgeView: { screen: FridgeView },
  CategoryView: { screen: CategoryView },
  AddItem: {screen: AddItem}
}, {
  initialRouteParams: {
    something: 'something'
  },
  navigationOptions: (props) => {
    console.log(props);
    return ({
      headerTitle: Logo,
      headerRight: (<Logout />),
      headerStyle: {
        backgroundColor: 'white',
        borderBottomColor: 'white'
      }
    })
  },
});

export default Fridge;