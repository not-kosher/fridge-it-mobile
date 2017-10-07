import { combineReducers } from 'redux';

import fridge from './fridgeReducers';
import items from './itemReducers';
import auth from './authReducers';
import messages from './messageReducers';
import { reducer as formReducer } from 'redux-form';

const Reducers = combineReducers({
  auth,
  fridge,
  items,
  messages,
  form: formReducer,
});

export default Reducers;