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

class CategoryView extends Component {
  constructor(props) {
    super(props)

    this.filterItems = this.filterItems.bind(this)
  };

  componentWillMount() {
    this.props.fridgeActions.getFridge('lillianno@no.com', () => {
      this.props.itemActions.getItems(this.props.fridge.id, () => {
        console.log(this.filterItems(this.props.navigation.state.params.category))
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

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column',  alignContent: 'center' }}>
        <Text>This Is CategoryView!</Text>
      </View>
    )
  }
};

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