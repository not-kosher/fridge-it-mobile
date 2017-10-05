import React, { Component } from 'react';
import {
  Button,
  View,
  Image,
  Text,
} from 'react-native'




class FridgeView extends Component {
  constructor(props) {
    super(props)
  }

  // componentWillMount() {
  //     this.props.fridgeActions.getFridge('lillianno@no.com', () => {
  //     this.props.itemActions.getItems(this.props.fridge.id)
  //   })
  // };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <Button 
          style={{flex: 1,}}
          title='Frozen'
          onPress={() => navigate('CategoryView', {category: 'frozen'})}
        />
        <Button 
          style={{flex: 1,}}
          title='Protein'
          onPress={() => navigate('CategoryView', {category: 'protein'})}
        />
        <Button 
          style={{flex: 1,}}
          title='Grains'
          onPress={() => navigate('CategoryView', {category: 'grains'})}
        />
        <Button 
          style={{flex: 1,}}
          title='Dairy'
          onPress={() => navigate('CategoryView', {category: 'dairy'})}
        />
        <Button 
          style={{flex: 1}}
          title='Produce'
          onPress={() => navigate('CategoryView', {category: 'produce'})}
        />
        <Button 
          style={{flex: 1}}
          title='Misc'
          onPress={() => navigate('CategoryView', {category: 'misc'})}
        />
      </View>
    )
  }
}

export default FridgeView;
