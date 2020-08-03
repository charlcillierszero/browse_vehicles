import {
  GET_ALL_VEHICLES_FAIL,
  GET_ALL_VEHICLES_START,
  GET_ALL_VEHICLES_SUCCESS
} from '../actions/fetchVehicles';

const INITIAL_STATE = {
  vehicles: [],
  loading: false,
  error: null
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_VEHICLES_START: return {
      ...state,
      loading: true,
      error: null
    };
    case GET_ALL_VEHICLES_SUCCESS: return {
      ...state,
      loading: false,
      vehicles: action.vehicles
    };
    case GET_ALL_VEHICLES_FAIL: return {
      ...state,
      loading: false,
      error: action.error
    };
    default: return state;
  }
};

export default reducer;