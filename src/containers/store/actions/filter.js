const DETERMINE_FILTER_VALUES = 'DETERMINE_FILTER_VALUES';

const UPDATE_FROM_VALUE = 'UPDATE_FROM_VALUE';
const UPDATE_TO_VALUE = 'UPDATE_TO_VALUE';

const UPDATE_MANUFACTURER = 'UPDATE_MANUFACTURER';
const UPDATE_BODY = 'UPDATE_BODY';

const FILTER_VEHICLES = 'FILTER_VEHICLES';

const determineFilterValues = vehicles => ({ type: DETERMINE_FILTER_VALUES, vehicles });

const filterVehiclesAction = vehicles => ({ type: FILTER_VEHICLES, vehicles });
const filterVehicles = vehicles => dispatch => dispatch(filterVehiclesAction(vehicles));

const updateFromValue = (value, vehicles) => dispatch => {
  dispatch({ type: UPDATE_FROM_VALUE, value });
  dispatch(filterVehiclesAction(vehicles));
}
const updateToValue = (value, vehicles) => dispatch => {
  dispatch({ type: UPDATE_TO_VALUE, value });
  dispatch(filterVehiclesAction(vehicles));
}
const updateManufacturer = (value, vehicles) => dispatch => {
  dispatch({ type: UPDATE_MANUFACTURER, value });
  dispatch(filterVehiclesAction(vehicles));
}
const updateBody = (value, vehicles) => dispatch => {
  dispatch({ type: UPDATE_BODY, value });
  dispatch(filterVehiclesAction(vehicles));
}

export {
  DETERMINE_FILTER_VALUES,
  UPDATE_FROM_VALUE,
  UPDATE_TO_VALUE,
  UPDATE_MANUFACTURER,
  UPDATE_BODY,
  FILTER_VEHICLES,

  updateFromValue,
  updateToValue,
  determineFilterValues,
  updateManufacturer,
  updateBody,
  filterVehicles,
};

