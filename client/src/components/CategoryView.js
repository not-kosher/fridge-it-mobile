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
  };

  componentWillMount() {
    this.props.fridgeActions.getFridge('lillianno@no.com')
    console.log(this.props.fridge)
    // this.props.fridgeActions.getFridge(localStorage.getItem(19));
    // let state = this;
    // console.log(state)
    // setTimeout(() => {
    //   state.props.itemActions.getItems(localStorage.getItem('fId'));
    // }, 500);
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