import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Button,
  View,
  Image,
  Text,
} from 'react-native'

import * as fridgeActions from '../actions/fridgeActions';
import * as itemActions from '../actions/itemActions'

import CategoryList from './CategoryList'

class CategoryView extends Component {
  constructor(props) {
    super(props)

    this.filterItems = this.filterItems.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.editItem = this.editItem.bind(this)
  };

  componentWillMount() {
    this.props.fridgeActions.getFridge('lillianno@no.com', () => {
      this.props.itemActions.getItems(this.props.fridge.id, () => {
        this.filterItems(this.props.navigation.state.params.category)
      })
    })
  };

  filterItems(type) {
    return this.props.items.filter(item => {
      if (item.type === type) {
        return item; 
      }
    })
  };

  deleteItem(id) {
    this.props.itemActions.deleteItem(id)    
  }

  editItem(item, id) {
    console.log(item, id)
    this.props.itemActions.updateItem(item, id)   
  }

  render() {
    const { navigate } = this.props.navigation;
    const filteredFoodItems = this.filterItems(this.props.navigation.state.params.category)
    return (
      <View style={{flex: 1, flexDirection: 'column',  alignContent: 'center', backgroundColor: this.props.navigation.state.params.backgroundColor}}>
        <CategoryList 
          backgroundColor={this.props.navigation.state.params.backgroundColor}
          delete={this.deleteItem} 
          edit={this.editItem}
          food={filteredFoodItems} 
          category={this.props.navigation.state.params.category}/>
          <Button
            title='Add an item!'
            onPress={() => navigate('AddItem')}
          />
      </View>
    )
  }
};

const Styles = {
 
}

const fridgeState = (store) => {
  return {
    username: store.auth.username,
    fridge: store.fridge.fridge,
    items: store.items.items,
    posted: store.fridge.posted,
    fetched: store.fridge.fetched
  }
};

const fridgeDispatch = (dispatch) => {
  return {
    fridgeActions: bindActionCreators(fridgeActions, dispatch),
    itemActions: bindActionCreators(itemActions, dispatch)
  }
};

export default connect(fridgeState, fridgeDispatch)(CategoryView); 

// export default CategoryView;