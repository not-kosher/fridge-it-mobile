import React, { Component } from 'react';
import {
  Button,
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native'
var MapView = require('react-native-maps');

class Home extends Component{
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
      <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
      </View>
    )
  }
 }


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Home;