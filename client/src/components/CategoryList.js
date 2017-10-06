import React from 'react';
import {
  Button,
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import CategoryListEntry from './CategoryListEntry'

const CategoryList = (props) => {
  return (
    <View style={{flex: 6, }}>

      <Text style={styles.categoryTitle}>{props.category}</Text>
      <ScrollView>
        {props.food.map((foodItem) => {
          return <CategoryListEntry edit={props.edit} delete={props.delete} foodItem={foodItem} key={foodItem.id}/>
        })}
      </ScrollView>
    </View>
  )
}

const styles = {
  categoryTitle: {
    alignSelf: 'center',
    padding: 10,
    fontSize: 34,
    fontWeight: '600',
    color: 'white',
  },
}

export default CategoryList;