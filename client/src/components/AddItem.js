import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  View,
  Text,
  TextInput,
  Button,
  Picker,
} from 'react-native'
import { Field, reduxForm, formValueSelector, Item } from 'redux-form'

import * as itemActions from '../actions/itemActions';
import CustomTextInput from './CustomTextInput';
import CustomPicker from './CustomPicker';


class AddItem extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const item = {
      name: this.props.itemName,
      quantity: this.props.itemAmount,
      type: this.props.category,
      user: this.props.username,
    }
    this.props.itemActions.addItem(item, this.props.fridge.id);
  }

  render() {
    return ( 
      <View>
        <View>
          <Text>Add a new item</Text>
        </View>
        <View>
          <Field 
            name='itemName' 
            placeholder='Name of the item' 
            autoCapitalize='none'
            component={CustomTextInput} 
          />
          <Field 
            name='itemAmount' 
            placeholder='Amount' 
            keyboardType = 'numeric'
            component={CustomTextInput} 
          />
          <View>
            <Text>Select a category</Text>
            <Field 
              name='category'
              component={CustomPicker} 
            >
              <Picker.Item label='Produce' value='produce' />
              <Picker.Item label='Dairy' value='dairy' />
              <Picker.Item label='Frozen' value='frozen' />
              <Picker.Item label='Grains and Starches' value='grains' />
              <Picker.Item label='Frozen' value='frozen' />
              <Picker.Item label='Miscellaneous' value='misc' />
            </Field>
          </View>
          <Button
            onPress={this.handleSubmit}
            title='Submit' 
          />
        </View>
      </View>
    )
  }
}

// turn the form into a redux form
AddItem = reduxForm({
  form: 'addItem'
})(AddItem);
// create a selector to grab form values from the stor
const selector = formValueSelector('addItem');

const AddItemState = (store) => {
  // add form values as store props on this component
  const itemName = selector(store, 'itemName');
  const itemAmount = selector(store, 'itemAmount');
  const category = selector(store, 'category');
  return {
    itemName,
    itemAmount,
    category,
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