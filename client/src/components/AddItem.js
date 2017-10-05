import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  View,
  Text,
  TextInput,
  Button,
} from 'react-native'

import * as itemActions from '../../actions/itemActions.js'


class AddItem extends React.Component {

  render () {
    return ( 
      <View >
        <Text></Text>
      </View>
    )
  }
}

const AddItemState = (store) => {
  return {
    username: store.auth.username,
    fridge: store.fridge.fridge,
  }
};

const AddItemDispatch = (dispatch) => {
  return {
    itemActions: bindActionCreators(itemActions, dispatch)
  }
};

export default connect(AddItemState, AddItemDispatch)(AddItem);