import { fetchAllVehicles } from '../../../axios';
import { determineFilterValues, filterVehicles } from './filter';

const GET_ALL_VEHICLES_START = 'GET_ALL_VEHICLES_START';
const GET_ALL_VEHICLES_SUCCESS = 'GET_ALL_VEHICLES_SUCCESS';
const GET_ALL_VEHICLES_FAIL = 'GET_ALL_VEHICLES_FAIL';

const getAllVehiclesStart = () => ({ type: GET_ALL_VEHICLES_START });
const getAllVehiclesSuccess = vehicles => ({ type: GET_ALL_VEHICLES_SUCCESS, vehicles });
const getAllVehiclesFail = error => ({ type: GET_ALL_VEHICLES_FAIL, error });

const getAllVehicles = () => dispatch => {
  dispatch(getAllVehiclesStart());
  fetchAllVehicles()
    .then(res => {
      const vehicles = res.data.data;
      dispatch(getAllVehiclesSuccess(vehicles));
      dispatch(determineFilterValues(vehicles));
      dispatch(filterVehicles(vehicles));
    })
    .catch(error => dispatch(getAllVehiclesFail(error)));
};

export {
  GET_ALL_VEHICLES_START,
  GET_ALL_VEHICLES_SUCCESS,
  GET_ALL_VEHICLES_FAIL,

  getAllVehicles,
};

