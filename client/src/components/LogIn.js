import React from 'react';
import { reduxForm, Field } from 'redux-form';

import {
  View,
  Text
} from 'react-native';

import CustomTextInput from './CustomTextInput.js';


const Login = (props) => (
  <View>
    <View>
      <Text>Email</Text>
      <Field 
        name={'email'}
        component={CustomTextInput}
      />
    </View>

    <View>
      <Text>Password</Text>
      <Field 
        name={'password'}
        component={CustomTextInput}
      />
    </View>
  </View>
);

export default reduxForm({ form: 'signIn' })(Login);