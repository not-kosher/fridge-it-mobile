import React from 'react';
import {
  Button,
  View,
  Image,
  Text,
} from 'react-native';

import * as itemActions from '../actions/itemActions'

const CategoryListEntry = (props) => {
  return (
    <View >
      <Text>{props.foodItem.quantity}</Text>
      <Text>{props.foodItem.name}</Text>
      <Text>{props.foodItem.createdAt.split('T')[0]}</Text>
      <Button 
        title='-' 
        style={{height:10, width: 10}}
        onPress={props.edit.bind(
          null, 
          {
            name: props.foodItem.name, 
            quantity: props.foodItem.quantity - 1,
            type: props.foodItem.type
          },
          props.foodItem.id
        )}
      />
      <Button 
        title='+' 
        style={{height:10, width: 10}} 
        onPress={props.edit.bind(
          null, 
          {
            name: props.foodItem.name, 
            quantity: props.foodItem.quantity + 1,
            type: props.foodItem.type
          },
          props.foodItem.id
        )}/>
      <Button 
        title='x'
        style={{height:10, width: 10}} 
        onPress={props.delete.bind(null, props.foodItem.id)}
      />
    </View>
  )
}

const styles = {
  listEntryContainer: {
    flex: 1,
    width: 10,
    height: 10,
  },
  quantity: {
    flex: 1,
    width: 10,
    height: 10
  }
}

export default CategoryListEntry;