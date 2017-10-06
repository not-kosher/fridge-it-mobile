import React from 'react';
import { StackNavigator, } from 'react-navigation';
import {
  View,
  Text
} from 'react-native'
import Fridge from './components/Fridge'


class App extends React.Component {
  constructor() {
    super()
  }

  render () {
    let lang = 'js';
    return (
      <View style={{flex: 1}}>
        <Fridge />
      </View>
    )
  }
}


export default App;