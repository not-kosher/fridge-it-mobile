import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'react-native';

import * as authActions from '../actions/authActions.js';

const Logout = (props) => (
  <Button title='Logout' onPress={() => {
    props.authActions.logoutUser()
  }}/>
);

const LogoutState = (store) => {
  return {}
};

const LogoutDispatch = (dispatch) => {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  }
};

export default connect(LogoutState, LogoutDispatch)(Logout);