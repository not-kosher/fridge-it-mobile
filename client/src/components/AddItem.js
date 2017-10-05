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

  testing() {
    console.log('Also in here', this.props.testinput)
  }

  render () {
    return ( 
      <View>
        <View>
          <Text>Test input</Text>
          <Field name='testinput' component={CustomTextInput} placeholder='test' />
        </View>
        <View>
          <Text>Test dropdown</Text>
          <Field name='dropdown' component={CustomPicker} mode='dropdown'>
            <Picker.Item label='hi' value='hi' />
            <Picker.Item label='bye' value='bye' />
            <Picker.Item label="30 Years" value="30" />
          </Field>
        </View>
        <View>
          <Text>{'Here is your input: ' + this.props.testinput}</Text>
          <Text>{'Here is your selection: ' + this.props.dropdown}</Text>
        </View>
        <View>
          <Button
            onPress={(values) => {
              this.props.handleSubmit(values);
              this.testing(values);
              }}
            title='Submit' 
          />
        </View>
      </View>
    )
  }
}

AddItem = reduxForm({
  form: 'addItem'
})(AddItem);
const selector = formValueSelector('addItem');

const AddItemState = (store) => {
  const testinput = selector(store, 'testinput');
  const dropdown = selector(store, 'dropdown');
  return {
    dropdown,
    testinput,
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