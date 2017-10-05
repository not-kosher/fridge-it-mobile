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
  
  handleSubmit(values) {
    console.log('help me', values);
  }

  render () {
    return (
      <View>
        <Text>This is App</Text>
      </View>
    )
  }
}


export default App;