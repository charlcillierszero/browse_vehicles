import {
  ADD_VEHICLE_TO_CART,
  REMOVE_VEHICLE_FROM_CART,
  TOGGLE_CART
} from '../actions/cart';

const INITIAL_STATE = {
  cartItems: [],
  showCart: false
};

const removeVehicleFromCart = (state, vehicle) => {
  const cartItems = [...state.cartItems];
  const index = cartItems.findIndex(item => item.id === vehicle.id);
  cartItems.splice(index, 1)
  return cartItems;
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_VEHICLE_TO_CART: return {
      ...state,
      cartItems: [
        ...state.cartItems,
        action.vehicle
      ]
    };
    case REMOVE_VEHICLE_FROM_CART: return {
      ...state,
      cartItems: removeVehicleFromCart(state, action.vehicle)
    };
    case TOGGLE_CART: return {
      ...state,
      showCart: !state.showCart
    };
    default: return state;
  };
}

export default reducer;