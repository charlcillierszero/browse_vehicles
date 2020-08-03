import {
  DETERMINE_FILTER_VALUES,
  FILTER_VEHICLES,
  UPDATE_BODY,
  UPDATE_FROM_VALUE,
  UPDATE_MANUFACTURER,
  UPDATE_TO_VALUE
} from '../actions/filter';

const any = 'Any';

const INITIAL_STATE = {
  filteredVehicles: [],
  manufacturers: {
    currentValue: any,
    values: []
  },
  bodies: {
    currentValue: any,
    values: []
  },
  prices: {
    currentFrom: 0,
    currentTo: 10000000,
    fromMin: 0,
    fromMax: 10000000,
    toMin: 0,
    toMax: 10000000
  }
}

const isUnique = (value, index, self) => self.indexOf(value) === index;

const getUnique = (vehicles, callback = a => a) => {
  const vehiclesSafe = [...vehicles];
  const results = vehiclesSafe.map(callback);
  return results.filter(isUnique).sort();
};

const getFilteredVehicles = (state, vehicles) => {
  return vehicles.filter(vehicle =>
    (state.manufacturers.currentValue === any || vehicle.manufacturer === state.manufacturers.currentValue) &&
    (state.bodies.currentValue === any || vehicle.body === state.bodies.currentValue) &&
    vehicle.price >= state.prices.currentFrom &&
    vehicle.price <= state.prices.currentTo
  );
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DETERMINE_FILTER_VALUES: return {
      ...state,
      manufacturers: {
        ...state.manufacturers,
        values: getUnique(action.vehicles, vehicle => vehicle.manufacturer)
      },
      bodies: {
        ...state.bodies,
        values: getUnique(action.vehicles, vehicle => vehicle.body)
      },
    };
    case UPDATE_FROM_VALUE: return {
      ...state,
      prices: {
        ...state.prices,
        currentFrom: action.value,
        toMin: action.value
      }
    };
    case UPDATE_TO_VALUE: return {
      ...state,
      prices: {
        ...state.prices,
        currentTo: action.value,
        fromMax: action.value
      }
    };
    case UPDATE_MANUFACTURER: return {
      ...state,
      manufacturers: {
        ...state.manufacturers,
        currentValue: action.value
      }
    };
    case UPDATE_BODY: return {
      ...state,
      bodies: {
        ...state.bodies,
        currentValue: action.value
      }
    };
    case FILTER_VEHICLES: return {
      ...state,
      filteredVehicles: getFilteredVehicles(state, action.vehicles)
    };
    default: return state;
  };
};

export default reducer;