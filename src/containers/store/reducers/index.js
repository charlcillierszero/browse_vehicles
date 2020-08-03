import { combineReducers } from 'redux';
import cart from './cart';
import fetchVehicles from './fetchVehicles';
import filter from './filter';

const rootReducer = combineReducers({
  fetchVehicles,
  filter,
  cart
});

export default rootReducer;