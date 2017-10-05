import React, { Component } from 'react';
import {
  Button,
  View,
  Image,
  Text,
} from 'react-native'



class FridgeView extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <Button 
          style={{flex: 1,}}
          title='Frozen'
          onPress={() => navigate('CategoryView')}
        />
        <Button 
          style={{flex: 1,}}
          title='Protein'
          onPress={() => navigate('CategoryView')}
        />
        <Button 
          style={{flex: 1,}}
          title='Grains'
          onPress={() => navigate('CategoryView')}
        />
        <Button 
          style={{flex: 1,}}
          title='Dairy'
          onPress={() => navigate('CategoryView')}
        />
        <Button 
          style={{flex: 1}}
          title='Produce'
          onPress={() => navigate('CategoryView')}
        />
        <View style={{flex: 1,}}>
          <Button 
            style={{flex: 1}}
            title='Misc'
            onPress={() => navigate('CategoryView')}
          />
        </View>

      </View>
    )
  }
}

export default FridgeView;
