import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from './actions/authActions.js';

import {
  View,
  Text,
  AsyncStorage
} from 'react-native';

import Login from './components/LogIn.js';
import Fridge from './components/Fridge.js';
import Loading from './components/Loading.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isReady: false
    };

    this.successfulLogin = this.successfulLogin.bind(this);
  }

  componentWillMount() {
    AsyncStorage.multiGet(['username', 'userId'])
      .then(data => {
        if (data[0][1] !== null) {
          console.log('found a user in asynstore');
          //set the gloabal username and userId from the AsynStorage
          this.props.itemActions.setUser(data[0][1], data[1][1]);
        } 

        this.setState({isReady: true});
      })
      .catch(err => console.log('error with asynstore: ', err));
  }

  successfulLogin(user) {
    this.props.itemActions.setUser(user.username, user.userId);
    AsyncStorage.multiSet([
      ['username', user.username], ['userId', user.userId]
    ]); 
  }

  render () {
    //if !this.state.isReady then return loading screen
    if (!this.state.isReady) {
      return (
        <Loading />
      );
    }

    if (this.props.username) {
      return (
        <Fridge />
      );
    }

    return (
      <Login successfulLogin={this.successfulLogin} />
    );

  }
}

const AppState = (store) => {
  return {
    username: store.auth.username,
    userId: store.auth.userId,
  }
};

const AppDispatch = (dispatch) => {
  return {
    itemActions: bindActionCreators(authActions, dispatch)
  }
};

export default connect(AppState, AppDispatch)(App);
