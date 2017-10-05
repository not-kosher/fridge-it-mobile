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

const Fridge = StackNavigator({
  FridgeView: { screen: FridgeView },
  CategoryView: { screen: CategoryView }
})

export default Fridge;