import React from 'react';
import {
  Button,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

import * as itemActions from '../actions/itemActions'

const CategoryListEntry = (props) => {
  return (
    <View style={styles.listEntryContainer}>
      <View style={styles.listEntryRow}>
        <View style={styles.label}>
          <Text style={styles.quantity}>{props.foodItem.quantity}</Text>
        </View>
        <View style={styles.label}>
          <Text style={styles.name}>{props.foodItem.name}</Text>
        </View>
        <View style={styles.label}>
          <Text style={styles.date} >{props.foodItem.createdAt.split('T')[0]}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            title='-' 
            style={styles.subtract}
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
          <TouchableOpacity
            title='+' 
            style={styles.add} 
            onPress={props.edit.bind(
              null, 
              {
                name: props.foodItem.name, 
                quantity: props.foodItem.quantity + 1,
                type: props.foodItem.type
              },
              props.foodItem.id
            )}/>
          <TouchableOpacity
            title='x'
            style={styles.delete} 
            onPress={props.delete.bind(null, props.foodItem.id)}
          /> 
        </View>
      </View>
    </View>
  )
}

const styles = {
  listEntryContainer: {
    height: 30,
    backgroundColor: 'steelblue'
  },
  listEntryRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'pink',
  },
  label: {
    flex: 1,
    alignContent: 'center', 
    justifyContent: 'center',
  },
  quantity: {
    alignSelf: 'center',
    backgroundColor: 'powderblue'
  },
  name: {
    alignSelf: 'center',
    backgroundColor: 'aquamarine'
  },
  date: {
    alignSelf: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'steelblue'
  },
  add: {
    flex: 1,
    backgroundColor: 'darkseagreen'
  },
  subtract: {
    flex: 1,
    backgroundColor: 'lavender'
  },
  delete: {
    flex: 1,
    backgroundColor: 'thistle'
  }

}

export default CategoryListEntry;