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
      <Text style={styles.categoryTitle}>{props.category}</Text>
      {props.food.map((foodItem) => {
        return <CategoryListEntry edit={props.edit} delete={props.delete} foodItem={foodItem} key={foodItem.id}/>
      })}
    </View>
  )
}

const styles = {
  categoryTitle: {
    alignSelf: 'center',
    fontSize: 34,
    fontWeight: '600',
    color: 'white',
  }
}

export default CategoryList;