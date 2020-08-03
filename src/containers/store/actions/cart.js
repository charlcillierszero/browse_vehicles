const ADD_VEHICLE_TO_CART = 'ADD_VEHICLE_TO_CART';
const REMOVE_VEHICLE_FROM_CART = 'REMOVE_VEHICLE_FROM_CART';

const TOGGLE_CART = 'TOGGLE_CART';

const addVehicleToCart = vehicle => dispatch => dispatch({ type: ADD_VEHICLE_TO_CART, vehicle });
const removeVehicleFromCart = vehicle => dispatch => dispatch({ type: REMOVE_VEHICLE_FROM_CART, vehicle });

const toggleCart = () => dispatch => dispatch({ type: TOGGLE_CART });

export {
  ADD_VEHICLE_TO_CART,
  REMOVE_VEHICLE_FROM_CART,
  TOGGLE_CART,

  addVehicleToCart,
  removeVehicleFromCart,
  toggleCart,
};

