import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from './actions/authActions.js';
import * as fridgeActions from './actions/fridgeActions.js';

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
    setTimeout(() => {
      AsyncStorage.multiGet(['username', 'userId'])
        .then(data => {
          if (data[0][1] !== null) {
            console.log('found a user in asynstore');
            //set the gloabal username and userId from the AsynStorage
            this.props.itemActions.setUser(data[0][1], data[1][1]);
            this.getOrCreateFridge(data[0][1]);
          } else {
            this.setState({isReady: true});
          }
        })
        .catch(err => console.log('error with asynstore: ', err));
      }, 3000);
  }

  successfulLogin(user) {
    AsyncStorage.multiSet([
      ['username', user.username], ['userId', user.userId]
    ]); 

    this.props.authActions.setUser(user.username, user.userId);
    this.getOrCreateFridge(user.username);
  }

  getOrCreateFridge(username) {
    const { getFridge, addFridge } = this.props.fridgeActions;

    getFridge(username, (err, fridge) => {
      if (err) {
        return console.log('error getting fridge: ', err);
      }

      if (!fridge) {
        addFridge({users: [username], name: username}, err => {
          if (err) {
            return console.log('could not add fridge');
          }

          this.setState({isReady: true});
        });
      } else {
        this.setState({isReady: true});
      }
    });
  }

  render () {
    if (!this.state.isReady) {
      return (
        <Loading />
      );
    }

    if (this.props.fridgeName) {
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
    fridgeName: store.fridge.fridge.name
  }
};

const AppDispatch = (dispatch) => {
  return {
    authActions: bindActionCreators(authActions, dispatch),
    fridgeActions: bindActionCreators(fridgeActions, dispatch)
  }
};

export default connect(AppState, AppDispatch)(App);
