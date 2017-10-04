import { combineReducers } from 'redux';

import fridge from './fridgeReducers';
import items from './itemReducers';
import auth from './authReducers';

const Reducers = combineReducers({
  auth,
  fridge,
  items,
});

export default Reducers;