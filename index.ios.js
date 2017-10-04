import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger as logger } from 'redux-logger';
import promise from 'redux-promise-middleware';

import Reducers from './reducers';

// Initialize middleware for redux
//sets logger just for development
const loggerMiddleware = logger({predicate: (getState, action) => __DEV__});
const middleware = applyMiddleware(promise(), thunk, loggerMiddleware);

// Initialize redux state with (reducers, middleware)
const store = createStore(Reducers, middleware);

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import App from './client/src/App'


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

