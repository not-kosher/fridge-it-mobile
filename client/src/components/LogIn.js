import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import * as authActions from '../actions/authActions.js';

import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Alert
} from 'react-native';

import CustomTextInput from './CustomTextInput.js';

const Login = (props) => {

  return (
    <View style={styles.pageWrapper}>
      <View style={styles.formContainer}>
        <Text style={styles.welcomeText}>
          Welcome to iFridge-It!
        </Text>

        <View style={styles.fieldWrapper}>
          <Field 
            style={styles.inputField}
            name='email'
            component={CustomTextInput}
            placeholder='email'
            autoCapitalize='none'
          />
        </View>

        <View style={styles.fieldWrapper}>
          <Field 
            style={styles.inputField}
            name='password'
            component={CustomTextInput}
            placeholder='password'
            secureTextEntry={true}
            autoCapitalize='none'
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            onPress={() => {
              if (!props.emailValue || !props.passwordValue) {
                Alert.alert('Failed Login', 'Please enter email and password', {text: 'OK', onPress: () => console.log('pressed ok')});
              } else {
                props.authActions.emailLogin(props.emailValue, props.passwordValue, (err, user) => {
                  if (err) {
                    console.log(err);
                    Alert.alert('Failed Login', err, [{text: 'OK', onPress: () => console.log('pressed ok')}]);
                  } else {
                    props.successfulLogin(user);
                  }
                });
              }
            }}
            style={{...styles.buttonWrapper, ...styles.login}}  
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity>          

          <TouchableOpacity 
            onPress={() => {
              if (!props.emailValue || !props.passwordValue) {
                Alert.alert('Failed Sign up', 'Please enter email and password', {text: 'OK', onPress: () => console.log('pressed ok')});
              } else {              
                props.authActions.emailSignUp(props.emailValue, props.passwordValue, (err, user) => {
                  if (err) {
                    console.log(err);
                    Alert.alert('Failed Sign up', err, [{text: 'OK', onPress: () => console.log('pressed ok')}]);

                  } else {
                    props.successfulLogin(user);
                  }
                })
              }
            }}
            style={{...styles.buttonWrapper, ...styles.signUp}}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Sign up</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </View> 
  );
};

const styles = {
  pageWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  formContainer: {
    height: 400,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 8,
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'rgb(46, 145, 212)'
  },
  welcomeText: {
    flex: 5,
    color: 'white',
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 5
  },
  fieldWrapper: {
    flex: 6,
    alignSelf: 'stretch',
    paddingTop: 5,
    paddingBottom: 5
  },
  inputField: { 
    flex: 1,
    alignSelf: 'stretch', 
    color: '#000000b3',
    backgroundColor: 'rgb(131, 211, 250)',
    borderColor: 'rgb(46, 145, 212)',
    borderWidth: 2,
    padding: 5,
    fontSize: 22,
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 15,
    marginTop: 10,
    alignSelf: 'stretch'
  },
  buttonWrapper: {
    flex: 1,
    alignSelf: 'stretch',
    marginTop: 6,
    marginBottom: 6
  },
  signUp: {
    flex: 11
  },
  login: {
    flex: 11
  },
  button: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#4c4c4c40',
    justifyContent: 'center',
    borderRadius: 5
  },
  buttonText: {
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white'
  }
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
    authActions: bindActionCreators(authActions, dispatch)
  }
};

export default connect(LoginState, LoginDispatch)(Login);