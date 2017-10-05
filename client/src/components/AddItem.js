import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  View,
  Text,
  TextInput,
  Button,
} from 'react-native'
import { Field, reduxForm, formValueSelector } from 'redux-form'

import * as itemActions from '../actions/itemActions';
import CustomTextInput from './CustomTextInput';


class AddItem extends React.Component {

  testing() {
    console.log('Also in here', this.props.testinput)
  }

  render () {
    return ( 
      <View>
        <View>
          <Text>Test input</Text>
          <Field name='testinput' component={CustomTextInput} />
        </View>
        <View>
          <Text>{'Here is your input: ' + this.props.testinput}</Text>
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
  return {
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