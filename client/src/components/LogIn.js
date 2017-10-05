import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import * as authActions from '../actions/authActions.js';

import {
  View,
  Text,
  Button,
} from 'react-native';

import CustomTextInput from './CustomTextInput.js';

const Login = (props) => {

  return (
    <View>
      <View>
        <Text>Email</Text>
        <Field 
          name='email'
          component={CustomTextInput}
          placeholder='email'
          autoCapitalize='none'
        />
      </View>

      <View>
        <Text>Password</Text>
        <Field 
          name='password'
          component={CustomTextInput}
          placeholder='password'
          secureTextEntry='true'
          autoCapitalize='none'
        />
      </View>

      <View>
        <Button 
          onPress={() => {
            props.itemActions.emailSignUp(props.emailValue, props.passwordValue, (err, user) => {
              if (err) {
                console.log(err);
              } else {
                props.successfulLogin(user);
              }
            })
          }}
          title='sign-up'
        >
          Sign Up
        </Button>

        <Button 
          onPress={() => {
            props.itemActions.emailLogin(props.emailValue, props.passwordValue, (err, user) => {
              if (err) {
                console.log(err);
              } else {
                props.successfulLogin(user);
              }
            })
          }}
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