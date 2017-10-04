import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger as logger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import {
  AppRegistry,
} from 'react-native';

import Reducers from './client/src/reducers';
import App from './client/src/App'

// Initialize middleware for redux
//sets logger just for development
const loggerMiddleware = logger({predicate: (getState, action) => __DEV__});
const middleware = applyMiddleware(promise(), thunk, loggerMiddleware);

// Initialize redux state with (reducers, middleware)
const store = createStore(Reducers, middleware);

export default class FridgeItMobile extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('FridgeItMobile', () => FridgeItMobile);

