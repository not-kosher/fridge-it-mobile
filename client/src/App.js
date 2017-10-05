import React from 'react';
import { StackNavigator, } from 'react-navigation';
import {
  View,
  Text
} from 'react-native'
import AddItem from './components/AddItem';


class App extends React.Component {
  constructor() {
    super()
  }

  render () {
    let lang = 'js';
    return (
      <View style={{flex: 1}}>
        <AddItem />
      </View>
    )
  }
}


export default App;