import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import * as authActions from '../actions/authActions.js';

import {
  View,
  Text,
  Button
} from 'react-native';

import CustomTextInput from './CustomTextInput.js';

const Login = (props) => {
  console.log('here are the props: ', props);

  return (
    <View>
      <View>
        <Text>Email</Text>
        <Field 
          name={'email'}
          component={CustomTextInput}
          placeholder='email'
        />
      </View>

      <View>
        <Text>Password</Text>
        <Field 
          name={'password'}
          component={CustomTextInput}
          placeholder='password'
        />
      </View>

      <View>
        <Button 
          onPress={() => props.handleSubmit(props.emailValue, props.passwordValue)}
          title='sign-up'
        >
          Sign Up
        </Button>

        <Button 
          onPress={() => props.handleSubmit(props.emailValue, props.passwordValue)}
          title='login'
        >
          Login
        </Button>
      </View>
    </View>
  );
};

Login = reduxForm({
  form: 'login'
})(Login);

const LoginState = (store) => {
  const selector = formValueSelector('login');
  const emailValue = selector(store, 'email');
  const passwordValue = selector(store, 'password');
  return {
    emailValue,
    passwordValue,
    username: store.auth.username,
    fridge: store.fridge.fridge,
  }
};

const LoginDispatch = (dispatch) => {
  return {
    itemActions: bindActionCreators(authActions, dispatch)
  }
};

export default connect(LoginState, LoginDispatch)(Login);