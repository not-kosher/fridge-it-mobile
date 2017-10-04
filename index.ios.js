/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import App from './client/src/App'


export default class FridgeItMobile extends Component {
  render() {
    return (
      <App />
    )
  }
}

AppRegistry.registerComponent('FridgeItMobile', () => FridgeItMobile);

