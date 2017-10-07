import { combineReducers } from 'redux';

import fridge from './fridgeReducers';
import items from './itemReducers';
import auth from './authReducers';
import message from './messageReducers';
import { reducer as formReducer } from 'redux-form';

const Reducers = combineReducers({
  auth,
  fridge,
  items,
  message,
  form: formReducer,
});

export default Reducers;