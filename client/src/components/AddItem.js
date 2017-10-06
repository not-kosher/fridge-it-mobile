import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
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
    const { goBack, navigate } = this.props.navigation;
    const item = {
      name: this.props.itemName,
      quantity: this.props.itemAmount,
      type: this.props.navigation.state.params.category || this.props.category,
      user: this.props.username,
    }
    this.props.itemActions.addItem(item, this.props.fridge.id, (err, item) => {
      if (err) {
        // handle error here
        console.log('Error adding item')
      } else {
        goBack();
      }
    });
  }

  render() {
    let category = this.props.navigation.state.params.category;
    if (category === 'grains') {
      category = 'grain';
    } else if (category !== 'protein') {
      category += ' item';
    }
    return ( 
      <View style={{
        flex: 1, 
        backgroundColor: this.props.navigation.state.params.backgroundColor
      }}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{`Add a ${category}`}</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <View style={styles.borderView}>
              <Field 
                name='itemName' 
                placeholder='Name of the item' 
                autoCapitalize='none'
                component={CustomTextInput}
                style={styles.inputField}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.borderView}>
              <Field 
                name='itemAmount' 
                placeholder='Amount' 
                keyboardType = 'numeric'
                component={CustomTextInput} 
                style={styles.inputField}
              />
            </View>
          </View>
          {!this.props.navigation.state.params.category ?
            <View style={styles.pickerContainer}>
              <View style={styles.pickerTitle}>
                <Text style={styles.pickerTitleText}>Select a category</Text>
              </View>
              <View style={styles.pickerView}>
                <Field 
                  name='category'
                  component={CustomPicker}
                  itemStyle={styles.pickerText}
                >
                  <Picker.Item label='Produce' value='produce' />
                  <Picker.Item label='Dairy' value='dairy' />
                  <Picker.Item label='Protein' value='protein' />
                  <Picker.Item label='Grains and Starches' value='grains' />
                  <Picker.Item label='Frozen' value='frozen' />
                  <Picker.Item label='Miscellaneous' value='misc' />
                </Field>
              </View>
            </View>
            : 
            null
          }
          <View style={{
            // add style here because of variable flex size
            flex: this.props.navigation.state.params.category ? 7 : 2, 
            paddingTop: 20,
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}>
            <TouchableOpacity onPress={this.handleSubmit}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Submit</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const darkText = '#00000099';
const lightText = '#ffffff99';

let styles = {
  formView: {
    flex: 1, 
    backgroundColor: ''
  },
  title: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'flex-end',
    paddingBottom: 40
  },
  formContainer: {
    flex: 5, 
    justifyContent: 'space-around'
  },
  inputContainer: {
    flex: 1.5,
  }, 
  pickerContainer: {
    flex: 5
  },
  pickerTitle: {
    flex: 1, 
    justifyContent: 'flex-end', 
    alignItems: 'center', 
  }, 
  pickerView: {
    flex: 5,
    justifyContent: 'center',
  },
  borderView: {
    height: 50, 
    width: 250,
    alignSelf: 'center', 
    borderWidth: 2,
    borderColor: '#00000010',
    backgroundColor: '#ffffff80'
  }, 
  inputField: {
    flex: 1, 
    alignSelf: 'stretch', 
    padding: 5,
    color: darkText
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: darkText
  },
  pickerTitleText: {
    fontSize: 18,
    color: darkText
  },
  pickerText: {
    color: darkText
  },
  button: {
    marginBottom: 30,
    width: 180,
    alignItems: 'center',
    backgroundColor: '#4c4c4c40'
  },
  buttonText: {
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: lightText
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