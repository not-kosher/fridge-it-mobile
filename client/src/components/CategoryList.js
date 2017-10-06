import React from 'react';
import {
  Button,
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import CategoryListEntry from './CategoryListEntry'

const CategoryList = (props) => {
  return (
    <View style={{flex: 1}}>
      <Text>{props.category}</Text>
      {props.food.map((foodItem) => {
        return <CategoryListEntry edit={props.edit} delete={props.delete} foodItem={foodItem} key={foodItem.id}/>
      })}
    </View>
  )
}

export default CategoryList;